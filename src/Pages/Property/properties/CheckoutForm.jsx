import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useProperty from "../../../hooks/useProperty";

const CheckoutForm = ({ property }) => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [isCardComplete, setIsCardComplete] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { data, refetch } = useProperty();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: property.price })
            .then(res => setClientSecret(res.data.clientSecret));
    }, [axiosSecure, property.price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements || !isCardComplete) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        const { error: paymentMethodError } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (paymentMethodError) {
            setError(paymentMethodError.message);
            return;
        } else {
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            setError(confirmError.message);
            return;
        }

        if (paymentIntent?.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            await axiosPublic.put(`/property/${property._id}`, { condition: "Sold", email: user?.email });

            const payment = {
                email: user?.email,
                price: property.price,
                transactionId: paymentIntent.id,
                date: new Date().toISOString().split('T')[0],
                name: property.name,
            };

            const res = await axiosPublic.post(`/payment`, payment);

            if (res.data) {
                refetch();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Thank you for your purchase!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/property');
            }
        }
    };

    const handleCardChange = (event) => {
        setIsCardComplete(event.complete);
        setError(event.error ? event.error.message : "");
    };

    return (
        <div className="max-w-md lg:max-w-lg mx-auto p-6 lg:p-8 bg-white shadow-xl rounded-xl border border-gray-200">
            <h2 className="text-2xl lg:text-3xl font-semibold text-blue-800 mb-6 text-center">Property Purchase</h2>

            {/* Property Info */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-inner">
                <h3 className="text-lg md:text-2xl font-medium text-gray-700">{property.name}</h3>
                <p className="text-sm md:text-lg font-semibold text-blue-600">{property.address}</p>
                <p className="mt-2 text-gray-600 font-semibold">Price: ${property.price}</p>
            </div>

            {/* Payment Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="p-4 border border-gray-300 rounded-lg">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: window.innerWidth < 640 ? '14px' : '16px',
                                    color: '#424770',
                                    '::placeholder': { color: '#aab7c4' },
                                },
                                invalid: { color: '#9e2146' },
                            },
                        }}
                        onChange={handleCardChange}
                    />
                </div>

                <button
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay ${property.price}
                </button>

                {error && <p className="text-red-600 text-sm lg:text-base text-center">{error}</p>}
                {transactionId && (
                    <p className="text-green-600 text-sm lg:text-base text-center">
                        Payment successful! Transaction ID: {transactionId}
                    </p>
                )}
            </form>
        </div>
    );
};

export default CheckoutForm;

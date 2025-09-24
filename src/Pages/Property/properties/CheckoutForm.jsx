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
    const axiosPublic =useAxiosPublic();
    const navigate =useNavigate();
    const { user } = useAuth();
    const {data,refetch} =useProperty();
    

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: property.price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            });
    }, [axiosSecure, property.price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || !isCardComplete) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
        } else {
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
               
                await axiosPublic.put(`/property/${property._id}`, { condition: "Sold", email: user?.email });
                
                 const email = user?.email;
                // now save the payment in the database
                const payment = {
                    email: email,
                    price:property.price ,
                    transactionId: paymentIntent.id,
                    date: new Date().toISOString().split('T')[0],// utc date convert. use moment js to
                    name:property.name,
                
                
                }

                const res = await axiosPublic.post(`/payment`, payment);
                console.log('payment saved', res.data);
                if (res.data) {
                    refetch();
                    refetch();
                    Swal.fire({
                        position: "top-centre",
                        icon: "success",
                        title: "Thank your Purchase",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/property');
                }
                
                
                
            }
        }

    };

    const handleCardChange = (event) => {
        setIsCardComplete(event.complete);
        setError(event.error ? event.error.message : "");
    };

    return (
        <div className="max-w-md lg:max-w-lg mx-auto p-6 lg:p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl lg:text-3xl font-semibold text-blue-800 mb-4">Property Purchase</h2>
            <div className="mb-4 gap-2">
                <h3 className="text-lg md:text-2xl font-medium text-gray-700">{property.name}</h3>
                <p className="text-sm md:text-xl font-semibold text-blue-600">{property.address}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="p-3 border border-gray-300 rounded">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: window.innerWidth < 640 ? '14px' : '16px', // smaller font size on small devices
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                        onChange={handleCardChange}
                    />

                </div>
                <button
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
                    type="submit"
                    disabled={!stripe || !clientSecret }
                >
                    Pay ${property.price}
                </button>
                {error && <p className="text-red-600 text-sm lg:text-base">{error}</p>}
                {transactionId && (
                    <p className="text-green-600 text-sm lg:text-base">
                        Payment successful! Your transaction ID: {transactionId}
                    </p>
                )}
            </form>
        </div>
    );
};

export default CheckoutForm;

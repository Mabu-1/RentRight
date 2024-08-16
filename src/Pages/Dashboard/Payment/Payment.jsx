import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useUser from "../../../hooks/UseUser";
import usePackage from "../../../hooks/usePackage";
import Loading from "../../../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
    const axiosPublic = useAxiosPublic();
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format
        setCurrentDate(today);
    }, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { user } = useContext(AuthContext);
    const { data, isLoading, isError, error,refetch } = useUser();
    const { data: PackData, isLoading: isLoadingPack, isError: isErrorPack, error: errorPack } = usePackage();

    if (isLoading || isLoadingPack) {
        return <Loading />;
    }

    if (isError || isErrorPack) {
        return <div className="text-red-500 text-center">Error: {error?.message || errorPack?.message}</div>;
    }

    const email = user?.email;
    const userData = data.find(u => u.email === email);
    const userServiceId = userData?.service;
    const serviceData = PackData.find(p => p._id === userServiceId);


    const handlePurchase = async (buyInfo) =>
        {
           
            const email =user.email;
                    
            const propertyBuy = await axiosPublic.put(`/users/${email}`, buyInfo);
            console.log('Property purchase updated:', propertyBuy.data);
            refetch();

        }
        
    const onSubmit = async (formData) => {
        if (userData?.servicePaid === "yes") {
            toast.warning("Service has already been paid for!");
            return; // Do not proceed with the payment
        }

        try {
            const buyInfo = {
                serviceDate: formData.date,
                servicePaid: "yes"
            };
           
           

            Swal.fire({
                title: 'Confirm Purchase',
                text: "Are you sure you want to complete the purchase?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, complete purchase'
            }).then((result) => {
                if (result.isConfirmed) {
                    handlePurchase(buyInfo)
                    Swal.fire(
                        'Purchased!',
                        'Your purchase has been completed.',
                        'success'
                    ).then(() => {
                        reset();
                    });
                }
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong while adding user to the database!",
            });
            console.error("Database insertion error:", error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg ">
            <ToastContainer />
            <div className="text-center">
                <h1 className="text-3xl font-bold text-blue-800 mb-4">Complete Your Payment</h1>
            </div>
            <div className="border-t border-gray-300 pt-6 mt-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Buyer Information</h2>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={serviceData?.name}
                            readOnly
                            {...register('name')}
                        />
                        {errors.date && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Price</label>
                        <input
                            type="number"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={serviceData?.price}
                            readOnly
                            {...register('number')}
                        />
                        {errors.date && <span className="text-red-600">Price is required</span>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Date</label>
                        <input
                            type="date"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={currentDate}
                            readOnly
                            {...register('date')}
                        />
                        {errors.date && <span className="text-red-600">Date is required</span>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Payment Method</label>
                        <select
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            {...register('paymentMethod', { required: true })}
                        >
                            <option value="creditCard">Credit Card</option>
                            <option value="bankTransfer">Bank Transfer</option>
                            <option value="paypal">PayPal</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white p-3 rounded-lg font-bold hover:bg-green-700 transition duration-300 flex items-center justify-center gap-2"
                    >
                        <FaCheckCircle />
                        Complete Payment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Payment;

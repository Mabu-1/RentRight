import { useNavigate, useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useUser from "../../../hooks/UseUser";
import Loading from "../../../Loading/Loading";

const PropertyBuy = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const navigate = useNavigate();
    
    const property = useLoaderData(); // Use the loader data directly
    const { data: userData, isLoading, isError } = useUser();

    // Safely access user data
    const userBuy = userData?.find((u) => u.email === email);
    
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setCurrentDate(today);
    }, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    if (isLoading) return <Loading />;
    if (isError) return <div>Error loading user data</div>;
    const handlePurchase = async (propertyInfo, propertyId) => {
        try {
            const propertyBuy = await axiosPublic.put(`/users/${email}`, propertyInfo);
            const propertyBought = await axiosPublic.put(`/property/${propertyId}`, { condition: "Sold", email: email });
            console.log('Property purchase updated:', propertyBuy.data, propertyBought);
        } catch (error) {
            console.error('Error updating property purchase:', error);
        }
    };

    const onSubmit = async (formData) => {
        try {
            const address = formData.address;
            const profession = formData.profession;
            const phone = formData.phoneNumber;
            const propertyId = property._id;

            const propertyInfo = {
                buy: property._id,
                address,
                profession,
                phone,
                buyDate: currentDate,
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
                    handlePurchase(propertyInfo, propertyId);
                    Swal.fire('Purchased!', 'Your purchase has been completed.', 'success').then(() => {
                        reset();
                        navigate('/property');
                    });
                }
            });
        } catch (errors) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
            console.error("Error:", error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg ">
                     <div className="text-center">
                     <h1 className="text-3xl font-bold text-blue-800 mb-4">Complete Your Purchase</h1>

                     </div>
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-700">Property Summary</h2>
                <p className="text-xl text-blue-600">{property.name} - <span className="text-sm text-green-600 align-top">$</span> <span className="text-green-500 font-bold"> {property.price}</span></p>
                <p className="text-xl text-gray-700">{property.address}</p>
            </div>

            <div className="border-t border-gray-300 pt-6 mt-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Buyer Information</h2>
                {
                    userBuy ?
                    <>
                     <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-gray-700">Profession</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={userBuy?.profession}
                            placeholder="Your Profession"
                            readOnly
                            {...register('profession')}
                        />
                        {errors.name && <span className="text-red-600">Profession name is required</span>}

                    </div>
                    <div>
                        <label className="block text-gray-700">Address</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={userBuy?.address}
                            placeholder="Your address"
                            readOnly
                            {...register('address')}
                        />
                        {errors.name && <span className="text-red-600">Address is required</span>}

                    </div>
                  
                    <div>
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="number"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={userBuy?.phone}
                            placeholder="Your Phone Number"
                            readOnly
                            {...register('phoneNumber')}
                        />
                        {errors.number && <span className="text-red-600">Phone Number is required</span>}

                    </div>
                    <div >
                <label className="block text-gray-700">Date</label>
                <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    value={currentDate}
                    readOnly
                    {...register('buyDate')}
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
                        Complete Purchase
                    </button>
                </form>
                    </>:
                    <>
                      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-gray-700">Profession</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                           
                            placeholder="Your Profession"
                            {...register('profession', { required: true })}
                        />
                        {errors.name && <span className="text-red-600">Profession name is required</span>}

                    </div>
                    <div>
                        <label className="block text-gray-700">Address</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                           
                            placeholder="Your address"
                            {...register('address', { required: true })}
                        />
                        {errors.name && <span className="text-red-600">Address is required</span>}

                    </div>
                  
                    <div>
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="number"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                          
                            placeholder="Your Phone Number"
                            {...register('phoneNumber', { required: true })}
                        />
                        {errors.number && <span className="text-red-600">Phone Number is required</span>}

                    </div>
                    <div >
                <label className="block text-gray-700">Date</label>
                <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    value={currentDate}
                    readOnly
                    {...register('buyDate')}
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
                        Complete Purchase
                    </button>
                </form>
                    </>
                }
              
            </div>
        </div>
    );
};

export default PropertyBuy;

import { useForm } from "react-hook-form";
import useUser from "../../../hooks/UseUser";
import Loading from "../../../Loading/Loading";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";

const Review = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { data, isLoading, isError, error } = useUser();

<<<<<<< HEAD
    if (isLoading) return <Loading />;
    if (isError) return <div className="text-red-500 text-center">Error: {error?.message}</div>;
=======
    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div className="text-red-500 text-center">Error: {error?.message}</div>;
    }
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24

    const email = user?.email;
    const userData = data.find(u => u.email === email);

    const onSubmit = async (formData) => {
        try {
            const userInfo = {
                imageUrl: userData?.image,
                profession: userData?.profession,
                name: userData?.name,
                text: formData.review,
                star: rating
            };

<<<<<<< HEAD
=======
            const reviewInfo = await axiosPublic.post(`/review`, userInfo);

>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
            Swal.fire({
                title: 'Confirm Submit',
                text: "Are you sure you want to post the review?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
<<<<<<< HEAD
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosPublic.post(`/review`, userInfo);

=======
            }).then((result) => {
                if (result.isConfirmed) {
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
                    Swal.fire(
                        'Submitted!',
                        'Your review has been submitted.',
                        'success'
                    ).then(() => {
                        reset();
                        setRating(null);
                    });
                }
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong while adding the review to the database!",
            });
            console.error("Database insertion error:", error);
        }
    };

    return (
<<<<<<< HEAD
        <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
            <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-green-600">Submit Your Review</h2>
                <p className="text-gray-500 text-sm md:text-base mt-2">
                    Share your feedback to help others!
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
=======
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-green-600">Submit Your Review</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg"
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
                        value={userData?.name}
                        readOnly
                        {...register('name', { required: true })}
                    />
<<<<<<< HEAD
                    {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Rating</label>
                    <div className="flex space-x-2 justify-center md:justify-start">
=======
                    {errors.name && <span className="text-red-600">Name is required</span>}
                </div>

                <div>
                    <label className="block text-gray-700">Rating</label>
                    <div className="flex space-x-1">
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
                        {[...Array(5)].map((_, index) => {
                            const currentRate = index + 1;
                            return (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        className="hidden"
                                        value={currentRate}
                                        onClick={() => setRating(currentRate)}
                                        {...register('rating', { required: true })}
                                    />
                                    <FaStar
<<<<<<< HEAD
                                        size={40}
                                        className="cursor-pointer transition-transform hover:scale-110"
                                        color={currentRate <= (hover || rating) ? "#F59E0B" : "#D1D5DB"}
=======
                                        size={50}
                                        color={currentRate <= (hover || rating) ? "red" : "gray"}
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
                                        onMouseEnter={() => setHover(currentRate)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label>
                            );
                        })}
                    </div>
<<<<<<< HEAD
                    {errors.rating && <span className="text-red-600 text-sm">Rating is required</span>}
                </div>

                {/* Review */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Review</label>
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        rows="5"
                        placeholder="Write your review..."
                        {...register('review', { required: true })}
                    ></textarea>
                    {errors.review && <span className="text-red-600 text-sm">Review is required</span>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-3 rounded-lg font-bold hover:bg-green-700 transition duration-300"
=======
                    {errors.rating && <span className="text-red-600">Rating is required</span>}
                </div>

                <div>
                    <label className="block text-gray-700">Review</label>
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        rows="5"
                        {...register('review', { required: true })}
                    ></textarea>
                    {errors.review && <span className="text-red-600">Review is required</span>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default Review;

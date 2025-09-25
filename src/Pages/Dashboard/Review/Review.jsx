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

    if (isLoading) return <Loading />;
    if (isError) return <div className="text-red-500 text-center">Error: {error?.message}</div>;

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

            Swal.fire({
                title: 'Confirm Submit',
                text: "Are you sure you want to post the review?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosPublic.post(`/review`, userInfo);

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
                    <label className="mabu-text3 block text-gray-700 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        value={userData?.name}
                        readOnly
                        {...register('name', { required: true })}
                    />
                    {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Rating</label>
                    <div className="flex space-x-2 justify-center md:justify-start">
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
                                        size={40}
                                        className="cursor-pointer transition-transform hover:scale-110"
                                        color={currentRate <= (hover || rating) ? "#F59E0B" : "#D1D5DB"}
                                        onMouseEnter={() => setHover(currentRate)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label>
                            );
                        })}
                    </div>
                    {errors.rating && <span className="text-red-600 text-sm">Rating is required</span>}
                </div>

                {/* Review */}
                <div>
                    <label className=" mabu-text3 block text-gray-700 font-medium mb-1">Review</label>
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
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default Review;

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

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div className="text-red-500 text-center">Error: {error?.message}</div>;
    }

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

            const reviewInfo = await axiosPublic.post(`/review`, userInfo);

            Swal.fire({
                title: 'Confirm Submit',
                text: "Are you sure you want to post the review?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
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
                        value={userData?.name}
                        readOnly
                        {...register('name', { required: true })}
                    />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                </div>

                <div>
                    <label className="block text-gray-700">Rating</label>
                    <div className="flex space-x-1">
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
                                        size={50}
                                        color={currentRate <= (hover || rating) ? "red" : "gray"}
                                        onMouseEnter={() => setHover(currentRate)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label>
                            );
                        })}
                    </div>
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
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default Review;

import { useForm } from "react-hook-form";
import useUser from "../../../hooks/UseUser";
import Loading from "../../../Loading/Loading";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Review = () => {
    const axiosPublic = useAxiosPublic();
const {user} =useContext(AuthContext);

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
    const onSubmit = async(formData) => {
        // Handle review submission logic here
        console.log("Review Submitted: ", formData);
        try {
            const userInfo = {
               imageUrl:userData?.image,
               profession:userData?.profession,
               name:userData?.name,
               text:formData.review,
               star:formData.rating

            };

            const reviewInfo = await axiosPublic.post(`/review`, userInfo);
    

            Swal.fire({
                title: 'Confirm  Submit',
                text: "Are you sure you want to post the review",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Submit!',
                        'Your review has been Submitted.',
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
        // Display success message
       
        
        // Reset the form after submission
        reset();
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
                    <label className="block text-gray-700">Profession</label>
                    <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={userData?.profession}
                        readOnly
                        {...register('profession', { required: true })}
                    />
                    {errors.profession && <span className="text-red-600">Profession is required</span>}
                </div>
                <div>
                    <label className="block text-gray-700">Rating</label>
                    
                    <select
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        type="number"
                        {...register('rating', { required: true })}
                    >
                        <option value="5">5 Stars</option>
                        <option value="4">4.5 Stars</option>
                        <option value="3">4 Stars</option>
                        <option value="2">3.5 Stars</option>
                        <option value="1">3 Star</option>
                        <option value="5">2.5 Stars</option>
                        <option value="4">2 Stars</option>
                        <option value="3">1.5 Stars</option>
                        <option value="2">1 Stars</option>
                        
                    </select>
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

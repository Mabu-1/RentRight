import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const CreateNotification = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const today = new Date();
        setCurrentDate(today.toISOString().split('T')[0]); // YYYY-MM-DD

        const hours = today.getHours();
        const minutes = today.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        setCurrentTime(`${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`);
    }, []);

    const onSubmit = async (data) => {
        try {
            const notificationInfo = { title: data.title, message: data.message, date: currentDate, time: currentTime };
            const response = await axiosPublic.post(`/notification`, notificationInfo);
            if (response.status === 200) {
                Swal.fire("Success!", "Notification created successfully!", "success");
                reset();
            }
        } catch (error) {
            console.error("Error creating notification:", error);
            Swal.fire("Error!", "There was a problem creating the notification.", "error");
        }
    };

    return (
        <div className="max-w-4xl mx-auto my-10 p-6 sm:p-10 bg-white rounded-2xl shadow-xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-8">Create Notification</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 sm:gap-8">
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        {...register("title", { required: "Title is required" })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                    {errors.title && <span className="text-red-600 text-sm mt-1 block">{errors.title.message}</span>}
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                        {...register("message", { required: "Message is required" })}
                        className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-red-500 focus:outline-none resize-none"
                    ></textarea>
                    {errors.message && <span className="text-red-600 text-sm mt-1 block">{errors.message.message}</span>}
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
                    >
                        Create Notification
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateNotification;

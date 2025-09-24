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
<<<<<<< HEAD
        setCurrentDate(today.toISOString().split('T')[0]); // YYYY-MM-DD
=======
        const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD format
        setCurrentDate(formattedDate);
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24

        const hours = today.getHours();
        const minutes = today.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
<<<<<<< HEAD
        setCurrentTime(`${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`);
=======
        const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
        setCurrentTime(formattedTime);
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
    }, []);

    const onSubmit = async (data) => {
        try {
<<<<<<< HEAD
            const notificationInfo = { title: data.title, message: data.message, date: currentDate, time: currentTime };
=======
            const notificationInfo = {
                title: data.title,
                message: data.message,
                date: currentDate,
                time: currentTime,
            };

>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
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
<<<<<<< HEAD
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
=======
        <div className="my-7 p-4 sm:p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
            <div className="text-center mb-7">
                <h1 className="text-red-600 font-bold text-3xl sm:text-5xl">Create Notification</h1>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 sm:gap-6">

                    <div>
                        <label className="block text-gray-700 mb-2">Title</label>
                        <input
                            type="text"
                            {...register("title", { required: "Title is required" })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.title && <span className="text-red-600">{errors.title.message}</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Message</label>
                        <textarea
                            {...register("message", { required: "Message is required" })}
                            className="w-full p-3 border border-gray-300 rounded-lg h-32"
                        ></textarea>
                        {errors.message && <span className="text-red-600">{errors.message.message}</span>}
                    </div>

                    <button
                        type="submit"
                        className="bg-red-500 text-white p-3 rounded-lg font-bold hover:bg-red-700 transition duration-300 col-span-1"
                    >
                        Create Notification
                    </button>
                </form>
            </div>
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
        </div>
    );
};

export default CreateNotification;

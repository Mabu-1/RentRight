import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const UpdatedNotification = () => {
    const notification = useLoaderData();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit,reset, formState: { errors } } = useForm({
        defaultValues: notification
    });



    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setCurrentDate(today);
    }, []);
    
    useEffect(() => {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        setCurrentTime(time);
    }, []);
    
    const onSubmit = async (data) => {
       
    data.state="unread";
    data.time=currentTime;
    console.log(currentTime);
    data.date=currentDate;
        
        try {
            const response = await axiosPublic.put(`/notification/${notification._id}`, data);
            if (response.status === 200) {
                Swal.fire("Success!", "Notification updated successfully!", "success");
                reset();
            }
        } catch (error) {
            console.error("Error updating notification:", error);
            Swal.fire("Error!", "There was a problem updating the notification.", "error");
        }
    };

    return (
        <div className="p-8 max-w-7xl mx-auto bg-gray-100 rounded-lg shadow-lg">
            <div className="p-6 bg-white rounded-lg">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">{notification.title}</h1>
                    <p className="text-gray-600 text-xl mb-4">{notification.description}</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                    <div>
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            {...register("title", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.title && <span className="text-red-600">Title is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Message</label>
                        <input
                            type="text"
                            {...register("message", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.message && <span className="text-red-600">Message is required</span>}
                    </div>
                  
                    <div>
                        <label className="block text-gray-700">Type</label>
                        <input
                            type="text"
                            {...register("type", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.type && <span className="text-red-600">Type is required</span>}
                    </div>

                    <button
                        type="submit"
                        className="col-span-2 bg-blue-500 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
                    >
                        Update Notification
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdatedNotification;

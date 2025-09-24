import { useState } from "react";
import useNotification from "../../../hooks/UseNotification";
import Loading from "../../../Loading/Loading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Notification = () => {
    const { data, isLoading, isError, error, refetch } = useNotification();
    const axiosPublic = useAxiosPublic();
    const [read, setRead] = useState('All');

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div className="text-red-500 text-center">Error: {error?.message}</div>;
    }

    const filteredNotifications = data?.filter(notification =>
        read === 'All' || notification.state === read
    );

    const handleState = async (id) => {
        const stateFilter = data?.find(p => p._id.toString() === id.toString());

        if (stateFilter) {
            const stateId = stateFilter._id;

            try {
                await axiosPublic.put(`notification/${stateId}`, { state: "read" });
            } catch (error) {
                console.error("Error updating notification state:", error);
            }
        } else {
            console.error("Notification not found");
        }
        refetch();
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 my-[30px] sm:my-[40px] md:my-[50px]">
                    Notification
                </h1>
            </div>
            <div className="flex justify-center items-center mb-6">
                <div className="w-[120px] sm:w-[150px] border border-gray-300 rounded-lg px-3 py-2 font-bold">
                    <select
                        className="focus:outline-none bg-transparent w-full"
                        value={read}
                        onChange={(e) => setRead(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="read">Read</option>
                        <option value="unread">Unread</option>
                    </select>
                </div>
            </div>
            <div className="space-y-4  sm:p-4">
                {filteredNotifications.length > 0 ? (
                    filteredNotifications.map((notification, index) => (
                        <div
                            key={index}
                            className={`p-4 border rounded-lg ${notification.state === 'unread' ? 'bg-yellow-100' : 'bg-white'} shadow-sm`}
                        >
                            <h2 className="text-lg sm:text-xl font-bold">{notification.title}</h2>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 sm:mt-0">
                                <p className="text-sm sm:text-base">{notification.message}</p>
                                <button
                                    onClick={() => handleState(notification._id)}
                                    className={`mt-2 sm:mt-0 sm:ml-4 p-2 text-xs sm:text-sm font-semibold bg-red-500 text-white rounded-lg ${notification.state === 'unread' ? 'block' : 'hidden'}`}
                                >
                                    Read
                                </button>
                            </div>
                            <div className="text-gray-500 text-xs sm:text-sm mt-2">
                                <span>{notification.date}</span> | <span>{notification.time}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">No notifications found.</div>
                )}
            </div>
        </div>
    );
};

export default Notification;

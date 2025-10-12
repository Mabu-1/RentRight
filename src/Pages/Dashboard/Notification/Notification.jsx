import { useState, useMemo } from "react";
import useNotification from "../../../hooks/UseNotification";
import Loading from "../../../Loading/Loading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Notification = () => {
    // Call all hooks at the top level - no conditions before them
    const { data, isLoading, isError, error, refetch } = useNotification();
    const axiosPublic = useAxiosPublic();
    const [dateFilter, setDateFilter] = useState('All');

    // Helper function to check date ranges
    const isInDateRange = (dateString, range) => {
        const notificationDate = new Date(dateString.split(' | ')[0]);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        switch(range) {
            case 'Today':
                const notificationDay = new Date(notificationDate);
                notificationDay.setHours(0, 0, 0, 0);
                return notificationDay.getTime() === today.getTime();
            
            case 'Yesterday':
                const yesterday = new Date(today);
                yesterday.setDate(today.getDate() - 1);
                const notificationDayYesterday = new Date(notificationDate);
                notificationDayYesterday.setHours(0, 0, 0, 0);
                return notificationDayYesterday.getTime() === yesterday.getTime();
            
            case 'ThisWeek':
                const weekStart = new Date(today);
                weekStart.setDate(today.getDate() - today.getDay());
                const weekEnd = new Date(weekStart);
                weekEnd.setDate(weekStart.getDate() + 6);
                return notificationDate >= weekStart && notificationDate <= weekEnd;
            
            case 'LastWeek':
                const lastWeekStart = new Date(today);
                lastWeekStart.setDate(today.getDate() - today.getDay() - 7);
                const lastWeekEnd = new Date(lastWeekStart);
                lastWeekEnd.setDate(lastWeekStart.getDate() + 6);
                return notificationDate >= lastWeekStart && notificationDate <= lastWeekEnd;
            
            case 'Last7Days':
                const sevenDaysAgo = new Date(today);
                sevenDaysAgo.setDate(today.getDate() - 7);
                return notificationDate >= sevenDaysAgo;
            
            case 'Last30Days':
                const thirtyDaysAgo = new Date(today);
                thirtyDaysAgo.setDate(today.getDate() - 30);
                return notificationDate >= thirtyDaysAgo;
            
            case 'ThisMonth':
                return notificationDate.getMonth() === today.getMonth() && 
                       notificationDate.getFullYear() === today.getFullYear();
            
            case 'LastMonth':
                const lastMonth = new Date(today);
                lastMonth.setMonth(today.getMonth() - 1);
                return notificationDate.getMonth() === lastMonth.getMonth() && 
                       notificationDate.getFullYear() === lastMonth.getFullYear();
            
            case 'ThisYear':
                return notificationDate.getFullYear() === today.getFullYear();
            
            default:
                return true;
        }
    };

    // Apply only time-based filtering - useMemo is now called before any conditional returns
    const filteredNotifications = useMemo(() => {
        if (!data) return [];
        
        return data.filter(notification => {
            // Only apply date filter
            if (dateFilter !== 'All' && !isInDateRange(notification.date, dateFilter)) {
                return false;
            }
            return true;
        });
    }, [data, dateFilter]);

    // Now we can do conditional returns after all hooks have been called
    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div className="text-red-500 text-center">Error: {error?.message}</div>;
    }

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
        <div className="max-w-4xl mx-auto p-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-bold text-red-600 mb-2">
                    Notifications
                </h1>
                <p className="text-gray-600">Stay updated with your latest activities</p>
            </div>

            {/* Time Period Filter - CENTERED */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="w-full sm:w-auto">
                        <label className="text-sm text-gray-600 font-semibold block mb-2 text-center">Filter by Time Period</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
                            <select
                                className="w-full sm:w-64 focus:outline-none bg-transparent text-center"
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                            >
                                <option value="All">All Time</option>
                                <option value="Today">Today</option>
                                <option value="Yesterday">Yesterday</option>
                                <option value="ThisWeek">This Week</option>
                                <option value="LastWeek">Last Week</option>
                                <option value="Last7Days">Last 7 Days</option>
                                <option value="Last30Days">Last 30 Days</option>
                                <option value="ThisMonth">This Month</option>
                                <option value="LastMonth">Last Month</option>
                                <option value="ThisYear">This Year</option>
                            </select>
                        </div>
                    </div>
                    
                    {/* Active Filter Display - Also Centered */}
                    {dateFilter !== 'All' && (
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                {dateFilter}
                            </span>
                            <button
                                onClick={() => setDateFilter('All')}
                                className="text-gray-500 hover:text-gray-700 text-sm underline"
                            >
                                Clear Filter
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Notifications Count */}
            <div className="mb-4 text-sm text-gray-600 text-center">
                Showing {filteredNotifications.length} of {data?.length || 0} notifications
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
                {filteredNotifications.length > 0 ? (
                    filteredNotifications.map((notification, index) => (
                        <div
                            key={index}
                            className={`p-4 border rounded-lg shadow-sm transition-all hover:shadow-md ${
                                notification.state === 'unread' ? 'bg-yellow-50 border-yellow-200' : 'bg-white border-gray-200'
                            }`}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-start gap-3">
                                        {notification.state === 'unread' && (
                                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                        )}
                                        <div className="flex-1">
                                            <h2 className="text-lg font-bold text-gray-900 mb-1">{notification.title}</h2>
                                            <p className="text-gray-700 text-sm mb-2">{notification.message}</p>
                                            
                                            <div className="text-gray-500 text-xs flex items-center gap-4">
                                                <span className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    {notification.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    {notification.time}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <button
                                    onClick={() => handleState(notification._id)}
                                    className={`ml-4 px-4 py-2 text-sm font-semibold bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors ${
                                        notification.state === 'unread' ? 'block' : 'hidden'
                                    }`}
                                >
                                    Mark as Read
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">📭</div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            {dateFilter === 'All' ? 'No notifications found' : `No notifications for ${dateFilter}`}
                        </h3>
                        <p className="text-gray-500">
                            {dateFilter === 'All' 
                                ? 'You\'re all caught up!' 
                                : 'Try selecting a different time period'
                            }
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notification;
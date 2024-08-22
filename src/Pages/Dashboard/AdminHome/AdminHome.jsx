import { FaHome, FaBuilding, FaDollarSign, FaStar } from "react-icons/fa";
import useProperty from "../../../hooks/useProperty";
import useUser from "../../../hooks/UseUser";
import useReview from "../../../hooks/useReview";
import usePackage from "../../../hooks/usePackage";
import Loading from "../../../Loading/Loading";

const AdminHome = () => {
    const { data: propertyData, isLoading: isPropertyLoading, isError: isPropertyError, error: propertyError } = useProperty();
    const { data: userData, isLoading: isUserLoading, isError: isUserError, error: userError } = useUser();
    const { data: serviceData, isLoading: isServiceLoading, isError: isServiceError, error: serviceError } = usePackage();
    const { data: reviewData, isLoading: isReviewLoading, isError: isReviewError, error: reviewError } = useReview();

    if (isPropertyLoading || isUserLoading || isServiceLoading || isReviewLoading) {
        return <div><Loading /></div>;
    }

    if (isPropertyError || isUserError || isServiceError || isReviewError) {
        return <div className="text-red-500 text-center">Error: {propertyError?.message || userError?.message || serviceError?.message || reviewError?.message}</div>;
    }

    let revenue = 0;
    let totalRating = 0;
    let ratingCount = 0;
    reviewData.forEach((review) => {
        totalRating += review.star;
        ratingCount += 1;
    });
    const averageRating = totalRating / ratingCount;
    const roundedRating = Math.round(averageRating * 10) / 10;

    const propertySell = propertyData.filter(p => p.condition === "Sell");
    const propertyRental = propertyData.filter(p => p.condition === "Rental");
    const propertySold = propertyData.filter(p => p.condition === "Sold");

    propertySold.forEach((p) => {
        revenue += p.price;
    });
    serviceData.forEach((p) => {
        revenue += p.bought * p.price;
    });

    const sell = propertySell.length;
    const rental = propertyRental.length;
    const sold = propertySold.length;
    const totalProperty = sell + rental + sold;
    const totalService = serviceData.length;

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">

            <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <img src="https://i.ibb.co/dKZZNhX/Rover-Male.jpg" alt="Admin" className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 mx-auto rounded-full" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">Md. Mahtab Uddin</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 font-bold">
                <div className="bg-white shadow-lg p-4 sm:p-6 md:p-8 rounded-lg text-center">
                    <FaBuilding className="text-3xl sm:text-4xl text-red-600 mx-auto mb-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Total Property &nbsp; <span className="text-orange-400"> {totalProperty}</span></h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-2">
                        <span className="text-red-500">For Sell:</span> {sell}, <br />
                        <span className="text-yellow-500">For Rental:</span> {rental}, <br />
                        <span className="text-green-500">Sold:</span> {sold}
                    </p>
                </div>

                <div className="bg-white shadow-lg p-4 sm:p-6 md:p-8 rounded-lg text-center">
                    <FaHome className="text-3xl sm:text-4xl text-blue-600 mx-auto mb-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Total Service</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-2">Total Services: {totalService}</p>
                </div>

                <div className="bg-white shadow-lg p-4 sm:p-6 md:p-8 rounded-lg text-center">
                    <FaDollarSign className="text-3xl sm:text-4xl text-green-600 mx-auto mb-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Total Revenue</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-2">${revenue.toLocaleString()}</p>
                </div>

                <div className="bg-white shadow-lg p-4 sm:p-6 md:p-8 rounded-lg text-center">
                    <FaStar className="text-3xl sm:text-4xl text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Current Rating</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-2">{roundedRating}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;

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
        return <div><Loading></Loading></div>;
    }

    if (isPropertyError || isUserError || isServiceError || isReviewError) {
        return <div>Error: {propertyError?.message || userError?.message || serviceError?.message || reviewError?.message}</div>;
    }
    let revenue = 0;
    let totalRating = 0;
    let ratingCount = 0;
    reviewData.forEach((review) => {
        totalRating += review.star; // Assuming each review has a 'rating' field
        ratingCount += 1;
    });
    const averageRating = totalRating / ratingCount;

    // Round to the nearest 0.5 for a cleaner display if needed
    const roundedRating = Math.round(averageRating * 10) / 10;
    const propertySell = propertyData.filter(p => p.condition === "Sell");
    const propertyRental = propertyData.filter(p => p.condition === "Rental");
    const propertySold = propertyData.filter(p => p.condition === "Sold");


    propertySold.forEach((p) => {
        revenue += p.price;
    });
    serviceData.forEach((p) =>
    {
        revenue+= p.bought*p.price;
    } )
    console.log("Total Revenue:", revenue);



    const sell = propertySell.length;
    const rental = propertyRental.length;
    const sold = propertySold.length;
    const totalProperty = sell + rental + sold;

    const service = serviceData;
    const totalService = service.length;



    return (
        <div className="p-8 bg-gray-100 min-h-screen">

            <div className="text-center mb-12">
                <img src="https://i.ibb.co/dKZZNhX/Rover-Male.jpg" alt="Admin" className="w-24 h-24 mx-auto rounded-full" />
                <h1 className="text-3xl font-bold mt-4">Md. Mahtab Uddin</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-bold">
                <div className="bg-white shadow-lg p-6 rounded-lg text-center ">
                    <FaBuilding className="text-4xl  text-red-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Total Property &nbsp; <span className="text-orange-400"> {totalProperty}</span> </h2>
                    <p className="text-xl text-gray-700 mt-2"><span className="text-red-500">For Sell:</span> {sell}, <br /><span className="text-yellow-500">For Rental:</span> {rental},<span className="text-green-500">Sold:</span> {sold}</p>
                </div>

                <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                    <FaHome className="text-4xl text-blue-600 mx-auto mb-4 " />
                    <h2 className="text-2xl font-bold">Total Service</h2>
                    <p className="text-xl text-gray-700 mt-2">Total Services: {totalService}</p>
                </div>

                <div className="bg-white shadow-lg p-6 rounded-lg text-center">

                    <FaDollarSign className="text-4xl text-green-600 mx-auto mb-4" />

                    <h2 className="text-2xl font-bold">Total Revenue</h2>
                    <p className="text-xl text-gray-700 mt-2">${revenue}</p>
                </div>

                <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                    <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Current Rating</h2>
                    <p className="text-xl text-gray-700 mt-2">{roundedRating}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;

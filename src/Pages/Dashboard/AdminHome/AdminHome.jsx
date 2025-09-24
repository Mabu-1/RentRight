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

  if (isPropertyLoading || isUserLoading || isServiceLoading || isReviewLoading) return <Loading />;
  if (isPropertyError || isUserError || isServiceError || isReviewError) {
    return <div className="text-red-500 text-center mt-8">Error: {propertyError?.message || userError?.message || serviceError?.message || reviewError?.message}</div>;
  }

  let revenue = 0;
  let totalRating = 0;
  let ratingCount = 0;

  reviewData.forEach(review => {
    totalRating += review.star;
    ratingCount += 1;
  });

  const averageRating = totalRating / ratingCount || 0;
  const roundedRating = Math.round(averageRating * 10) / 10;

  const propertySell = propertyData.filter(p => p.condition === "Sell");
  const propertyRental = propertyData.filter(p => p.condition === "Rental");
  const propertySold = propertyData.filter(p => p.condition === "Sold");

  propertySold.forEach(p => revenue += p.price);
  serviceData.forEach(s => revenue += s.bought * s.price);

  const sell = propertySell.length;
  const rental = propertyRental.length;
  const sold = propertySold.length;
  const totalProperty = sell + rental + sold;
  const totalService = serviceData.length;

  const cardData = [
    {
      title: "Total Property",
      icon: <FaBuilding className="text-4xl sm:text-5xl md:text-6xl" />,
      content: `For Sell: ${sell}\nFor Rental: ${rental}\nSold: ${sold}`,
      gradient: "bg-gradient-to-r from-red-500 to-orange-400",
    },
    {
      title: "Total Service",
      icon: <FaHome className="text-4xl sm:text-5xl md:text-6xl" />,
      content: `Total Services: ${totalService}`,
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-400",
    },
    {
      title: "Total Revenue",
      icon: <FaDollarSign className="text-4xl sm:text-5xl md:text-6xl" />,
      content: `$${revenue.toLocaleString()}`,
      gradient: "bg-gradient-to-r from-green-500 to-teal-400",
    },
    {
      title: "Current Rating",
      icon: <FaStar className="text-4xl sm:text-5xl md:text-6xl" />,
      content: roundedRating,
      gradient: "bg-gradient-to-r from-yellow-400 to-orange-300",
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      {/* Admin Info */}
      <div className="text-center mb-12">
        <img
          src="https://i.ibb.co/dKZZNhX/Rover-Male.jpg"
          alt="Admin"
          className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 mx-auto rounded-full border-4 border-orange-400 shadow-lg"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-800">Md. Mahtab Uddin</h1>
        <p className="text-gray-600 mt-2 text-base sm:text-lg md:text-xl">
          Admin Dashboard | Property Management
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${card.gradient} rounded-xl p-6 sm:p-8 md:p-10 shadow-xl text-white text-center transition-transform transform hover:-translate-y-3 hover:shadow-2xl`}
          >
            <div className="mb-4">{card.icon}</div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{card.title}</h2>
            <p className="whitespace-pre-line text-base sm:text-lg md:text-xl">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;

import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ review }) => {
  const { star, imageUrl, name, text } = review;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="bg-white border border-[#eb7043] rounded-xl shadow-md hover:shadow-lg transition 
      max-w-md w-full p-5 flex flex-col sm:flex-row gap-4 mx-auto"
      data-aos="fade-up"
    >
      {/* Reviewer Image */}
      <div className="flex-shrink-0 flex justify-center items-center">
        <img
          src={imageUrl}
          alt={`Review by ${name}`}
          className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg"
        />
      </div>

      {/* Review Content */}
      <div className="flex flex-col justify-between flex-grow">
        <p className="text-gray-700 text-sm sm:text-base mb-4">{text}</p>

        <div className="flex items-center justify-between">
          {/* Stars */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                color={index < star ? "#eb7043" : "#d1d5db"} // orange or gray
                size={18}
              />
            ))}
          </div>
          {/* Reviewer Name */}
          <p className="font-semibold text-[#e96738]">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

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
      className="bg-white border border-[#eb7043] rounded-2xl shadow-md hover:shadow-xl 
      transition-transform transform hover:-translate-y-1 
      w-full max-w-md md:max-w-lg lg:max-w-xl 
      p-5 sm:p-6 flex flex-col sm:flex-row gap-5 mx-auto"
      data-aos="fade-up"
    >
      {/* Reviewer Image */}
      <div className="flex-shrink-0 flex justify-center items-center">
        <img
          src={imageUrl}
          alt={`Review by ${name}`}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-xl border-2 border-[#eb7043]"
        />
      </div>

      {/* Review Content */}
      <div className="flex flex-col justify-between flex-grow text-center sm:text-left">
        <p className="mabu-text3 text-gray-700 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
          {text}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          {/* Stars */}
          <div className="flex items-center justify-center sm:justify-start gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                color={index < star ? "#eb7043" : "#d1d5db"} // orange or gray
                size={18}
              />
            ))}
          </div>

          {/* Reviewer Name */}
          <p className="font-semibold text-[#e96738] text-sm sm:text-base md:text-lg">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

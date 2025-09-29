import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ review }) => {
  const { star, imageUrl, name, country, text, date } = review;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md 
      transition-transform transform hover:-translate-y-1 
      w-full p-5 flex flex-col gap-3"
      data-aos="fade-up"
    >
      {/* Top Section */}
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={`Review by ${name}`}
          className="w-14 h-14 object-cover rounded-full border border-gray-300"
        />
        <div>
          <h3 className="font-semibold text-gray-800 text-base mabu-text3">{name}</h3>
          {country && <p className="text-sm text-gray-500 mabu-text3">{country}</p>}
          {date && <p className="text-xs text-gray-400 mabu-text3">{date}</p>}
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed mabu-text3">{text}</p>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            color={index < star ? "#ffb33e" : "#d1d5db"} // Fiverr yellow
            size={16}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">{star}.0</span>
      </div>
    </div>
  );
};

export default Card;

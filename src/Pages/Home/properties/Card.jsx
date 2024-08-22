import { FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";      
import { Link } from "react-router-dom";

const Card = ({ Property }) => {
    const { name, imageURL, address, condition, price ,_id} = Property;

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    return (
        <div 
            className="border border-gray-300 rounded-lg shadow-lg overflow-hidden 
            w-full sm:w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12 max-h-full mx-auto" 
            data-aos="fade-up"
        >
            <div className="w-full">
                <img 
                    src={imageURL} 
                    alt={name} 
                    className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[200px] object-cover z-0 relative" 
                />
                <div className="p-3 sm:p-4 md:p-4 lg:p-4">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h1 className="text-base sm:text-lg md:text-xl lg:text-lg font-bold mb-2 text-orange-600">{name}</h1>
                        <h1 className="text-base sm:text-lg md:text-xl lg:text-lg font-bold mb-2 text-blue-600">{condition}</h1>
                    </div>
                    <hr className="my-2" />
                    <div className="text-center">
                        <p className="text-gray-500 mb-2 text-sm sm:text-md">{address}</p>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-center">
                        <span className="text-base sm:text-lg md:text-xl lg:text-lg font-bold text-green-600">${price}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-center">
                        <Link to={`/property/${_id}`}>
                            <button 
                                className="p-2 sm:p-2 md:p-3 lg:p-2 bg-gray-800 hover:text-yellow-500 border rounded-lg text-white hover:bg-[#261f66]"
                            >
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

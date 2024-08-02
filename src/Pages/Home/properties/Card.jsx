import { FaBath, FaBed, FaMapMarkerAlt, FaRulerVertical } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";      
import { Link } from "react-router-dom";

const Card = ({ Property }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);
    return (
        <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden w-10/12 max-h-full" data-aos="fade-up">
            <div className="w-full">
                <img src={Property.imageURL} alt={Property.name} className="w-full h-[250px] object-cover z-0 relative" />
                <div className="p-4">
                  <div className="flex justify-between">
                      <div>
                      <h1 className="text-2xl font-bold mb-2 text-orange-600">{Property.name}</h1>

                      </div>
                      <div>
                      <h1 className="text-2xl font-bold mb-2 text-blue-600">{Property.condition}</h1>

                      </div>
                  </div>
                    <hr className="p-3" />
                    <div className="mt-[-10px]">
                        <div className="flex gap-2 justify-center ">
                            <FaMapMarkerAlt size={20} />
                            <p className="text-gray-500 mb-2 ">{Property.address}</p>
                        </div>
                    </div>
                    <hr className="p-3" />
                    <div className="flex justify-center mt-[-10px]">
                      
                            <span className="text-2xl font-bold text-green-600">${Property.price}</span>
                    
                    </div>
                    <hr className="p-3" />

                  <div className="flex justify-center ">
                  <Link to="/">
                    <button className="p-3 bg-gray-800 hover:text-yellow-500 border rounded-lg text-white hover:bg-[#261f66]">
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

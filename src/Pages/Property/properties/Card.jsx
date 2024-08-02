import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaBath, FaBed, FaMapMarkerAlt, FaRulerVertical, FaParking, FaList } from "react-icons/fa";

const Card = ({ Property }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    return (
        <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden w-full max-h-3/4" data-aos="fade-up">
            <div className="flex flex-col md:flex-row">
                {/* Left Side - Image */}
                <div className="w-full ">
                    <img src={Property.imageURL} alt={Property.name} className="w-full h-full object-cover" />
                </div>

                {/* Right Side - Details */}
                <div className="w-full  p-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2 text-orange-500">{Property.name}</h1>

                        <p className="text-gray-700 mb-4 tex-xl font-semibold">{Property.description}</p>
                            
                        <div className="  my-6 flex items-center">
                        <FaMapMarkerAlt size={30} className="mr-2 " />
                        <p className="text-yellow-500 text-[19px]">{Property.address}</p>
                    </div>
                        <div className="flex flex-wrap gap-[30px] mb-7">
                            <div className="flex items-center gap-2">
                                <FaBath size={24} />
                                <span>{Property.baths} Baths</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaBed size={24} />
                                <span>{Property.bed} Beds</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaRulerVertical size={24} />
                                <span>{Property.area} m²</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaParking size={24} />
                                <span>{Property.parkingSpaces} Parking Spaces</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaList size={24} />
                                <span>{Property.amenities.join(", ")}</span>
                            </div>
                        </div>
                    </div>
                  
                    <div>
                        <p className="text-blue-700 mb-2 text-3xl font-bold "> {Property.condition}</p>

                        </div>
                    <div className="mt-[10px]">
                        <p className="text-2xl font-semibold text-green-600 mb-4">$ {Property.price}</p>
                    </div>
                     
                    <div className="mt-6 flex gap-5">
                        <button className="bg-red-500 text-black font-bold px-4 py-2 rounded hover:bg-orange-700 hover:text-white transition duration-300">
                            Buy Now
                        </button>
                        <button className="bg-yellow-500 font-bold hover:text-yellow-500 border  hover:bg-[#261f66] text-white px-4 py-2 rounded transition duration-300">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

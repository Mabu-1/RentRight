import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaBath, FaBed, FaMapMarkerAlt, FaRulerVertical, FaParking, FaList } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Card = ({ Property }) => {
    const { name, imageURL, description, address, baths, bed, area, parkingSpaces, amenities, condition, price, _id } = Property;
    const stringId = _id.toString();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleHome = () => {
        if (user && user.email) {
            // TODO: Add functionality for logged-in 
            return navigate(`/propertyBuy/${stringId}`);
        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to buy your home",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Send the user to the login page
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    return (
        <div className=" border border-gray-300 rounded-lg shadow-lg overflow-hidden w-full " data-aos="fade-up">
            <div className="flex flex-col">
                {/* Left Side - Image */}
                <div className="w-full h-[200px]">
                    <img src={imageURL} alt={name} className="w-full h-full object-cover" />
                </div>

                {/* Right Side - Details */}
                <div className="w-full p-4 sm:p-6 flex flex-col justify-center">
                    <div>
                       <div className="flex justify-between text-xl">
                       <div>
                       <h1 className=" font-bold mb-2 text-orange-500">{name}</h1>
                       </div>
                        <div>
                        <p className="text-blue-700  font-bold">{condition}</p>
                    </div>
                       </div>
                        <p className="text-md text-gray-700 mb-4 font-semibold">{description}</p>

                        <div className="my-[12px] flex items-center">
                            <FaMapMarkerAlt size={15} className="mr-2 sm:mr-3 text-blue-600" />
                            <p className=" text-sm ">{address}</p>
                        </div>
                        
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                            <div className="flex items-center gap-2">
                                <FaBath size={20} className="mt-[-4px]" />
                                <span className="text-sm">{baths} Baths</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaBed size={20} />
                                <span className="text-sm">{bed} Beds</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaRulerVertical size={20} />
                                <span className="text-sm">{area} m²</span>
                            </div>
                            
                        </div>
                    </div>
                   
                        <p className="text-lg font-semibold text-green-600 mb-2">$ {price}</p>
                    <div className="my-1 flex  gap-3 sm:gap-5">
                      
                            <button
                                onClick={() => handleHome()}
                                className="bg-[#ea8561] hover:bg-[#eb7043]  text-black font-bold px-3 sm:px-4 py-2 rounded hover:text-white transition duration-300"
                            >
                                Buy Now
                            </button>
                       
                        <Link to={`/property/${stringId}`}>
                            <button className="bg-[#2f64ad] hover:bg-[#4351eb] font-bold  border  text-white px-3 sm:px-4 py-2 rounded transition duration-300">
                            Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaBath, FaBed, FaMapMarkerAlt, FaRulerVertical, FaParking, FaList } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Card = ({ Property }) => {
    const {name,imageURL,description,address,baths,bed,area,parkingSpaces,amenities,condition,price,_id} =Property;
    const stringId = _id.toString();
    const { user } = useAuth();
    const navigate = useNavigate();
   const location =useLocation();
    const handleHome = () => {
        if (user && user.email) {
            // TODO: Add functionality for logged-in users
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
                    navigate('/login' ,{state: {from: location}});
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
        <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden w-full max-h-3/4" data-aos="fade-up">
            <div className="flex flex-col md:flex-row">
                {/* Left Side - Image */}
                <div className="w-full">
                    <img src={imageURL} alt={name} className="w-full h-full object-cover" />
                </div>

                {/* Right Side - Details */}
                <div className="w-full p-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2 text-orange-500">{name}</h1>
                        <p className="text-gray-700 mb-4 text-xl font-semibold">{description}</p>

                        <div className="my-6 flex items-center">
                            <FaMapMarkerAlt size={30} className="mr-2" />
                            <p className="text-yellow-500 text-[19px]">{address}</p>
                        </div>
                        <div className="flex flex-wrap gap-[30px] mb-7">
                            <div className="flex items-center gap-2">
                                <FaBath size={24} />
                                <span>{baths} Baths</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaBed size={24} />
                                <span>{bed} Beds</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaRulerVertical size={24} />
                                <span>{area} m²</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaParking size={24} />
                                <span>{parkingSpaces} Parking Spaces</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaList size={24} />
                                <span>{amenities.join(", ")}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-blue-700 mb-2 text-3xl font-bold">{condition}</p>
                    </div>
                    <div className="mt-[10px]">
                        <p className="text-2xl font-semibold text-green-600 mb-4">$ {price}</p>
                    </div>

                    <div className="mt-6 flex gap-5">
                    <Link to={`/propertyBuy/${stringId}`}>
                        <button
                            onClick={() => handleHome()}
                            className="bg-red-500 text-black font-bold px-4 py-2 rounded hover:bg-orange-700 hover:text-white transition duration-300"
                        >
                            Buy Now
                        </button>
                        </Link>
                      <Link to={`/property/${stringId}`}>
                      <button className="bg-yellow-500 font-bold hover:text-yellow-500 border hover:bg-[#261f66] text-white px-4 py-2 rounded transition duration-300">
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

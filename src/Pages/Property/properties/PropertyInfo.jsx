import { Link, useLoaderData, useParams } from "react-router-dom";
import useProperty from "../../../hooks/useProperty";
import { FaBath, FaBed, FaRulerVertical, FaParking, FaList, FaCalendarAlt, FaDog, FaHome } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const PropertyInfo = () => {

    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    
    const property = useLoaderData();


    

    return (
        <div className="p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
            <img
                src={property.imageURL}
                alt={property.name}
                className="w-full h-full object-cover rounded-t-lg"
            />
            <div className="p-6 bg-white rounded-b-lg">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">{property.name}</h1>
                    <p className="text-gray-600 text-xl mb-4">{property.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                    <div className="flex items-center">
                        <FaRulerVertical size={30} className="text-green-500 mr-2" />
                        <p className="text-gray-700">{property.area} m²</p>
                    </div>
                    <div className="flex items-center">
                        <FaBath size={30} className="text-blue-500 mr-2" />
                        <p className="text-gray-700">{property.baths} Baths</p>
                    </div>
                    <div className="flex items-center">
                        <FaBed size={30} className="text-purple-500 mr-2" />
                        <p className="text-gray-700">{property.bed} Beds</p>
                    </div>
                    <div className="flex items-center">
                        <FaParking size={30} className="text-yellow-500 mr-2" />
                        <p className="text-gray-700">{property.parkingSpaces} Parking Spaces</p>
                    </div>
                    <div className="flex items-center">
                        <FaList size={30} className="text-orange-500 mr-2" />
                        <p className="text-gray-700">Amenities: {property.amenities.join(", ")}</p>
                    </div>
                    <div className="flex items-center">
                        <FaList size={30} className="text-sky-500 mr-2" />
                        <p className=" text-gray-700">Nearby Amenities: {property.nearbyAmenities.join(", ")}</p>
                    </div>
                    <div className="flex items-center">
                        <FaCalendarAlt size={30} className="text-pink-500 mr-2" />
                        <p className="text-gray-700">Year Built: {property.yearBuilt}</p>
                    </div>
                    <div className="flex items-center">
                        <FaDog size={30} className="text-brown-500 mr-2" />
                        <p className="text-gray-700">{property.petFriendly ? "Pet Friendly" : "Not Pet Friendly"}</p>
                    </div>
                    <div className="flex items-center">
                        <MdLocationOn size={30} className="text-red-500 mr-2" />
                        <p className="text-gray-700">{property.address}</p>
                    </div>
                    <div className="flex items-center">
                        <HiPhone size={30} className="text-green-500 mr-2" />
                        <p className="text-gray-700">{property.ownerContact.phone}</p>
                    </div>
                    <div className="flex items-center">
                        <HiOutlineMail size={30} className="text-blue-500 mr-2" />
                        <p className="text-gray-700">{property.ownerContact.email}</p>
                    </div>
                    <div className="flex items-center">
                        <FaHome size={30} className="text-blue-500 mr-2" />
                        <p className=" text-gray-700 ">{property.condition}</p>
                    </div>
                </div>



                <div className=" my-[40px]">
                    <p className="text-lg text-gray-700">
                        Nestled in the heart of <span className="text-blue-600 font-bold">{property.city}</span>, the <span className="text-blue-600 font-bold">{property.name}</span> offers a perfect blend of comfort and luxury. With <span className="text-blue-600 font-bold">{property.bed}</span> spacious bedrooms and <span className="text-blue-600 font-bold">{property.baths}</span> modern bathrooms, this <span className="text-blue-600 font-bold">{property.type}</span> is ideal for those seeking a sophisticated lifestyle. Priced at $<span className="text-blue-600 font-bold">{property.price}</span>, this home features <span className="text-blue-600 font-bold">{property.amenities.join(", ")}</span> and is conveniently located near <span className="text-blue-600 font-bold">{property.nearbyAmenities.join(", ")}</span>.
                    </p>
                    <p className="text-lg text-gray-700 mt-[20px]">
                        The apartment offers modern amenities and a stylish interior, making it a perfect choice for urban living. Guests can enjoy easy access to the city's top attractions, including parks, museums, and cultural landmarks.
                    </p>
                </div>

                <div className="flex justify-center text-center my-[30px]">
                    <div className="bg-red-500 p-1 border-2 rounded-lg">
                        <p className="text-3xl font-semibold mb-2">
                            <span className="text-green-600" style={{ fontSize: '1.5rem', position: 'relative', top: '-0.4em' }}>$</span>{property.price}
                        </p>

                    </div>
                </div>

                <div className="flex justify-center">
                    <Link to={`/propertyBuy/${property._id}`}>
                        <button className="bg-yellow-500 text-3xl text-black font-bold p-2 rounded hover:bg-orange-500 hover:text-white transition duration-300">
                            Buy Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyInfo;

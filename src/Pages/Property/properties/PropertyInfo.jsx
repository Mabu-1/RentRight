import { Link, useLoaderData } from "react-router-dom";
import { FaBath, FaBed, FaRulerVertical, FaParking, FaList, FaCalendarAlt, FaDog, FaHome } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const PropertyInfo = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const property = useLoaderData();

    return (
        <div className="p-4 sm:p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
            <img
                src={property.imageURL}
                alt={property.name}
                className="w-full h-full object-cover rounded-t-lg"
            />
            <div className="p-4 sm:p-6 bg-white rounded-b-lg">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-2 sm:mb-4">{property.name}</h1>
                    <div className="flex justify-center my-4">
                        <div className="bg-red-500 p-2 sm:p-3 border-2 rounded-lg">
                            <p className="text-xl sm:text-3xl font-semibold mb-2">
                                <span className="text-green-600" style={{ fontSize: '1.2rem', position: 'relative', top: '-0.4em' }}>$</span>{property.price}
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-xl mb-4">{property.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {[
                        { icon: FaRulerVertical, label: `${property.area} m²`, color: 'text-green-500' },
                        { icon: FaBath, label: `${property.baths} Baths`, color: 'text-blue-500' },
                        { icon: FaBed, label: `${property.bed} Beds`, color: 'text-purple-500' },
                        { icon: FaParking, label: `${property.parkingSpaces} Parking Spaces`, color: 'text-yellow-500' },
                        { icon: FaList, label: `Amenities: ${property.amenities.join(", ")}`, color: 'text-orange-500' },
                        { icon: FaList, label: `Nearby Amenities: ${property.nearbyAmenities.join(", ")}`, color: 'text-sky-500' },
                        { icon: FaCalendarAlt, label: `Year Built: ${property.yearBuilt}`, color: 'text-pink-500' },
                        { icon: FaDog, label: property.petFriendly ? "Pet Friendly" : "Not Pet Friendly", color: 'text-brown-500' },
                        { icon: MdLocationOn, label: property.address, color: 'text-red-500' },
                        { icon: HiPhone, label: property.ownerContact.phone, color: 'text-green-500' },
                        { icon: HiOutlineMail, label: property.ownerContact.email, color: 'text-blue-500' },
                        { icon: FaHome, label: property.condition, color: 'text-blue-500' },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center">
                            <item.icon size={24} className={`${item.color} mr-2`} />
                            <p className="text-xs sm:text-gray-700 sm:text-base">{item.label}</p>
                        </div>
                    ))}
                </div>

                <div className="text-xs sm:text-base my-4 sm:my-[40px]">
                    <p className="text-gray-700">
                        Nestled in the heart of <span className="text-blue-600 font-bold">{property.city}</span>, the <span className="text-blue-600 font-bold">{property.name}</span> offers a perfect blend of comfort and luxury. With <span className="text-blue-600 font-bold">{property.bed}</span> spacious bedrooms and <span className="text-blue-600 font-bold">{property.baths}</span> modern bathrooms, this <span className="text-blue-600 font-bold">{property.type}</span> is ideal for those seeking a sophisticated lifestyle. Priced at $<span className="text-blue-600 font-bold">{property.price}</span>, this home features <span className="text-blue-600 font-bold">{property.amenities.join(", ")}</span> and is conveniently located near <span className="text-blue-600 font-bold">{property.nearbyAmenities.join(", ")}</span>.
                    </p>
                    <p className="text-gray-700 mt-[20px]">
                        The apartment offers modern amenities and a stylish interior, making it a perfect choice for urban living. Guests can enjoy easy access to the city's top attractions, including parks, museums, and cultural landmarks.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Link to={`/propertyBuy/${property._id}`}>
                        <button className="bg-yellow-500 text-lg sm:text-3xl text-black font-bold p-2 rounded hover:bg-orange-500 hover:text-white transition duration-300">
                            Buy Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyInfo;

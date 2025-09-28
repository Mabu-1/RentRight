import { Link, useLoaderData } from "react-router-dom";
import { 
    FaBath, FaBed, FaRulerVertical, FaParking, FaList, 
    FaCalendarAlt, FaDog, FaHome 
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail, HiPhone } from "react-icons/hi";

const PropertyInfo = () => {
    const property = useLoaderData();

    return (
        <div className="max-w-5xl mx-auto my-10 bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Property Image */}
            <div className="relative">
                <img
                    src={property.imageURL}
                    alt={property.name}
                    className="w-full h-72 sm:h-[450px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 px-4 py-2 rounded-lg shadow-md">
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">
                        <span className="text-green-700 align-super">$</span>{property.price}
                    </p>
                </div>
            </div>

            {/* Property Details */}
            <div className="p-6 sm:p-10">
                {/* Title */}
                <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 text-center mb-4">
                    {property.name}
                </h1>
                <p className="text-gray-600 text-sm sm:text-lg text-center mb-8">
                    {property.description}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {[
                        { icon: FaRulerVertical, label: `${property.area} m²`, color: 'text-green-600' },
                        { icon: FaBath, label: `${property.baths} Baths`, color: 'text-blue-600' },
                        { icon: FaBed, label: `${property.bed} Beds`, color: 'text-purple-600' },
                        { icon: FaParking, label: `${property.parkingSpaces} Parking`, color: 'text-yellow-600' },
                        { icon: FaList, label: `Amenities: ${property.amenities.join(", ")}`, color: 'text-orange-600' },
                        { icon: FaList, label: `Nearby: ${property.nearbyAmenities.join(", ")}`, color: 'text-sky-600' },
                        { icon: FaCalendarAlt, label: `Year Built: ${property.yearBuilt}`, color: 'text-pink-600' },
                        { icon: FaDog, label: property.petFriendly ? "Pet Friendly" : "No Pets", color: 'text-amber-700' },
                        { icon: MdLocationOn, label: property.address, color: 'text-red-600' },
                        { icon: HiPhone, label: property.ownerContact.phone, color: 'text-green-600' },
                        { icon: HiOutlineMail, label: property.ownerContact.email, color: 'text-blue-600' },
                        { icon: FaHome, label: property.condition, color: 'text-indigo-600' },
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            className="flex items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                            <item.icon size={22} className={`${item.color} mr-3`} />
                            <p className="text-gray-800 text-sm sm:text-base">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* Description */}
                <div className="text-gray-700 text-sm sm:text-lg leading-relaxed mb-10">
                    <p className="mabu-text3">
                        Nestled in the heart of{" "}
                        <span className="text-blue-600 font-bold">{property.city}</span>, the{" "}
                        <span className="text-blue-600 font-bold ">{property.name}</span> offers a perfect blend of comfort and luxury. 
                        With <span className="text-blue-600 font-bold">{property.bed}</span> spacious bedrooms and{" "}
                        <span className="text-blue-600 font-bold">{property.baths}</span> modern bathrooms, this{" "}
                        <span className="text-blue-600 font-bold">{property.type}</span> is ideal for a sophisticated lifestyle. 
                        Priced at $<span className="text-blue-600 font-bold">{property.price}</span>, it features{" "}
                        <span className="text-blue-600 font-bold">{property.amenities.join(", ")}</span> and is conveniently 
                        located near <span className="text-blue-600 font-bold">{property.nearbyAmenities.join(", ")}</span>.
                    </p>
                    <p className="mt-5 mabu-text3">
                        With modern amenities and stylish interiors, this property is a top choice for urban living. 
                        Enjoy easy access to the city's attractions including parks, museums, and cultural landmarks.
                    </p>
                </div>

                {/* Buy Now Button */}
                <div className="text-center">
                    <Link to={`/propertyBuy/${property._id}`}>
                        <button className="px-10 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg sm:text-2xl rounded-full shadow-lg hover:scale-105 hover:from-orange-500 hover:to-yellow-500 hover:text-white transition-all duration-300">
                            Buy Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyInfo;

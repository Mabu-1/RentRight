import {
    FaBuilding,
    FaCalendarAlt,
    FaCity,
    FaFileAlt,
    FaHome,
    FaMapMarkerAlt,
    FaParking,
    FaPaw,
} from "react-icons/fa";

const Card = ({ property }) => {
    const {
        imageURL,
        name,
        price,
        address,
        city,
        type,
        description,
        yearBuilt,
        parkingSpaces,
        zoning,
        petFriendly,
        amenities,
        nearbyAmenities,
        ownerContact,
    } = property;

<<<<<<< HEAD
    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col w-full">
            <img
                src={imageURL}
                alt={name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-red-700 mb-2">{name}</h3>
                <p className="text-green-600 font-bold text-lg sm:text-xl md:text-2xl mb-4">${price}</p>

                <div className="grid grid-cols-1 gap-2 text-gray-700 text-xs sm:text-sm md:text-base mb-4">
                    <p className="flex items-center gap-2"><FaHome className="text-red-600" /> <strong>Address:</strong> {address}</p>
                    <p className="flex items-center gap-2"><FaCity className="text-red-600" /> <strong>City:</strong> {city}</p>
                    <p className="flex items-center gap-2"><FaBuilding className="text-red-600" /> <strong>Type:</strong> {type}</p>
                    <p className="flex items-center gap-2"><FaFileAlt className="text-red-600" /> <strong>Description:</strong> {description}</p>
                    <p className="flex items-center gap-2"><FaCalendarAlt className="text-red-600" /> <strong>Year Built:</strong> {yearBuilt}</p>
                    <p className="flex items-center gap-2"><FaParking className="text-red-600" /> <strong>Parking:</strong> {parkingSpaces}</p>
                    <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-600" /> <strong>Zoning:</strong> {zoning}</p>
                    <p className="flex items-center gap-2"><FaPaw className="text-red-600" /> <strong>Pet Friendly:</strong> {petFriendly ? "Yes" : "No"}</p>
                </div>

                <div className="mb-3">
                    <p className="font-bold text-red-700 mb-1 text-sm sm:text-base">Amenities:</p>
                    <ul className="flex flex-wrap gap-2 text-gray-600 text-xs sm:text-sm">
                        {amenities.map((amenity, index) => (
                            <li key={index} className="bg-gray-100 px-2 py-1 rounded">{amenity}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-3">
                    <p className="font-bold text-red-700 mb-1 text-sm sm:text-base">Nearby Amenities:</p>
                    <ul className="flex flex-wrap gap-2 text-gray-600 text-xs sm:text-sm">
                        {nearbyAmenities.map((nearby, index) => (
                            <li key={index} className="bg-gray-100 px-2 py-1 rounded">{nearby}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto text-xs sm:text-sm md:text-base">
                    <p className="font-bold text-red-700 mb-1">Owner Contact:</p>
=======
    // Define a base text size class
  
    return (
        <div className="p-2">
            <div className="text-center my-6">
                <img
                    src={imageURL}
                    alt={name}
                    className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px]  mx-auto rounded-full border-4 border-red-500"
                />
                <h3 className="text-2xl font-bold text-red-700 mt-4">{name}</h3>
            </div>
            <div className="text-center text-gray-700 p-1 text-xs sm:text-sm md:text-base">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 mb-4">${price}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2">
                            <FaHome className="text-red-600 w-9 sm:w-9 h-6 md:w-14 mt-[-7px]" />
                            <span><strong>Address:</strong> {address}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaCity className="text-red-600 h-6 w-6" />
                            <span><strong>City:</strong> {city}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaBuilding className="text-red-600 h-6 w-6" />
                            <span><strong>Type:</strong> {type}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaFileAlt className="text-red-600 h-6 w-9 sm:w-9 md:w-14 mt-[-7px]" />
                            <span><strong>Description:</strong> {description}</span>
                        </li>
                    </ul>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2">
                            <FaCalendarAlt className="text-red-600 h-6 w-6" />
                            <span><strong>Year Built:</strong> {yearBuilt}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaParking className="text-red-600 h-6 w-6" />
                            <span><strong>Parking Spaces:</strong> {parkingSpaces}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaMapMarkerAlt className="text-red-600 h-6 w-6" />
                            <span><strong>Zoning:</strong> {zoning}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaPaw className="text-red-600 h-6 w-6" />
                            <span><strong>Pet Friendly:</strong> {petFriendly ? "Yes" : "No"}</span>
                        </li>
                    </ul>
                </div>

                <ul className="space-y-2 mt-4">
                    <p className="font-bold text-red-700">Amenities:</p>
                    {amenities.map((amenity, index) => (
                        <li key={index} className="flex items-center space-x-2 justify-center">
                            <span>{amenity}</span>
                        </li>
                    ))}
                </ul>
                <ul className="space-y-2 mt-4">
                    <p className="font-bold text-red-700">Nearby Amenities:</p>
                    {nearbyAmenities.map((nearby, index) => (
                        <li key={index} className="flex items-center space-x-2 justify-center">
                            <span>{nearby}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-6">
                    <p className="font-bold text-red-700">Owner Contact:</p>
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
                    <p><strong>Name:</strong> {ownerContact.name}</p>
                    <p><strong>Phone:</strong> {ownerContact.phone}</p>
                    <p><strong>Email:</strong> {ownerContact.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;

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
                    <p className=" mabu-text3 flex items-center gap-2"><FaHome className="text-red-600" /> <strong>Address:</strong> {address}</p>
                    <p className="mabu-text3 flex items-center gap-2"><FaCity className="text-red-600" /> <strong>City:</strong> {city}</p>
                    <p className="mabu-text3 flex items-center gap-2"><FaBuilding className="text-red-600" /> <strong>Type:</strong> {type}</p>
                    <p className="mabu-text3 flex items-center gap-2"><FaFileAlt className="text-red-600" /> <strong>Description:</strong> {description}</p>
                    <p className="mabu-text3 flex items-center gap-2"><FaCalendarAlt className="text-red-600" /> <strong>Year Built:</strong> {yearBuilt}</p>
                    <p className="mabu-text3 flex items-center gap-2"><FaParking className="text-red-600" /> <strong>Parking:</strong> {parkingSpaces}</p>
                    <p className=" mabu-text3 flex items-center gap-2"><FaMapMarkerAlt className="text-red-600" /> <strong>Zoning:</strong> {zoning}</p>
      
                    <p className="  mabu-text3 flex items-center gap-2"><FaPaw className="text-red-600" /> <strong>Pet Friendly:</strong> {petFriendly ? "Yes" : "No"}</p>
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
                    <p className="mabu-text3"><strong>Name:</strong> {ownerContact.name}</p>
                    <p className="mabu-text3"><strong>Phone:</strong> {ownerContact.phone}</p>
                    <p className="mabu-text3"><strong>Email:</strong> {ownerContact.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;

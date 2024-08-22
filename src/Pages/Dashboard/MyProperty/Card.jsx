import {
    FaBuilding,
    FaCalendarAlt,
    FaCity,
    FaFileAlt,
    FaHome,
    FaMapMarkerAlt,
    FaParking,
    FaPaw,
    FaWrench,
} from "react-icons/fa";

const Card = ({ property }) => {
    const {
        imageURL,
        name,
        price,
        address,
        city,
        type,
        condition,
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
        <div>
         
            <div className="text-center my-6">
                <img
                    src={imageURL}
                    alt={name}
                    className=" w-[250px] h-[250px] mx-auto rounded-full border-4 border-red-500"
                />
                <h3 className="text-3xl font-bold text-red-700 mt-4">{name}</h3>
            </div>
            <div className="text-center text-gray-700 p-1">
    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-4">${price}</p>
    <div className="flex flex-col items-center">
        <ul className="space-y-4 text-left">
            <li className="flex items-center space-x-2">
                <FaHome className="text-red-600 w-9 sm:w-9 h-6 md:w-6" />
                <span className="text-sm sm:text-base md:text-lg"><strong>Address:</strong> {address}</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaCity className="text-red-600 h-6 w-6" />
                <span className="text-sm sm:text-base md:text-lg"><strong>City:</strong> {city}</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaBuilding className="text-red-600 h-6 w-6" />
                <span className="text-sm sm:text-base md:text-lg"><strong>Type:</strong> {type}</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaWrench className="text-red-600 h-6 w-6" />
                <span className="text-sm sm:text-base md:text-lg"><strong>Condition:</strong> {condition}</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaFileAlt className="text-red-600 h-6 w-9 sm:w-9 md:w-6" />
                <span className="text-sm sm:text-base md:text-lg"><strong>Description:</strong> {description}</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaCalendarAlt className="text-red-600 h-6 w-6" />
                <span className="text-sm sm:text-base md:text-lg"><strong>Year Built:</strong> {yearBuilt}</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaParking className="text-red-600 h-6 w-6" />
                <span className="text-sm sm:text-base md:text-lg"><strong>Parking Spaces:</strong> {parkingSpaces}</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-red-600 h-6 w-6" />
                <span className="text-sm sm:text-base md:text-lg"><strong>Zoning:</strong> {zoning}</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaPaw className="text-red-600 h-6 w-6" />
                <span className="text-sm sm:text-base md:text-lg"><strong>Pet Friendly:</strong> {petFriendly ? "Yes" : "No"}</span>
            </li>
        </ul>
    </div>

    <ul className="space-y-2 mt-4">
        <p className="text-base sm:text-lg font-bold text-red-700">Amenities:</p>
        {amenities.map((amenity, index) => (
            <li key={index} className="flex items-center space-x-2 justify-center">
                <span className="text-sm sm:text-base md:text-lg">{amenity}</span>
            </li>
        ))}
    </ul>
    <ul className="space-y-2 mt-4">
        <p className="text-base sm:text-lg font-bold text-red-700">Nearby Amenities:</p>
        {nearbyAmenities.map((nearby, index) => (
            <li key={index} className="flex items-center space-x-2 justify-center">
                <span className="text-sm sm:text-base md:text-lg">{nearby}</span>
            </li>
        ))}
    </ul>
    <div className="mt-6">
        <p className="text-base sm:text-lg font-bold text-red-700">Owner Contact:</p>
        <p className="text-sm sm:text-base md:text-lg"><strong>Name:</strong> {ownerContact.name}</p>
        <p className="text-sm sm:text-base md:text-lg"><strong>Phone:</strong> {ownerContact.phone}</p>
        <p className="text-sm sm:text-base md:text-lg"><strong>Email:</strong> {ownerContact.email}</p>
    </div>
</div>

        </div>
    );
};

export default Card;

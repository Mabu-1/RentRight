import { FaBuilding, FaCalendarAlt, FaCity, FaFileAlt, FaHome, FaMapMarkerAlt, FaParking, FaPaw, FaWrench } from "react-icons/fa";

const Card = ({ property }) => {
    const {imageURL,name,price,address,city,type,condition,description,yearBuilt,parkingSpaces,zoning,petFriendly,amenities,nearbyAmenities,ownerContact}=property
    return (
        <div >
            <div className="text-center my-7">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Property</h2>
            </div>
            <div className="text-center mb-6">
                <img
                    src={imageURL}
                    alt={name}
                    className="w-[300px] h-[300px] mx-auto rounded-full border-4 border-red-500"
                />
                <h3 className="text-3xl font-bold text-red-700 mt-4">{name}</h3>
            </div>
            <div className="text-center text-gray-700">
                <p className="text-4xl font-bold text-green-600 mb-4">${price}</p>
                <div className="flex justify-center">
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2">
                            <FaHome className="text-red-600 h-6 w-6" />
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
                            <FaWrench className="text-red-600 h-6 w-6" />
                            <span><strong>Condition:</strong> {condition}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaFileAlt className="text-red-600 h-6 w-6" />
                            <span><strong>Description:</strong> {description}</span>
                        </li>
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
                    <p className="text-lg font-bold text-red-700">Amenities:</p>
                    {amenities.map((amenity, index) => (
                        <li key={index} className="flex items-center justify-center space-x-2">
                            <span>{amenity}</span>
                        </li>
                    ))}
                </ul>
                <ul className="space-y-2 mt-4">
                    <p className="text-lg font-bold text-red-700">Nearby Amenities:</p>
                    {nearbyAmenities.map((nearby, index) => (
                        <li key={index} className="flex items-center justify-center space-x-2">
                            <span>{nearby}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-6">
                    <p className="text-lg font-bold text-red-700">Owner Contact:</p>
                    <p><strong>Name:</strong> {ownerContact.name}</p>
                    <p><strong>Phone:</strong> {ownerContact.phone}</p>
                    <p><strong>Email:</strong> {ownerContact.email}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Card;

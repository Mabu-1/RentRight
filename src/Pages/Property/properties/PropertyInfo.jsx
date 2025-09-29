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
  <div className="max-w-6xl mx-auto my-10 bg-white rounded-2xl shadow-xl overflow-hidden">
  {/* Property Hero */}
  <div className="relative">
    <img
      src={property.imageURL}
      alt={property.name}
      className="w-full h-80 sm:h-[500px] object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-25"></div>
    <div className="absolute top-4 left-4 bg-yellow-500 px-4 py-2 rounded-lg shadow-md">
      <p className="text-lg sm:text-2xl font-bold text-gray-900">
        <span className="text-green-700 align-super">$</span>{property.price}
      </p>
    </div>
  </div>

  {/* Property Title & Description */}
  <div className="p-6 sm:p-10">
    <h1 className="text-3xl sm:text-5xl font-bold text-[#2F64AD] text-center mb-4">
      {property.name}
    </h1>
    <p className="text-gray-600 text-sm sm:text-lg text-center mb-8">
      {property.description}
    </p>

    {/* Info Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {[
        { icon: FaBed, label: `${property.bed} Beds`, bg: 'bg-purple-100', color: 'text-purple-700' },
        { icon: FaBath, label: `${property.baths} Baths`, bg: 'bg-blue-100', color: 'text-blue-700' },
        { icon: FaRulerVertical, label: `${property.area} m²`, bg: 'bg-green-100', color: 'text-green-700' },
        { icon: FaParking, label: `${property.parkingSpaces} Parking`, bg: 'bg-yellow-100', color: 'text-yellow-700' },
        { icon: FaList, label: `Amenities: ${property.amenities.join(", ")}`, bg: 'bg-orange-100', color: 'text-orange-700' },
        { icon: FaList, label: `Nearby: ${property.nearbyAmenities.join(", ")}`, bg: 'bg-sky-100', color: 'text-sky-700' },
        { icon: MdLocationOn, label: property.address, bg: 'bg-red-100', color: 'text-red-700' },
        { icon: HiPhone, label: property.ownerContact.phone, bg: 'bg-green-100', color: 'text-green-700' },
        { icon: HiOutlineMail, label: property.ownerContact.email, bg: 'bg-blue-100', color: 'text-blue-700' },
        { icon: FaHome, label: property.condition, bg: 'bg-indigo-100', color: 'text-indigo-700' },
        { icon: FaDog, label: property.petFriendly ? "Pet Friendly" : "No Pets", bg: 'bg-amber-100', color: 'text-amber-700' },
      ].map((item, idx) => (
        <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
          <div className={`p-2 rounded-full ${item.bg} mr-3`}>
            <item.icon size={20} className={item.color} />
          </div>
          <p className="text-gray-800 text-sm sm:text-base">{item.label}</p>
        </div>
      ))}
    </div>

    {/* Description */}
    <div className="text-gray-700 text-sm sm:text-lg leading-relaxed mb-10">
      <p className="mabu-text3">
        Nestled in the heart of <span className="text-[#eb7043] font-bold">{property.city}</span>, the 
        <span className="text-[#eb7043] font-bold"> {property.name}</span> offers a perfect blend of comfort and luxury. 
        With <span className="text-[#eb7043] font-bold">{property.bed}</span> bedrooms and 
        <span className="text-[#eb7043] font-bold">{property.baths}</span> bathrooms, this property is ideal for a sophisticated lifestyle.
      </p>
      <p className="mt-5 mabu-text3">
        Priced at $<span className="text-[#eb7043] font-bold">{property.price}</span>, it features 
        <span className="text-[#eb7043] font-bold"> {property.amenities.join(", ")}</span> and is conveniently located near 
        <span className="text-[#eb7043] font-bold"> {property.nearbyAmenities.join(", ")}</span>.
      </p>
    </div>

    {/* Call to Action */}
    <div className="flex justify-center gap-6">
      <Link to={`/propertyBuy/${property._id}`}>
        <button className="px-10 py-3 bg-gradient-to-r from-[#eb7043] to-[#f6a563] text-white font-bold text-lg sm:text-2xl rounded-full shadow-lg hover:scale-105 transition-all duration-300">
          Buy Now
        </button>
      </Link>
     
    </div>
  </div>
</div>

    );
};

export default PropertyInfo;

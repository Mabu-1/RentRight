import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";      
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
const Card = ({branch}) => {
     const {location,imageUrl,address,phone,email,hours} =branch;
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);
    return (
        <div  className="border border-gray-300 rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
                       
        <div className="w-full">
            <img src={imageUrl} alt={location} className="w-full h-[250px] object-cover" />
            <div className="p-4 bg-gray-800 text-white">
                <h3 className="text-2xl font-bold mb-2">{location}</h3>

                <div className="flex items-center gap-2 mb-2">
                    <IoLocation />
                    <span>{address}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <FaPhone />
                    <span>{phone}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <FaEnvelope />
                    <span>{email}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaClock />
                    <span>{hours}</span>
                </div>
            </div>
        </div>
  
</div>
    );
};

export default Card;
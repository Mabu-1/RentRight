import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";        
const Card = ({review}) => {
    const {star,imageUrl,name,text,profession} =review;
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);
    return (
         <div  className="bg-gray-200 border-2 border-yellow-300 rounded-lg" data-aos="fade-up">
        <div className="flex gap-5">
            <div className="flex justify-center">
                <img src={imageUrl} alt={`Review by ${name}`} className=" w-[250px] h-[300px] p-5 md:p-5 sm:p-2" />
            </div>
            <div className="w-[350px] md:w-[350px] sm:[150px] gap-2">
               
                <p className="my-12 md:my-12 sm:my-6">{text}</p>
                <div className="flex gap-2">
                    <span className="text-xl font-bold">{star} </span>
                    <FaStar color="yellow" size={22} />
                </div>
                <p className="font-bold">{name}</p>
                <p>{profession}</p>
            </div>
        </div>
    </div>
    );
};

export default Card;
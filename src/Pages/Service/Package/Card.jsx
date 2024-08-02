import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";        
import Button from "../../../Shared/Button/Button";
const Card = ({pack}) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);
    return (
        <div className="bg-gray-200 hover:bg-gray-800 hover:text-white hover:border-white border-4 rounded-lg border-blue-400 flex flex-col" data-aos="fade-up" data-aos-delay={50}>
        <div className="flex justify-center">
            <img src={pack.imageURL} alt="" className="w-[500px] h-[270px] object-cover p-2 rounded-lg" />
        </div>
        <div className="flex justify-center my-3">
            <p className="text-2xl font-bold">{pack.name}</p>
        </div>
        <hr className="border-t-2 border-yellow-300 my-2 mx-2" />
        <div className="flex justify-center mt-4 mb-2">
            <p className="text-xl font-semibold">Starting Prices</p>
        </div>
        <div className="flex justify-center font-extrabold text-6xl mb-4">
            <p>${pack.price}/-</p>
        </div>
        <div className="flex-grow flex justify-center">
            <ul className="list-disc list-inside font-semibold gap-1 mb-2">
                {pack.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                ))}
            </ul>
        </div>
        <div className="flex justify-center mb-4">
            <Button>
                Book Now
            </Button>
        </div>
    </div>
    );
};

export default Card;
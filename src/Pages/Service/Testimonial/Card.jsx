import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ review }) => {
    const { star, imageUrl, name, text } = review;

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    return (
        <div className="relative bg-gray-200 border-2 border-yellow-300 rounded-lg overflow-hidden 
            w-6/12 sm:w-6/12 md:w-9/12 lg:w-6/12 xl:w-5/12 h-[300px] mx-auto" data-aos="fade-up">
            <div className="flex gap-5">
                <div className="flex justify-center items-center">
                    <img src={imageUrl} alt={`Review by ${name}`} className="w-[160px] md:w-[200px] h-[250px] p-2" />
                </div>
                <div className="w-[200px] sm:w-[200px] md:w-[350px] h-full gap-2">
                    <p className="my-5">{text}</p>
                    <div className="absolute bottom-0 flex-col">
                        <div className="flex items-center gap-2">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    color={index < star ? "#eb7043" : "gray"}
                                    size={22}
                                />
                            ))}
                        </div>
                        <p className="font-bold">{name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

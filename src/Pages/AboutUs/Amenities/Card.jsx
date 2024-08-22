import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ feature }) => {
    const { imageUrl, name } = feature;

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    return (
        <div
            data-aos="fade-up"
            className="relative border overflow-hidden w-10/12 sm:w-10/12 md:w-full max-h-full group rounded-lg"
        >
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-[200px] sm:h-[300px] object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-end">
                <p className="bg-black bg-opacity-70 text-white px-3 py-2 rounded opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                    {name}
                </p>
            </div>
        </div>
    );
};

export default Card;

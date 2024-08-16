import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";   

const Card = ({feature}) => {
    const {imageUrl,name} =feature;
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);
    return (
        <div

            data-aos="fade-up"
            className="relative border overflow-hidden w-10/12 max-h-full group"
        >
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-[300px] object-cover"
            />
            <div
            >
                <p className="text-over-image">{name}</p>
            </div>
        </div>
    );
};

export default Card;
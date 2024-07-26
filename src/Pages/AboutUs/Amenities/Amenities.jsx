import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Marquee from "react-fast-marquee";
import Headline from "../../../Shared/Headline/Headline";
import "./Styles.css";

const Amenities = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    const feature = [
        {
            imageUrl: "https://i.ibb.co/7gsxBWR/Service-Img-1.jpg",
            name: "Swimming Pool",
        },
        {
            imageUrl: "https://i.ibb.co/253Mh4K/Service-Img-6.jpg",
            name: "Gym",
        },
        {
            imageUrl: "https://i.ibb.co/h9MRGzP/Service-Img-5.jpg",
            name: "Spa",
        },
        {
            imageUrl: "https://i.ibb.co/8Bd7xpY/Service-Img-4.jpg",
            name: "Clubhouse",
        },
        {
            imageUrl: "https://i.ibb.co/WvyLmW3/Service-Img-3.jpg",
            name: "Tennis Court",
        },
        {
            imageUrl: "https://i.ibb.co/gJYh7Ld/Service-Img-2.jpg",
            name: "Playground",
        },
    ];

    return (
        <div className="my-7">
            <Headline 
                subheading={"EXCLUSIVE PROPERTIES"}
                headline={"Luxurious Amenities"}
            />

            <Marquee speed={50} pauseOnHover={true} className="gap-5">
                <div className="flex gap-5">
                    {feature.map((item, index) => (
                        <div 
                            key={index} 
                            data-aos="fade-up"
                            className="relative border overflow-hidden w-10/12 max-h-full group"
                        >
                            <img 
                                src={item.imageUrl} 
                                alt={item.name} 
                                className="w-full h-[300px] object-cover"
                            />
                            <div 
                            >
                                <p className="text-over-image">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Amenities;

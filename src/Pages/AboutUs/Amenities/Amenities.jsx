import { useEffect, useState } from 'react';
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

    const [feature, setfeature] = useState([]);
    useEffect(() => {
        fetch('feature.json')
            .then(res => res.json())
            .then(data => setfeature(data));
    }, []);
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

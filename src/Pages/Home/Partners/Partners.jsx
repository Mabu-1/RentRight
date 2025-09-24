import React, { useState } from "react";
import Headline from "../../../Shared/Headline/Headline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaCity, FaKey, FaShieldAlt, FaBuilding, FaLeaf, FaLandmark } from "react-icons/fa";

const Partners = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const partners = [
        { name: "UrbanNest Realty", icon: FaCity, color: "#3b82f6" },
        { name: "Prime Estate Solutions", icon: FaKey, color: "#facc15" },
        { name: "HomeGuard Property Services", icon: FaShieldAlt, color: "#10b981" },
        { name: "Skyline Property Advisors", icon: FaBuilding, color: "#8b5cf6" },
        { name: "GreenField Realty", icon: FaLeaf, color: "#059669" },
        { name: "GoldenGate Property Services", icon: FaLandmark, color: "#f59e0b" },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="my-7">
            <div className="text-center gap-3" data-aos="fade-up">
                <Headline
                    subheading1={"OUR PREMIUM PARTNERS"}
                    headline1={"Over The Years, The Specialists Who Have Collaborated With Us"}
                />
                <p className="my-2  text-sm sm:text-base md:text-lg">
                    A pellentesque sit amet porttitor eget dolor morbi non arcu. Tincidunt dui ut ornare lectus sit amet est placerat in. Quisque egestas diam.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="200">
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-white"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                            color: hoveredIndex === index ? partner.color : "#4b5563", // Default gray text
                        }}
                    >
                        <partner.icon
                            className="text-4xl"
                            style={{ color: hoveredIndex === index ? partner.color : "#6b7280" }} // Default gray icon
                        />
                        <span className="mt-2 font-medium text-center">
                            {partner.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;

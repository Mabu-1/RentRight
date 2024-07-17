import { Link } from "react-router-dom";
import Headline from "../../../Shared/Headline/Headline";
import Marquee from "react-fast-marquee";
import { FaBath, FaBed, FaMapMarkerAlt, FaMedal, FaRulerVertical, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Properties = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const Properties = [
        {
            imageURL: "https://i.ibb.co/MsjqKwT/eco-friendly-house-0-1200.jpg",
            baths: "4",
            bed: "4",
            area: "2218",
            name: "Mike Heaven Estates",
            text: "760 Isidro Knolls, Japan, JP 165561, ID",
            price: "100,500",
            rate: "2",
            type:"Vila",
            condition:"Rental",

        },
        {
            imageURL: "https://i.ibb.co/MsjqKwT/eco-friendly-house-0-1200.jpg",
            baths: "4",
            bed: "4",
            area: "2218",
            name: "Mike Heaven Estates",
            text: "760 Isidro Knolls, Japan, JP 165561, ID",
            price: "100,500",
            rate: "2",
            type:"Farmhouse",
            condition:"sell",
        },
        {
            imageURL: "https://i.ibb.co/MsjqKwT/eco-friendly-house-0-1200.jpg",
            baths: "4",
            bed: "4",
            area: "2218",
            name: "Mike Heaven Estates",
            text: "760 Isidro Knolls, Japan, JP 165561, ID",
            price: "100,500",
            rate: "2",
            type:"Studio Apartment",
            condition:"sell",
        },
        {
            imageURL: "https://i.ibb.co/MsjqKwT/eco-friendly-house-0-1200.jpg",
            baths: "4",
            bed: "4",
            area: "2218",
            name: "Mike Heaven Estates",
            text: "760 Isidro Knolls, Japan, JP 165561, ID",
            price: "100,500",
            rate: "2",
            type:"Penthouse",
            condition:"sell",
        },
        {
            imageURL: "https://i.ibb.co/MsjqKwT/eco-friendly-house-0-1200.jpg",
            baths: "4",
            bed: "4",
            area: "2218",
            name: "Mike Heaven Estates",
            text: "760 Isidro Knolls, Japan, JP 165561, ID",
            price: "100,500",
            rate: "2",
            type:"Rowhouse",
            condition:"Rental",
        },
    ];

    return (
        <div className="my-[100px]">
            <div className="flex justify-center text-center" data-aos="fade-up">
                <Headline
                    subheading1={"PROPERTY"}
                    headline={"Quality Tailored Property"}
                />
            </div>
            <div className="flex justify-center text-center mb-4" data-aos="fade-up">
                <div className="max-w-[700px]">
                    <p className="text-gray-400">Aldus Corporation, which later merged with Adobe Systems, ushered lorem information age with its desktop publishing software Aldus PageMaker</p>
                </div>
            </div>

            <Marquee speed={50} pauseOnHover={true} className="gap-5">
                <div className="flex gap-5">
                    {Properties.map((Property, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg shadow-lg overflow-hidden w-10/12 max-h-full" data-aos="fade-up">
                            <Link to="/">
                                <div className="w-full">
                                    <img src={Property.imageURL} alt={Property.name} className="w-full h-[250px] object-cover z-0 relative" />
                                    <div className="w-18 px-2 py-1 ml-2 z-0 fixed mt-[-240px] bg-blue-600 border rounded-lg hover:bg-yellow-400 hover:text-white font-bold">
                                     {Property.type}
                                    </div>
                                    <div className="w-[60px] p-1 ml-[370px] z-0 fixed mt-[-240px] bg-blue-600 flex justify-center border rounded-lg font-bold hover:bg-yellow-400 hover:text-white">
                                    {Property.condition}
                                    </div>
                                    
                                    <div className="p-4">
                                        <div className="flex justify-between text-gray-500 my-3">
                                            <div className="flex gap-2">
                                                <FaBath />
                                                <span>{Property.baths} Baths</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <FaBed size={20} />
                                                <span>{Property.bed} Beds</span>
                                            </div>
                                            <div className="flex gap-1">
                                                <FaRulerVertical size={18} />
                                                <span>Area:</span>
                                                <span>{Property.area} /m2</span>
                                            </div>
                                        </div>
                                        <hr className="p-3" />
                                        <div className="my-2">
                                            <h1 className="text-2xl font-bold mb-2">{Property.name}</h1>
                                            <div className="flex gap-2">
                                                <FaMapMarkerAlt size={20} />
                                                <p className="text-gray-500 mb-2">{Property.text}</p>
                                            </div>
                                        </div>
                                        <hr className="p-3" />
                                        <div className="my-2 flex justify-between">
                                            <div>
                                                <span className="text-xl font-bold">${Property.price}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-xl font-bold">{Property.rate}</span>
                                                <FaStar color="yellow" size={22} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </Marquee>
           
        </div>
    );
};

export default Properties;

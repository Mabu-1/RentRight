import { Link } from "react-router-dom";
import Headline from "../../../Shared/Headline/Headline";
import Marquee from "react-fast-marquee";
import { FaBath, FaBed, FaMapMarkerAlt, FaMedal, FaRulerVertical, FaStar } from "react-icons/fa";
import Button from "../../../Shared/Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Service = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const services = [
        {
            imageURL: "https://i.ibb.co/MsjqKwT/eco-friendly-house-0-1200.jpg",
            baths: "4",
            bed: "4",
            area: "2218",
            name: "Mike Heaven Estates",
            text: "760 Isidro Knolls, Japan, JP 165561, ID",
            price: "100,500",
            rate: "2"
        },
        {
            imageURL: "https://i.ibb.co/MsjqKwT/eco-friendly-house-0-1200.jpg",
            baths: "4",
            bed: "4",
            area: "2218",
            name: "Mike Heaven Estates",
            text: "760 Isidro Knolls, Japan, JP 165561, ID",
            price: "100,500",
            rate: "2"
        },
        {
            imageURL: "https://i.ibb.co/MsjqKwT/eco-friendly-house-0-1200.jpg",
            baths: "4",
            bed: "4",
            area: "2218",
            name: "Mike Heaven Estates",
            text: "760 Isidro Knolls, Japan, JP 165561, ID",
            price: "100,500",
            rate: "2"
        },
    ];

    return (
        <div className="my-[100px]">
            <div className="flex justify-center text-center" data-aos="fade-up">
                <Headline
                    subheading1={"WHY WE DO"}
                    headline={"Quality Tailored Service"}
                />
            </div>
            <div className="flex justify-center text-center mb-4" data-aos="fade-up">
                <div className="max-w-[700px]">
                    <p className="text-gray-400">Aldus Corporation, which later merged with Adobe Systems, ushered lorem information age with its desktop publishing software Aldus PageMaker</p>
                </div>
            </div>

            <Marquee speed={50} pauseOnHover={true} className="gap-5">
                <div className="flex gap-5">
                    {services.map((service, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg shadow-lg overflow-hidden w-10/12 max-h-full" data-aos="fade-up">
                            <Link to="/">
                                <div className="w-full">
                                    <img src={service.imageURL} alt={service.name} className="w-full h-[250px] object-cover z-0 relative" />
                                    <div className="w-15 px-2 py-1 ml-2 z-0 fixed mt-[-240px] bg-blue-600 border rounded-lg hover:bg-yellow-400 hover:text-white font-bold">
                                      Rental
                                    </div>
                                    <div className="w-[60px] px-2 py-2 ml-[370px] z-0 fixed mt-[-240px] bg-blue-600 flex justify-center border rounded-lg hover:bg-yellow-400 hover:text-white">
                                        <FaMedal size={18} />
                                    </div>
                                    
                                    <div className="p-4">
                                        <div className="flex justify-between text-gray-500 my-3">
                                            <div className="flex gap-2">
                                                <FaBath />
                                                <span>{service.baths} Baths</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <FaBed size={20} />
                                                <span>{service.bed} Beds</span>
                                            </div>
                                            <div className="flex gap-1">
                                                <FaRulerVertical size={18} />
                                                <span>Area:</span>
                                                <span>{service.area} /m2</span>
                                            </div>
                                        </div>
                                        <hr className="p-3" />
                                        <div className="my-2">
                                            <h1 className="text-2xl font-bold mb-2">{service.name}</h1>
                                            <div className="flex gap-2">
                                                <FaMapMarkerAlt size={20} />
                                                <p className="text-gray-500 mb-2">{service.text}</p>
                                            </div>
                                        </div>
                                        <hr className="p-3" />
                                        <div className="my-2 flex justify-between">
                                            <div>
                                                <span className="text-xl font-bold">${service.price}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-xl font-bold">{service.rate}</span>
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
            <div className="flex justify-center text-center my-4" data-aos="fade-up">
                <Button>
                    Visit All Properties
                </Button>
            </div>
        </div>
    );
};

export default Service;

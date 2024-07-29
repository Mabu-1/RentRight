import { Link } from "react-router-dom";
import Headline from "../../../Shared/Headline/Headline";
import Marquee from "react-fast-marquee";
import { FaBath, FaBed, FaMapMarkerAlt,  FaRulerVertical, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Button from "../../../Shared/Button/Button";

const Properties = () => {
    const [Properties,setProperties] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    useEffect( () =>
 {
      fetch('property.json')
      .then(res =>res.json())
      .then( data =>setProperties(data))
 },[])
 

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
                                            <h1 className="text-2xl font-bold mb-2 ">{Property.name}</h1>
                                            <div className="flex gap-2">
                                                <FaMapMarkerAlt size={20} />
                                                <p className="text-gray-500 mb-2">{Property.address}</p>
                                            </div>
                                        </div>
                                        <hr className="p-3" />
                                        <div className=" flex justify-between">
                                            <div>
                                                <span className="text-2xl font-bold text-green-600">$ {Property.price}</span>
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
                <Link to="/property">
                <Button>
                    Visit All Properties
                </Button>
                </Link>
            </div>
        </div>
    );
};

export default Properties;

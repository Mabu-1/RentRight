import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Card = ({ agent }) => {
     const {imageUrl,name,profession,about} = agent;
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);
    return (

        <div data-aos="fade-up" className="flex flex-col md:flex-row items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
                src={imageUrl}
                alt={name}
                className="w-[300px] h-[350px] object-cover rounded-lg"
            />
            <div className="text-white text-start md:text-start sm:text-center">
                <h3 className="text-4xl font-semibold">{name}</h3>
                <p className="text-2xl">{profession}</p>
                <p className="text-xl mt-2">{about}</p>
                <div className="flex mt-4 gap-4 md:flex md:justify-start sm:flex sm:justify-center">
                    <a href={'/'} target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-[#3b5998] w-[70px] h-[50px]" />
                    </a>
                    <a href={'/'} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-[#e1306c] w-[70px] h-[50px]" />
                    </a>
                    <a href={'/'} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-[#0077b5] w-[70px] h-[50px]" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
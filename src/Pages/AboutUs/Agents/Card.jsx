import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Card = ({ agent, index }) => {
    const { imageUrl, name, profession, about } = agent;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex flex-col md:flex-row items-center gap-6 bg-gray-900 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
            <img
                src={imageUrl}
                alt={name}
                className="w-[180px] h-[240px] md:w-[200px] md:h-[250px] object-cover rounded-lg border-4 border-[#eb7043]"
            />
            <div className="text-white text-center md:text-left flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{name}</h3>
                <p className="text-md sm:text-md md:text-lg text-[#eb7043] mt-1">{profession}</p>
                <p className="text-sm sm:text-sm md:text-base mt-2 text-gray-300">{about}</p>

                <div className="flex mt-6 gap-4 justify-center md:justify-start">
                    <a href={'/'} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <FaFacebook className="text-[#3b5998] w-7 h-7" />
                    </a>
                    <a href={'/'} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <FaInstagram className="text-[#e1306c] w-7 h-7" />
                    </a>
                    <a href={'/'} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <FaLinkedin className="text-[#0077b5] w-7 h-7" />

                    </a>
                </div>
            </div>
        </div>
    );
};


export default Card;


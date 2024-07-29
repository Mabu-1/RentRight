import  { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Agents = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    const [agentInfo, setagentInfo] = useState([]);
    useEffect(() => {
        fetch('agent.json')
            .then(res => res.json())
            .then(data => setagentInfo(data));
    }, []);
    return (
        <div className="my-7">
            <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8">Meet Our Agents</h2>
            <div className="grid grid-cols-1 gap-8">
                {agentInfo.map((agent, index) => (
                    <div key={index} data-aos="fade-up" className="flex flex-col md:flex-row items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-lg">
                        <img
                            src={agent.imageUrl}
                            alt={agent.name}
                            className="w-[300px] h-[350px] object-cover rounded-lg"
                        />
                        <div className="text-white text-start md:text-start sm:text-center">
                            <h3 className="text-4xl font-semibold">{agent.name}</h3>
                            <p className="text-2xl">{agent.job}</p>
                            <p className="text-xl mt-2">{agent.about}</p>
                            <div className="flex mt-4 gap-4 md:flex md:justify-start sm:flex sm:justify-center">
                                <a href={agent.facebook} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-[#3b5998] w-[70px] h-[50px]" />
                                </a>
                                <a href={agent.instagram} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-[#e1306c] w-[70px] h-[50px]" />
                                </a>
                                <a href={agent.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-[#0077b5] w-[70px] h-[50px]" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Agents;

import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Agents = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    const agentInfo = [
        {
            imageUrl: "https://i.ibb.co/hyyXZB6/team-03.jpg",
            job: "Real Estate Agent",
            name: "Rose Parkar",
            about: "Rose Parkar has over a decade of experience in real estate, specializing in residential and commercial properties. Known for exceptional negotiation skills and client satisfaction, his extensive local knowledge and network enhance his ability to find ideal homes and investment opportunities.",
            facebook: "https://www.facebook.com/johndoe",
            instagram: "https://www.instagram.com/johndoe",
            linkedin: "https://www.linkedin.com/in/johndoe"
        },
        {
            imageUrl: "https://i.ibb.co/sF2qqjN/team-04.jpg",
            job: "Property Manager",
            name: "Jane Smith",
            about: "Jane Smith is a seasoned property manager with expertise in managing residential and commercial properties. She excels in tenant relations and property maintenance, ensuring well-maintained properties and high tenant satisfaction. Jane’s proactive approach and problem-solving skills make her a reliable choice for managing properties efficiently.",
            facebook: "https://www.facebook.com/janesmith",
            instagram: "https://www.instagram.com/janesmith",
            linkedin: "https://www.linkedin.com/in/janesmith"
        },
        {
            imageUrl: "https://i.ibb.co/fnLb5t0/team-02.jpg",
            job: "Broker",
            name: "Michael Brown",
            about: "Michael Brown brings extensive knowledge in market analysis and real estate transactions. His attention to detail and strategic mindset help clients make informed buying and selling decisions. Michael’s expertise in market trends and financial analysis provides valuable insights for achieving optimal results in real estate transactions.",
            facebook: "https://www.facebook.com/michaelbrown",
            instagram: "https://www.instagram.com/michaelbrown",
            linkedin: "https://www.linkedin.com/in/michaelbrown"
        },
        {
            imageUrl: "https://i.ibb.co/DzN8rFL/team-01.jpg",
            job: "Sales Representative",
            name: "Emily White",
            about: "Emily White is committed to providing excellent service and achieving high client satisfaction. With a strong background in sales and marketing, she effectively markets properties and closes deals. Emily’s vibrant personality and innovative strategies ensure that every client receives exceptional attention and successful outcomes.",
            facebook: "https://www.facebook.com/emilywhite",
            instagram: "https://www.instagram.com/emilywhite",
            linkedin: "https://www.linkedin.com/in/emilywhite"
        }
    ];

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

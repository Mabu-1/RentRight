import { useEffect, useState } from 'react';
import { FaCar, FaWifi } from "react-icons/fa";
import Headline from "../../../Shared/Headline/Headline";
import { TbMassage } from "react-icons/tb";
import { RiCommunityFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import './styles.css'; // Ensure you have the CSS file

const Unique = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();

        const handleScroll = () => {
            const scrollY = window.scrollY;
            setRotation(scrollY / 2); // Adjust the divisor to control rotation speed
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="my-[70px] flex md:flex-row sm:flex-col justify-evenly gap-10">
            <div className="flex sm:flex-row gap-7" data-aos="fade-right">
                <div>
                    <Headline
                        subheading={"HOW WE ARE UNIQUE"}
                        headline={"We Offer Comprehensive First-Rate Service."}
                    />
                    <div>
                        <p className="text-gray-500">Arcu non odio euismod lacinia at. Proin fermentum leo vel orci porta non pulvinar. Dolor sed viverra ipsum nunc. Ridiculus mus malesuada pellentesque mauris vitae ultricies leo integer.</p>
                    </div>
                    <div className="flex my-4">
                        <div className="flex-col">
                            <div className='bg-gray-100' data-aos="fade-up" data-aos-delay="100">
                                <FaCar size={150} className='p-2' />
                                <p className="text-gray-500 p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, error.</p>
                            </div>
                            <div className='' data-aos="fade-up" data-aos-delay="200">
                                <TbMassage size={150} className='p-2' />
                                <p className="text-gray-500 p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, error.</p>
                            </div>
                        </div>
                        <div className="flex-col">
                            <div className='' data-aos="fade-up" data-aos-delay="300">
                                <FaWifi size={150} className='p-2' />
                                <p className="text-gray-500 p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, error.</p>
                            </div>
                            <div className='bg-gray-100' data-aos="fade-up" data-aos-delay="400">
                                <RiCommunityFill size={150} className='p-2' />
                                <p className="text-gray-500 p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, error.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative block md:block sm:hidden" data-aos="fade-left">
                <img className="h-3/4 main-image object-cover max-w-full" src="https://i.ibb.co/jfVyLHp/istockphoto-1492424940-2048x2048.jpg" alt="" />
                <img className="circle-image block md:block sm:hidden" src="https://i.ibb.co/pPYFcsF/logo-color.png" alt="" style={{ transform: `rotate(${rotation}deg)` }} />
            </div>
        </div>
    );
};

export default Unique;

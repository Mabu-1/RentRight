import { useEffect } from 'react';
import { FaCar, FaWifi, FaConciergeBell } from "react-icons/fa";
import { TbMassage } from "react-icons/tb";
import { RiCommunityFill, RiShieldCheckFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import Headline from "../../../Shared/Headline/Headline";

const Unique = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    return (
        <div className="my-[70px] gap-10 p-2">
            <div className='text-center' data-aos="fade-right">
                <Headline
                    subheading={"HOW WE ARE UNIQUE"}
                    headline={"We Offer Comprehensive First-Rate Service."}
                />
                <div className="">
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        Our services are tailored to meet the unique needs of each client, ensuring personalized solutions that exceed expectations. From start to finish, we are committed to delivering excellence in every aspect of our work.
                    </p>
                </div>
            </div>

            <div className='flex-1 mt-[20px] md:mt-[70px]'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                        <FaCar className='text-[50px] sm:text-[75px] md:text-[85px] lg:text-[100px] xl:text-[150px] text-blue-500 mb-2' />
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center ">
                            We provide top-notch transportation services to ensure your convenience and comfort at all times.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                        <TbMassage className='text-[50px] sm:text-[75px] md:text-[85px] lg:text-[100px] xl:text-[150px] text-blue-500 mb-2' />
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center ">
                            Our wellness services are designed to rejuvenate your body and mind, promoting relaxation and well-being.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
                        <FaWifi className='text-[50px] sm:text-[75px] md:text-[85px] lg:text-[100px] xl:text-[150px] text-blue-500 mb-2' />
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center ">
                            Stay connected with our high-speed Wi-Fi services, available 24/7 for your convenience.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
                        <RiCommunityFill className='text-[50px] sm:text-[75px] md:text-[85px] lg:text-[100px] xl:text-[150px] text-blue-500 mb-2' />
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center ">
                            We foster a sense of community by providing spaces and services that bring people together.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center" data-aos="fade-up" data-aos-delay="500">
                        <FaConciergeBell className='text-[50px] sm:text-[75px] md:text-[85px] lg:text-[100px] xl:text-[150px] text-blue-500 mb-2' />
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center ">
                            Experience exceptional concierge services designed to cater to your every need, anytime, anywhere.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center" data-aos="fade-up" data-aos-delay="600">
                        <RiShieldCheckFill className='text-[50px] sm:text-[75px] md:text-[85px] lg:text-[100px] xl:text-[150px] text-blue-500 mb-2' />
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center ">
                            Your safety is our priority, with security services and protocols to keep you protected at all times.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Unique;

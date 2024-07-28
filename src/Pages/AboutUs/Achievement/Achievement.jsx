import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import { FaArrowRight, FaBuilding, FaRegAddressCard } from "react-icons/fa";
import Headline from "../../../Shared/Headline/Headline";
import { TbTruckDelivery } from "react-icons/tb";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosCall, IoIosMail } from "react-icons/io";
const Achievement = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    return (
        <div className="my-7">
            <Headline
                subheading1={"Prime destination"}
                headline1={"Modern & Luxury Private Property"}
            />
            <div className="my-2 flex justify-center items-center text-center">
                <p className="text-gray-400">Dui accumsan sit amet nulla facilisi morbi tempus. Fermentum iaculis eu non diam phasellus vestibulum. Praesent elementum facilisis leo vel fringilla.</p>
            </div>
            <div className="flex justify-center gap-5 flex-wrap">
                <div data-aos="fade-up" className="flex items-center bg-gray-200 p-4 w-[270px] rounded-md">
                    <FaBuilding className="w-[100px] h-[70px] mr-4" />
                    <div className="text-left">
                        <h1 className="text-3xl font-bold">1750</h1>
                        <p className="text-gray-600">Square Areas</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className="flex items-center bg-gray-200 p-4 w-[270px] rounded-md">
                    <TbTruckDelivery className="w-[100px] h-[70px] mr-4" />
                    <div className="text-left">
                        <h1 className="text-2xl font-bold">220</h1>
                        <p className="text-gray-600">Packers & Movers</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="flex items-center bg-gray-200 w-[270px] p-4 rounded-md">
                    <IoNewspaperOutline className="w-[100px] h-[70px] mr-4" />
                    <div className="text-left">
                        <h1 className="text-2xl font-bold">600</h1>
                        <p className="text-gray-600">Documentation</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="flex items-center bg-gray-200 w-[270px] p-4 rounded-md">
                    <FaRegAddressCard className="w-[100px] h-[70px] mr-4" />
                    <div className="text-left">
                        <h1 className="text-2xl font-bold">8750</h1>
                        <p className="text-gray-600">Booking</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center my-2 gap-10">
                <div data-aos="fade-up" data-aos-delay="400" className="flex items-center bg-yellow-400 p-4 rounded-md text-white">
                    <p className="mr-2 font-bold">Get in Touch</p>
                    <FaArrowRight />
                </div>
                <div data-aos="fade-up" data-aos-delay="500" className="flex items-center p-4 rounded-md">
                    <IoIosCall className="mr-2 h-[40px] w-[40px]" />
                    <div>
                        <p className="font-bold">Call us Anytime</p>
                        <p>+90792972337</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="600" className="flex items-center  p-4 rounded-md">
                    <IoIosMail className="mr-2 h-[40px] w-[40px]" />
                    <div>
                        <p className="font-bold">Email us Anytime</p>
                        <p>resicraft77@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;

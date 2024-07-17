import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { IoMail } from 'react-icons/io5';
import { RiInstagramFill } from 'react-icons/ri';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease',
            // Add more options as needed
        });
    }, []);

    return (
        <div className="mt-[150px] gap-17 relative">
            <div className="flex md:flex-row sm:flex-col gap-8">
                <div data-aos="fade-right">
                    <div>
                        <h6 className="text-4xl font-semibold">Modern</h6>
                    </div>
                    <div>
                        <h6 className="text-6xl font-bold">Homes</h6>
                    </div>
                    <div className="my-4">
                        <p className="text-yellow-400 text-3xl font-bold">Discover beautiful houses to live happily!</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam</p>
                    </div>
                    <div>
                        <div className="flex gap-5 mt-5">
                            <div className="flex gap-2">
                                <IoMail className="text-4xl text-red-600" />
                                <p className="text-md mt-1">rentright2024@gmail.com</p>
                            </div>
                            <div className="flex gap-2">
                                <IoIosCall className="text-4xl text-green-600" />
                                <p className="text-md mt-1">+083461612717</p>
                            </div>
                        </div>
                        <div className='flex gap-3 mt-8'>
                            <FaFacebookSquare className='text-[#1d1ddd] text-4xl' />
                            <RiInstagramFill className='text-[#d71ddd] text-[37px]' />
                            <FaYoutube className='text-[#dd1d1d] text-[39px]' />
                        </div>
                    </div>
                </div>
               
                <div className="relative z-0" data-aos="fade-up">
                <div className="absolute top-[-30px] right-[-50px] transform translate-x-1/2 -translate-y-1/2 z-10 bg-yellow-400 rounded-full w-[150px] h-[150px] flex items-center justify-center shadow-lg" data-aos="zoom-in">
                    <p className="text-3xl font-bold text-blue-500">30% off</p>
                </div>
                    <div className="flex justify-center items-center">
                        <img src="https://i.ibb.co/QMNt1CP/Highres-Screenshot00009-1920x1080-689f6d449353c776c5a3dfccd04ea814.webp" alt="" className="object-cover border-8 border-yellow-400 rounded-lg" />
                    </div>
                    <div className="absolute mt-[-60px] left-[-50px] z-1" data-aos="fade-left">
                        <div className="border-2 border-black rounded-lg bg-blue-600 w-[260px] text-center p-1">
                            <p className="text-2xl font-bold text-yellow-400">Price Start from</p>
                            <p className="text-3xl text-yellow-500 font-extrabold">$80,000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease',
        });
    }, []);

    return (
        <div className="mt-[40px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-16 p-2 sm:p-4 md:p-4">
            
            <div className="w-full text-center md:text-left flex-1" data-aos="fade-right">
                
                <h6 className="text-2xl sm:text-2xl md:text-4xl font-bold text-[#eb7043]">Modern Homes</h6>
                <p className="my-2 text-xl sm:text-xl md:text-2xl font-bold">
                    Discover beautiful houses to live happily!
                </p>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg ">
                    Experience the luxury of living in a modern home designed with comfort and elegance in mind. Our homes are equipped with the latest amenities to ensure a superior living experience.
                </p>
                <div className="flex flex-col md:flex-row justify-center md:justify-start gap-5 mt-5"></div>
                <div className='text-xl sm:text-xl md:text-2xl text-[#eb7043] font-bold'>
                    Connect With Us
                </div>
                <div className="flex justify-center md:justify-start gap-3 mt-4">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebookF className="text-blue-600 text-4xl" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <FaTwitter className="text-blue-400 text-4xl" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram className="text-pink-500 text-4xl" />
                    </a>
                </div>
            </div>

            <div className="relative z-2 flex-1" data-aos="fade-up">
                <div className="absolute bg-[#eb7043]  top-[-15px] sm:top-[-15px] md:top-[-50px] right-[-20px] sm:right-[-25px] md:right-[-20px] lg:right-[-20px]  transform translate-x-1/2 -translate-y-1/2 z-10 rounded-full w-[80px] sm:w-[100px] md:w-[100px] lg:w-[120px] h-[80px] sm:h-[100px] md:h-[100px] lg:h-[120px] flex items-center justify-center shadow-lg" data-aos="zoom-in">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">30% off</p>
                </div>
                <img src="https://i.ibb.co/JtNZH0J/home-banner.jpg" alt="Modern Home" className="object-cover border-4 sm:border-4 md:border-8 border-[#eb7043] rounded-lg w-full h-auto" />
                <div className="absolute mt-[-25px] sm:mt-[-25px] md:mt-[-40px] lg:mt-[-60px] left-[-20px] sm:left-[-25px] md:left-[-50px] z-2" data-aos="fade-left">
                    <div className="rounded-lg bg-[#eb7043] w-[150px] sm:w-[180px] md:w-[160px] lg:w-[220px] text-center p-1">
                        <p className="text-md sm:text-lg md:text-md lg:text-lg font-bold ">Price Start from</p>
                        <p className="text-lg sm:text-xl md:text-xl lg:text-3xl text-white font-bold">$80,000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

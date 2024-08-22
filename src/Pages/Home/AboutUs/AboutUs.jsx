import Headline from "../../../Shared/Headline/Headline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    return (
        <div className="my-[70px] gap-4">
            <div className="text-center">
                <Headline
                    subheading="ABOUT US"
                    headline="Our Focus on Innovation Drives Our Mission to Simplify Real Estate."
                />
                <div className="mt-4">
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        We aim to revolutionize the real estate industry with cutting-edge solutions that cater to both individuals and corporations. Our approach is designed to make the process more efficient, transparent, and user-friendly for everyone involved.
                    </p>
                </div>
            </div>
            <div className="gap-4 mt-6" data-aos="fade-left">
                <div className="flex justify-between font-bold gap-2">
                    <div data-aos="fade-up">
                        <h3 className="text-xl sm:text-xl md:text-4xl text-[#1d1ddd]">275+</h3>
                        <p className="text-xs sm:text-xs text-gray-400 ml-1 sm:ml-1 md:ml-2">GLOBAL OFFICES</p>
                    </div>
                    <div data-aos="fade-up">
                        <h3 className="text-xl sm:text-xl md:text-4xl text-[#dd1dd3]">425K+</h3>
                        <p className="text-xs sm:text-xs text-gray-400 ml-1 sm:ml-1 md:ml-2">WORLDWIDE CLIENTS</p>
                    </div>
                    <div data-aos="fade-up">
                        <h3 className="text-xl sm:text-xl md:text-4xl text-[#2f9f2d]">100%</h3>
                        <p className="text-xs sm:text-xs text-gray-400 ml-1 sm:ml-1 md:ml-2">SATISFACTION</p>
                    </div>
                    <div data-aos="fade-up">
                        <h3 className="text-xl sm:text-xl md:text-4xl text-[#ba592d]">4/5</h3>
                        <p className="text-xs sm:text-xs text-gray-400 ml-1 sm:ml-1 md:ml-2">CLIENT RATINGS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

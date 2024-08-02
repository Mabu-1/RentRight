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
        <div className="flex md:flex-row  sm:flex-col-reverse my-[70px] gap-7">
            <div data-aos="fade-right">
                <img className="max-w-[400px]" src="https://i.ibb.co/vXR3jmL/Home-2-Mob-Key-Img.png" alt="" />
            </div>
            <div className="gap-4" data-aos="fade-left">
                <Headline
                    subheading="ABOUT US" 
                    headline="Our Continuous Focus And Innovation Are Driven By Our Mission To Simplify Complete Real Estate For Both Individuals And Corporations." 
                />
                <div className="flex justify-between font-bold ">
                    <div data-aos="fade-up">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#1d1ddd]">275+</h3>
                        <p className="text-sm sm:text-md text-gray-400 ml-2 sm:m-1 md:ml-2">GLOBAL OFFICE</p>
                    </div>
                    <div data-aos="fade-up">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#dd1dd3]">425K+</h3>
                        <p className="text-sm sm:text-md text-gray-400 ml-2 sm:m-1 md:ml-2">WORLDWIDE CLIENTS</p>
                    </div>
                    <div data-aos="fade-up">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#2f9f2d]">100%</h3>
                        <p className="text-sm sm:text-md text-gray-400 ml-2 sm:m-1 md:ml-2">SATISFACTION</p>
                    </div>
                    <div data-aos="fade-up">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#ba592d]">4/5</h3>
                        <p className="text-sm sm:text-md text-gray-400 ml-2 sm:m-1 md:ml-2">CLIENT RATINGS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

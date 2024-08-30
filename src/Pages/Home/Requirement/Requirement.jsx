import { FaHome, FaKey, FaMoneyBill } from "react-icons/fa";
import Headline from "../../../Shared/Headline/Headline";
import { GrUserExpert } from "react-icons/gr";
import { GiCctvCamera } from "react-icons/gi";
import { BsBank2 } from "react-icons/bs";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Requirement = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    return (
        <div className="my-7">
            <div className="text-center mb-7">
                <Headline
                    subheading="OUR SERVICES"
                    headline="Personalized Service To Fulfill Requirements"
                />
            </div>
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-6 ">
                <div className="flex justify-center md:w-1/2 gap-1 sm:gap-1 md:gap-6 lg:gap-6">
                    <div data-aos="fade-up" className="flex justify-center items-center sm:mt-[-200px] md:mt-[0px] ">
                        <img src="https://i.ibb.co/zxQqz8b/req-1.jpg" alt="" className="w-full rounded-lg " />
                    </div>
                    <div className="flex-col ">
                        <div data-aos="fade-up">
                            <img src="https://i.ibb.co/47F3C8r/req-2.jpg" alt="" className="w-full rounded-lg" />
                        </div>
                        <div data-aos="fade-up" className="mt-2 sm:mt-2 md:mt-4 lg:mt-2">
                            <img src="https://i.ibb.co/YP5M50s/req-3.jpg" alt="" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-up">
                    <div className="mb-8">
                        <p className="text-xs sm:text-xs md:text-lg text-gray-500 text-center sm:text-center md:text-left lg:text-left">
                            We are committed to providing a wide range of services to meet your unique needs. Our expert staff is dedicated to ensuring that every requirement is met with precision and care.
                        </p>
                    </div>
                    <div className="flex gap-2 sm:gap-2 md:gap-8 my-[10px] sm:my-[10px] md:my-[20px] lg:my-[40px]" data-aos="fade-up">
                        <div className="flex flex-col items-center gap-3">
                            <GrUserExpert className="text-[20px] sm:text-[20px] md:text-[30px] lg:text-[35px] text-[#eb7043]" />
                            <div className="text-center">
                                <p className="text-xs sm:text-xs md:text-base font-bold text-gray-700">Expert Staff</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <GiCctvCamera className="text-[20px] sm:text-[20px] md:text-[30px] lg:text-[35px] text-[#eb7043]" />
                            <div className="text-center">
                                <p className="text-xs sm:text-xs md:text-base font-bold text-gray-700">24/7 Surveillance</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <BsBank2 className="text-[20px] sm:text-[20px] md:text-[30px] lg:text-[35px] text-[#eb7043]" />
                            <div className="text-center">
                                <p className="text-xs sm:text-xs md:text-base font-bold text-gray-700">Comprehensive Insurance</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 sm:gap-3 md:gap-6 lg:gap-6  text-[#eb7043] ml-3" data-aos="fade-up">
                        <div className="flex-col">
                            <CountUp
                                className="text-[20px] sm:text-[20px] md:text-[30px] lg:text-[35px] font-bold "
                                start={0}
                                end={150}
                                duration={2}
                                useEasing={true}
                                suffix="+"
                            />
                            <p className="text-xs sm:text-xs md:text-base font-bold text-gray-700">MANAGED PROPERTIES</p>
                        </div>
                        <div className="flex-col">
                            <CountUp
                                className="text-[20px] sm:text-[20px] md:text-[30px] lg:text-[35px] font-bold "
                                start={0}
                                end={120}
                                duration={2}
                                useEasing={true}
                                suffix="+"
                            />
                            <p className="text-xs sm:text-xs md:text-base font-bold text-gray-700">HAPPY CLIENTS</p>
                        </div>
                        <div className="flex-col">
                            <CountUp
                                className="text-[20px] sm:text-[20px] md:text-[30px] lg:text-[35px] font-bold "
                                start={0}
                                end={30}
                                duration={2}
                                useEasing={true}
                                suffix="+"
                            />
                            <p className="text-xs sm:text-xs md:text-base font-bold text-gray-700">YEARS EXPERIENCE</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Requirement;

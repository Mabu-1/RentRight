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
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-6">
                <div className="flex justify-center md:w-1/2 gap-1 sm:gap-1 md:gap-6 lg:gap-6">
                    <div data-aos="fade-up">
                        <img src="https://i.ibb.co/kqWX5WJ/progress-bar-03.jpg" alt="" className="w-full rounded-lg" />
                    </div>
                    <div className="flex-col gap-5">
                        <div data-aos="fade-up">
                            <img src="https://i.ibb.co/bJz5CtV/progress-bar-01.jpg" alt="" className="w-full rounded-lg" />
                        </div>
                        <div data-aos="fade-up" className="mt-5">
                            <img src="https://i.ibb.co/w7V96pv/progress-bar-02.jpg" alt="" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2" data-aos="fade-up">
                    <div className="mb-8">
                        <p className="text-sm sm:text-base md:text-xl lg:tex-xl text-gray-500 text-center sm:text-center md:text-left lg:text-left">
                            We are committed to providing a wide range of services to meet your unique needs. Our expert staff is dedicated to ensuring that every requirement is met with precision and care.
                        </p>
                    </div>
                    <div className="flex gap-2 sm:gap-2 md:gap-6 lg:gap-6" data-aos="fade-up">
                        <div className="flex flex-col items-center gap-3">
                            <GrUserExpert className="text-[40px] sm:text-[40px] md:text-[60px] lg:text-[60px] text-blue-600" />
                            <div className="text-center">
                                <p className="text-sm sm:text-base md:text-xl lg:tex-xl font-bold text-gray-700">Expert Staff</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <GiCctvCamera className="text-[40px] sm:text-[40px] md:text-[60px] lg:text-[60px] text-red-600" />
                            <div className="text-center">
                                <p className="text-sm sm:text-base md:text-xl lg:tex-xl font-bold text-gray-700">24/7 Surveillance</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <BsBank2 className="text-[40px] sm:text-[40px] md:text-[60px] lg:text-[60px] text-green-600" />
                            <div className="text-center">
                                <p className="text-sm sm:text-base md:text-xl lg:tex-xl font-bold text-gray-700">Comprehensive Insurance</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 sm:gap-3 md:gap-6 lg:gap-6 my-[70px]" data-aos="fade-up">
                        <div className="flex-col">
                            <CountUp
                                className="text-xl sm:text-xl md:text-4xl lg:text-4xl font-bold text-indigo-600"
                                start={0}
                                end={150}
                                duration={2}
                                useEasing={true}
                                suffix="+"
                            />
                            <p className="text-sm sm:text-base md:text-xl lg:text-xl font-bold text-gray-700">MANAGED PROPERTIES</p>
                        </div>
                        <div className="flex-col">
                            <CountUp
                                className="text-xl sm:text-xl md:text-4xl lg:text-4xl font-bold text-indigo-600"
                                start={0}
                                end={120}
                                duration={2}
                                useEasing={true}
                                suffix="+"
                            />
                            <p className="text-sm sm:text-base md:text-xl lg:text-xl font-bold text-gray-700">HAPPY CLIENTS</p>
                        </div>
                        <div className="flex-col">
                            <CountUp
                                className="text-xl sm:text-xl md:text-4xl lg:text-4xl font-bold text-indigo-600"
                                start={0}
                                end={30}
                                duration={2}
                                useEasing={true}
                                suffix="+"
                            />
                            <p className="text-sm sm:text-base md:text-xl lg:text-xl font-bold text-gray-700">YEARS EXPERIENCE</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Requirement;

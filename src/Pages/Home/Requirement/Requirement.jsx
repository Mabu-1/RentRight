import { FaHome, FaKey, FaMoneyBill } from "react-icons/fa";
import Headline from "../../../Shared/Headline/Headline";
import { GrUserExpert } from "react-icons/gr";
import { GiCctvCamera } from "react-icons/gi";
import { BsBank2 } from "react-icons/bs";
import CountUp from "react-countup";
import "../../../Shared/Button/Button";
import Button from "../../../Shared/Button/Button";
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
            <div className="flex gap-6">
                <div className="hidden md:flex gap-6">
                    <div data-aos="fade-up">
                        <div className="z-0">
                            <img src="https://i.ibb.co/kqWX5WJ/progress-bar-03.jpgp" alt="" className="" />
                        </div>
                        <div className="flex gap-3 z-1 mt-[-200px] justify-center items-center bg-red-600 h-[200px]">
                            <div className="text-blue-600">
                                <FaHome size={30} />
                            </div>
                            <div className="text-2xl font-bold text-yellow-300">
                                <p>Buy Your Home</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col">
                        <div data-aos="fade-up">
                            <img src="https://i.ibb.co/bJz5CtV/progress-bar-01.jpg" alt="" />
                        </div>
                        <div className="flex gap-3 z-1 mt-[-200px] justify-center items-center h-[200px]" data-aos="fade-up">
                            <div className="text-blue-600">
                                <FaKey size={30} />
                            </div>
                            <div className="text-2xl font-bold text-yellow-300">
                                <p>Rent Your Home</p>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className="my-5">
                                <img src="https://i.ibb.co/w7V96pv/progress-bar-02.jpg" alt="" />
                            </div>
                            <div className="flex gap-3 z-1 mt-[-200px] justify-center items-center h-[200px]">
                                <div className="text-blue-600">
                                    <FaMoneyBill size={30} />
                                </div>
                                <div className="text-2xl font-bold text-yellow-300">
                                    <p>Buy Your Home</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <Headline headline="Personalized Service To Fulfill Requirements" />
                    <p className="text-gray-400">Non odio euismod lacinia at. Sed viverra tellus in hac. Scelerisque in dictum non consectetur a. In est ante in nibh mauris cursus mattis. Viverra ipsum nunc aliquet bibendum.</p>
                    <div className="flex gap-[20px] my-[50px]" data-aos="fade-up">
                        <div className="flex gap-3">
                            <GrUserExpert size={40} />
                            <p className="text-2xl font-bold">Expert Staff</p>
                        </div>
                        <div className="flex gap-3">
                            <GiCctvCamera size={40} />
                            <p className="text-2xl font-bold">Surveillance</p>
                        </div>
                        <div className="flex gap-3">
                            <BsBank2 size={40} />
                            <p className="text-2xl font-bold">Insurance</p>
                        </div>
                    </div>

                    <div className="flex gap-[60px] my-[50px]" data-aos="fade-up">
                        <div>
                            <CountUp
                                className="text-4xl font-bold"
                                start={0}
                                end={98}
                                duration={2}
                                useEasing={true}
                                suffix="%"
                            />
                            <p className="text-xl font-bold">RENTAL HOUSE</p>
                        </div>
                        <div>
                            <CountUp
                                className="text-4xl font-bold"
                                start={0}
                                end={99}
                                duration={2}
                                useEasing={true}
                                suffix="%"
                            />
                            <p className="text-xl font-bold">SERVICE APARTMENTS</p>
                        </div>
                        <div>
                            <CountUp
                                className="text-4xl font-bold"
                                start={0}
                                end={95}
                                duration={2}
                                useEasing={true}
                                suffix="%"
                            />
                            <p className="text-xl font-bold">VILLAS</p>
                        </div>
                    </div>

                    <div className="flex gap-5 my-[70px]" data-aos="fade-up">
                        <BsBank2 size={30} />
                        <p className="text-xl text-gray-400">Check What Is The Maximum Loan Amount You Can Obtain?</p>
                    </div>
                    <Button data-aos="fade-up">Schedule A Visit</Button>
                </div>
            </div>
        </div>
    );
};

export default Requirement;

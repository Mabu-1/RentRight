import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Button from "../../../Shared/Button/Button";
import Headline from "../../../Shared/Headline/Headline";
import { FaCheckCircle } from "react-icons/fa";

const Register = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="my-[50px]">
            <div className="text-center mb-7">
                <Headline
                    subheading="Register"
                    headline="Join Our Community of Hosts"
                />
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-6 mt-[-20px]">
                <div className="flex-1 flex flex-col justify-center mt-[10px] sm:mt-[10px] md:mt-[-40px] lg:mt-[-50px]" data-aos="fade-right">
                    <p className="text-sm sm:text-base md:text-lg text-center sm:text-center md:text-left lg:text-left text-gray-600 mb-6">
                        Become a part of our growing network of property owners and managers. Register your apartment today and start connecting with potential tenants. Our platform makes it easy to manage your listings, communicate with tenants, and streamline your property management tasks.
                    </p>
                    <div className="mb-6">
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Why Register With Us?</h3>
                        <ul className="list-disc pl-5 text-sm sm:text-base md:text-lg text-gray-600">
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#eb7043]" />
                                <span>Easy property management tools</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#eb7043]" />
                                <span>Connect with reliable tenants</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#eb7043]" />
                                <span>Streamlined communication</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#eb7043]" />
                                <span>Comprehensive support</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center sm:justify-center md:justify-start lg:justify-start">
                        <Link to="/signup">
                            <Button className="text-xl">
                                Register Now
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex-1" data-aos="fade-left">
                    <img src="https://i.ibb.co/TPB5fXf/19197347.jpg" alt="Apartment Registration" className="w-full rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Register;

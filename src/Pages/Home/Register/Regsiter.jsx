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
        <div className="my-12 md:my-16 px-4 md:px-16">
            {/* Section Heading */}
            <div className="text-center mb-10">
                <Headline
                    subheading="Register"
                    headline="Join Our Community of Hosts"
                />
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                    Become part of our growing network of property owners and managers. Register your apartment today and start connecting with potential tenants. Manage your listings, communicate with tenants, and streamline property management effortlessly.
                </p>
            </div>

            {/* Content Section */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                {/* Text Content */}
                <div
                    className="flex-1 flex flex-col justify-center space-y-6"
                    data-aos="fade-right"
                >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                        Why Register With Us?
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">
                        <li className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#eb7043] dark:text-orange-400 text-lg sm:text-xl" />
                            <span>Easy property management tools</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#eb7043] dark:text-orange-400 text-lg sm:text-xl" />
                            <span>Connect with reliable tenants</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#eb7043] dark:text-orange-400 text-lg sm:text-xl" />
                            <span>Streamlined communication</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#eb7043] dark:text-orange-400 text-lg sm:text-xl" />
                            <span>Comprehensive support</span>
                        </li>
                    </ul>

                    <div className="flex justify-center md:justify-start">
                        <Link to="/signup">
                            <Button className="px-6 py-3 text-lg sm:text-xl">
                                Register Now
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div
                    className="flex-1"
                    data-aos="fade-left"
                >
                    <img
                        src="https://i.ibb.co/TPB5fXf/19197347.jpg"
                        alt="Apartment Registration"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;

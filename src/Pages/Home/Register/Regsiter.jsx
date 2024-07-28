import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Button from "../../../Shared/Button/Button";
import Headline from "../../../Shared/Headline/Headline";

const Register = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="my-7 flex flex-col md:flex-row sm:flex-col-reverse justify-center items-center">
            <div className="md:w-1/2 p-6" data-aos="fade-right">
                <Headline
                    subheading="Register "
                    headline="Join Our Community of Hosts"
                />
                <div className="my-4">
                    <p className="text-lg text-gray-600">
                        Become a part of our growing network of property owners and managers. Register your apartment today and start connecting with potential tenants. Our platform makes it easy to manage your listings, communicate with tenants, and streamline your property management tasks.
                    </p>
                </div>
                <Link to="/signup">
                    <Button className="text-xl">
                        Register Now
                    </Button>
                </Link>
            </div>
            <div className="md:w-1/2 p-6" data-aos="fade-left">
                <img src="https://i.ibb.co/sRHBmm2/19197347.jpg" alt="Apartment Registration" className="w-full rounded-lg" />
            </div>
        </div>
    );
};

export default Register;

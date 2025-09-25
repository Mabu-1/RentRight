import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "../../../Shared/Button/Button";
import Headline from '../../../Shared/Headline/Headline';
import { Link } from 'react-router-dom';

const Newsletter = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="my-12 px-4" data-aos="fade-up">
            {/* Headline */}
            <Headline 
                subheading1={"Newsletter"}
                headline1={"Stay Connected With Us"}
                headline3={" exclusive offers, property updates & news."}
            />

            {/* Newsletter Form */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6 max-w-2xl mx-auto">
                
                {/* Input Field */}
                <div className="flex items-center border-2 border-[#eb7043] rounded-full px-4 py-2 w-full shadow-sm focus-within:shadow-md transition">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="outline-none w-full text-sm bg-transparent md:text-base 
                                   text-gray-800 dark:text-gray-200 
                                   "
                    />
                </div>

                {/* Subscribe Button */}
                <Link to="/">
                <Button className="w-full md:w-auto rounded-full px-6 py-3">
                    Subscribe
                </Button>
                </Link>
            </div>

         
            <p className="text-center text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-3">
                We respect your privacy. Unsubscribe anytime.
            </p>
        </div>
    );
};

export default Newsletter;

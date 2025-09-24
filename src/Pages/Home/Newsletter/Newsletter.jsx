import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "../../../Shared/Button/Button";
import Headline from '../../../Shared/Headline/Headline';

const Newsletter = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
<<<<<<< HEAD
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
                        className="outline-none w-full text-sm md:text-base"
                    />
                </div>

                {/* Subscribe Button */}
                <Button className="w-full md:w-auto rounded-full px-6 py-3">
                    Subscribe
                </Button>
            </div>

            {/* Small Note */}
            <p className="text-center text-gray-500 text-xs md:text-sm mt-3">
                We respect your privacy. Unsubscribe anytime.
            </p>
=======
        <div className="my-7 " data-aos="fade-up">
           <Headline 
           subheading1={"Newsletter"}
           headline1={"Subscribe to our newsletter to receive the latest updates,"}
           headline3={" exclusive offers & news."}
           head
           />
           
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4 justify-center mt-4">
                <div className="flex items-center border-2 border-[#eb7043] rounded-lg p-2 gap-2">
                
                    <input
                        type="email"
                        placeholder="Enter your Email ID"
                        className="outline-none w-full"
                    />
                </div>
               
               <Button className="w-full ">
                    Subscribe
                </Button>
             
            </div>
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
        </div>
    );
};

export default Newsletter;

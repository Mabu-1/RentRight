import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "../../../Shared/Button/Button";

const Newsletter = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="my-7" data-aos="fade-up">
            <div className="text-center">
                <h3 className="text-4xl sm:flex-4xl md:text-6xl lg:text-6xl font-bold text-yellow-400">Newsletter</h3>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4 justify-center mt-4">
                <div className="flex items-center border-2 border-blue-600 rounded-lg p-2 w-[300px] gap-2">
                
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
        </div>
    );
};

export default Newsletter;

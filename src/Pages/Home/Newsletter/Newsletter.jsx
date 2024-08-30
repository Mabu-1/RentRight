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
        </div>
    );
};

export default Newsletter;

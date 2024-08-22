import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease',
        });
    }, []);

    return (
        <div className="my-[20px]">
            <div className="flex flex-col sm:flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 text-center md:text-left mt-8 md:mt-0" data-aos="fade-right">
                  <div>
                  <div className='font-bold text-yellow-400'>
                        <h6 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Get in <br/>Touch</h6>
                    </div>
                   
                  </div>
                    <div className="my-4">
                        <p className=" text-2xl sm:text-3xl md:text-4xl font-bold">We're Here to Help You</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-base sm:text-lg md:text-xl">If you have any questions or need assistance, please don't hesitate to reach out. Our team is here to provide you with the support you need.</p>
                    </div>
                </div>

                <div className="flex-1 flex justify-center" data-aos="fade-up">
                    <img src="https://i.ibb.co/z27wQD2/5132732.jpg" alt="Support" className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;

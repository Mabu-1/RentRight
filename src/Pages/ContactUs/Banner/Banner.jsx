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
        <div className="mt-[150px]">
            <div className="flex md:flex-row sm:flex-col-reverse gap-8">
                <div className="flex-1 text-start md:text-start sm:text-center" data-aos="fade-right">
                    <div>
                        <h6 className="text-4xl font-semibold">Get in</h6>
                    </div>
                    <div>
                        <h6 className="text-6xl font-bold">Touch</h6>
                    </div>
                    <div className="my-4">
                        <p className="text-yellow-400 text-3xl font-bold">We're Here to Help You</p>
                    </div>
                    <div>
                        <p className="text-gray-500">If you have any questions or need assistance, please don't hesitate to reach out. Our team is here to provide you with the support you need.</p>
                    </div>
                </div>

                <div className="flex-1 justify-center mt-[-100px] md:mt-[-100px] sm:mt-[1px]" data-aos="fade-up">
                    <img src="https://i.ibb.co/z27wQD2/5132732.jpg" alt="" className="h-[500px]" />
                </div>
            </div>
        </div>
    );
};

export default Banner;

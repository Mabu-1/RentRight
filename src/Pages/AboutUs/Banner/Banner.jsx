import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    return (
        <div className="my-[20px] px-4">
            <div className="flex flex-col-reverse md:flex-row items-center">
                <div
                    data-aos="fade-right"
                    className="relative  mt-4 border-8 border-yellow-400 rounded-lg max-w-full w-full md:w-auto flex-1"
                    
                >
                    <div>
                        <img
                            src="https://i.ibb.co/PYrj8XH/401-top-Renders-b-7abbbb2796f27c91ef535646dc2c5299.webp"
                            alt=""
                            className="w-full"
                        />
                    </div>
                    <div
                        data-aos="fade-left"
                        className="absolute bottom-[-60px] sm:bottom-[-80px] right-[-30px] sm:right-[30px] md:right-[-80px] border-8 border-yellow-400 w-[50%] sm:w-[40%] md:w-1/2 rounded-lg"
                    >
                        <img
                            src="https://i.ibb.co/T1fxnhK/PRESTIGE-ELM-PARK.jpg"
                            alt=""
                            className="w-full"
                        />
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    className="flex justify-center w-full md:w-1/2 mt-8 md:mt-0 flex-1"
                >
                    <div className="text-center">
                        <div className="my-6">
                            <h1 className="text-4xl text-blue-600 font-extrabold">RentRight</h1>
                        </div>
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            Building <span className="text-[#0717ff]">Dreams</span>, One <span className="text-[#ffe207]">Home</span> at a Time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

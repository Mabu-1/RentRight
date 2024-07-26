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
        <div className="my-[110px]">
            <div className="flex md:flex-row sm:flex-col-reverse">
                <div
                    data-aos="fade-right"
                    className="relative z-0 border-8 border-yellow-400 rounded-lg"
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
                        className="absolute z-1 bottom-[-120px] right-[-100px] sm:right-[-40px] border-8 border-yellow-400 w-1/2 rounded-lg"
                    >
                        <img
                            src="https://i.ibb.co/T1fxnhK/PRESTIGE-ELM-PARK.jpg"
                            alt=""
                            className="full"
                        />
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    className="flex justify-center w-1/2 sm:w-full my-8"
                >
                    <div className="text-center mt-[50px]">
                        <div className="my-6">
                            <h1 className="text-4xl text-blue-600 font-extrabold">RentRight</h1>
                        </div>
                        <p className="text-5xl font-bold">
                            Building <span className="text-[#0717ff]">Dreams</span>, One <span className="text-[#ffe207]">Home</span> at a Time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

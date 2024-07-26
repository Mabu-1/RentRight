import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const MobileApp = () => {
    const backgroundImageStyle = {
        backgroundImage: "url('https://i.ibb.co/ngyJWD7/4306898.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        overflow: 'hidden'
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    return (
        <div style={backgroundImageStyle} className="my-[200px] border-2 rounded-lg">
            <div className="p-5">
                <div className="my-2" data-aos="fade-up">
                    <p className="text-2xl text-yellow-400 font-bold">Download APP!</p>
                </div>
                <div className="w-1/2 md:w-1/2 sm:w-full" data-aos="fade-up" data-aos-delay="200">
                    <p className="text-3xl text-[#0717ff] font-extrabold">
                        Improved Purchasing Or Selling Experience. We're At Your Fingertips! Download Right Now!
                    </p>
                </div>
                <div className="flex gap-5 my-8" data-aos="fade-up" data-aos-delay="400">
                    <div>
                        <img src="https://i.ibb.co/fGPmGCv/App-1.png" alt="App 1" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/1q3fdPW/App-2.png" alt="App 2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileApp;

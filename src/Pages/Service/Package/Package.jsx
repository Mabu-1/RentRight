import Headline from "../../../Shared/Headline/Headline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Button from "../../../Shared/Button/Button";

const Package = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const [pack, setPack] = useState([]);
    useEffect(() => {
        fetch('package.json')
            .then(res => res.json())
            .then(data => setPack(data));
    }, []);

    return (
        <div className="my-10">
            <div className="flex justify-between">
                <div data-aos="fade-right">
                    <img src="https://i.ibb.co/pJMpc6F/Home-2-Pricing-Hd-Left-Img.png" alt="" />
                </div>
                <div className="text-center" data-aos="fade-up">
                    <Headline
                        subheading1={"AFFORDABLE"}
                        headline1={"Package Details"}
                    />
                    <p>Ultrices dui sapien eget mi proin sed libero enim sed. Velit euismod in pellentesque massa placerat duis ultricies lacus sed.</p>
                </div>
                <div data-aos="fade-left">
                    <img src="https://i.ibb.co/VWw9xLg/Home-2-Pricing-Hd-Right-Img.png" alt="" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 my-3">
                {pack.map((pac, index) => (
                    <div key={index} className="bg-gray-200 hover:bg-gray-800 hover:text-white hover:border-white border-4 rounded-lg border-blue-400 flex flex-col" data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className="flex justify-center">
                            <img src={pac.imageURL} alt="" className="w-[500px] h-[270px] object-cover p-2 rounded-lg" />
                        </div>
                        <div className="flex justify-center my-3">
                            <p className="text-2xl font-bold">{pac.name}</p>
                        </div>
                        <hr className="border-t-2 border-yellow-300 my-2 mx-2" />
                        <div className="flex justify-center mt-4 mb-2">
                            <p className="text-xl font-semibold">Starting Prices</p>
                        </div>
                        <div className="flex justify-center font-extrabold text-6xl mb-4">
                            <p>${pac.price}/-</p>
                        </div>
                        <div className="flex-grow flex justify-center">
                            <ul className="list-disc list-inside font-semibold gap-1 mb-2">
                                {pac.benefits.map((benefit, idx) => (
                                    <li key={idx}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-center mb-4">
                            <Button>
                                Book Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Package;

import Headline from "../../../Shared/Headline/Headline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Package = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const pack = [
        {
            imageURL: "https://i.ibb.co/KLBDHWz/pexels-max-rahubovskiy-6782426-780x470.jpg",
            name: "Self Service Plan",
            price: "30",
            benefits: ["Project Plan Cost", "Free Documentation"]
        },
        {
            imageURL: "https://i.ibb.co/qyF79Qm/d09208183125ab47493d5de2f8710b6faa27d7cc-3000x2000.webp",
            name: "Agent Service Plan",
            price: "50",
            benefits: ["Project Plan Cost", "Free Documentation", "Assistance", "Assistance By Agent"]
        },
        {
            imageURL: "https://i.ibb.co/FDn5CwM/455613071.jpg",
            name: "Brokerage Plan Cost",
            price: "70",
            benefits: ["Project Plan Cost", "Free Documentation", "Assistance", "Assistance By Agent", "Premium Listing"]
        },
    ];

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

            <div className="flex justify-evenly md:flex-row sm:flex-col gap-5 my-3">
                {pack.map((pac, index) => (
                    <div key={index} className="bg-gray-200 hover:bg-blue-400 border-4 rounded-lg border-yellow-300 " data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className="flex justify-center">
                            <img src={pac.imageURL} alt="" className="w-[500px] h-[270px] object-cover p-2 rounded-lg" />
                        </div>
                        <div className="flex justify-center my-3">
                            <p className="text-2xl font-bold">{pac.name}</p>
                        </div>
                        <hr className="border-t-2 border-yellow-300 my-2 mx-2" />
                        <div className="flex justify-center mt-4 mb-10">
                            <p className="text-xl font-semibold">Starting Prices</p>
                        </div>
                        <div className="flex justify-center font-extrabold text-6xl mb-14">
                            <p>${pac.price}/-</p>
                        </div>
                        <div className="flex justify-center">
                            <ul className="list-disc list-inside font-semibold gap-1 mb-2">
                                {pac.benefits.map((benefit, idx) => (
                                    <li key={idx}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Package;

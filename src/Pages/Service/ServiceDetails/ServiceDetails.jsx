import { Link } from "react-router-dom";
import Headline from "../../../Shared/Headline/Headline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaHome, FaMoneyBillWave, FaTools, FaHandshake, FaChartLine, FaClipboardList } from "react-icons/fa";

const ServiceDetails = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const services = [
        {
            icon: <FaHome />,
            title: "Property Management",
            description: "Comprehensive property management services including tenant screening, rent collection, and maintenance to keep your property in top condition."
        },
        {
            icon: <FaMoneyBillWave />,
            title: "Real Estate Sales",
            description: "Expert assistance with buying and selling properties, including market analysis, property listings, and sales support."
        },
        {
            icon: <FaHandshake />,
            title: "Leasing Services",
            description: "Professional leasing services, from lease negotiations and tenant screening to move-in and move-out processes."
        },
        {
            icon: <FaTools />,
            title: "Maintenance and Repairs",
            description: "Routine maintenance and emergency repair services to ensure your property remains in excellent condition."
        },
        {
            icon: <FaClipboardList />,
            title: "Financial Services",
            description: "Comprehensive financial management, including rent collection, expense management, financial reporting, and tax preparation."
        },
        {
            icon: <FaChartLine />,
            title: "Consulting Services",
            description: "Expert consulting on market research, investment strategies, property development, and strategic planning."
        }
    ];

    return (
        <div className="my-[100px]">
            <div className="flex justify-center text-center" data-aos="fade-up">
                <Headline
                    subheading1={"Our Services"}
                    headline={"What We Offer"}
                />
            </div>
            <div className="flex justify-center text-center mb-4" data-aos="fade-up">
                <div className="max-w-[700px]">
                    <p className="text-gray-400">We provide a range of services to meet all your property management needs. From property management and real estate sales to maintenance, financial services, and consulting, we have you covered.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg shadow-lg overflow-hidden p-6" data-aos="fade-up">
                        <div className="flex flex-col items-center">
                            <div className="text-4xl text-yellow-400 mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-500 text-center">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceDetails;

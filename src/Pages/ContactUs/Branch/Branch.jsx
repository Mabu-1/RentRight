import { Link } from "react-router-dom";
import Headline from "../../../Shared/Headline/Headline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";


const Branch = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const branches = [
        {
            imageUrl: "https://i.ibb.co/V3VkkQd/Contact-Pg-Country-4.jpg",
            location: "USA",
            address: "58A, East Madison Street, Baltimore, MD",
            phone: "+000 - 123456789",
            email: "info@example.com",
            hours: "Mon-Fri: 9 AM - 6 PM"
        },
        {
            imageUrl: "https://i.ibb.co/jkv0xY5/Contact-Pg-Country-3.jpg",
            location: "Spain",
            address: "Manzana Alicia Briseño, 59, Rubí, Cbr 36738",
            phone: "000-123-456-789",
            email: "contact@example.com",
            hours: "Mon-Fri: 10 AM - 8 PM"
        },
        {
            imageUrl: "https://i.ibb.co/2WG3B6s/Contact-Pg-Country-2.jpg",
            location: "France",
            address: "7 Sente Des Pierres Mayettes, 33305 Dijon",
            phone: "000-123-45 67 89",
            email: "support@example.com",
            hours: "Mon-Fri: 9 AM - 7 PM"
        },
        {
            imageUrl: "https://i.ibb.co/nggknwN/Contact-Pg-Country-1.jpg",
            location: "New York",
            address: "60 Wooster Street New York, NY 10012",
            phone: "+00-123456789",
            email: "admin@example.com",
            hours: "Mon-Fri: 10 AM - 9 PM"
        }
    ];

    return (
        <div className="my-[100px]">
            <div className="flex justify-center text-center" data-aos="fade-up">
                <Headline
                    subheading1={"Contact"}
                    headline={"Our Branch Office"}
                />
            </div>
            <div className="flex justify-center text-center mb-4" data-aos="fade-up">
                <div className="max-w-[700px]">
                    <p className="text-gray-400">Est pellentesque elit ullamcorper dignissim cras tincidunt. Non sodales neque sodales ut etiam sit amet nisl purus. Pharetra et ultrices neque ornare aenean euismod. Quam pellentesque nec nam aliquam sem.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {branches.map((branch, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
                        <Link to="/">
                            <div className="w-full">
                                <img src={branch.imageUrl} alt={branch.location} className="w-full h-[250px] object-cover" />
                                <div className="p-4 bg-gray-800 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{branch.location}</h3>
                                   
                                    <div className="flex items-center gap-2 mb-2">
                                    <IoLocation />
                                        <span>{branch.address}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <FaPhone />
                                        <span>{branch.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <FaEnvelope />
                                        <span>{branch.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaClock />
                                        <span>{branch.hours}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Branch;

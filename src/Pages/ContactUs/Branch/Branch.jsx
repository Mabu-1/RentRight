import { Link } from "react-router-dom";
import Headline from "../../../Shared/Headline/Headline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";


const Branch = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const [branches,setBranches] = useState([]);
    useEffect( () =>
        {
             fetch('branch.json')
             .then(res =>res.json())
             .then( data =>setBranches(data))
        },[])
        

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

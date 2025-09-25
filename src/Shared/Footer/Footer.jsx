import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full border-t-2 bg-gray-50">
            <div className="relative bg-no-repeat bg-center bg-cover text-white px-6 py-12 md:px-16 lg:px-20">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/60"></div>

                <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
                    {/* Brand Section */}
                    <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-black">
                            Rent<span className="text-[#eb7043]">Right</span>
                        </h3>
                        <p className="mabu-text text-black font-medium text-sm mt-4 max-w-xl leading-relaxed">
                            RentRight Property Management offers modern, efficient solutions for managing residential and commercial properties. We pride ourselves on exceptional service and personalized care, ensuring your property is handled with expertise and attention to detail.
                        </p>
                        <div className="flex gap-4 mt-6 text-xl">
                            <a href="#" className="bg-blue-600 p-2 rounded-full hover:scale-110 transition-transform duration-300">
                                <FaFacebookF className="text-white" />
                            </a>
                            <a href="#" className="bg-gradient-to-r from-pink-500 to-orange-500 p-2 rounded-full hover:scale-110 transition-transform duration-300">
                                <FaInstagram className="text-white" />
                            </a>
                            <a href="#" className="bg-red-600 p-2 rounded-full hover:scale-110 transition-transform duration-300">
                                <FaYoutube className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-semibold text-[#eb7043]">
                            Useful Links
                        </h2>
                        <ul className="mt-4 space-y-2 text-black font-medium">
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/">Home</Link></li>
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/property">Property</Link></li>
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/service">Service</Link></li>
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/aboutUs">About Us</Link></li>
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/contactUs">Contact Us</Link></li>
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/login">Login</Link></li>
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/signup">Register</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-semibold text-[#eb7043]">
                            Contact Us
                        </h2>
                        <ul className="flex flex-col gap-4 mt-4 text-black font-bold">
                            <li className="flex gap-3 items-center">
                                <BsTelephoneFill className=" text-[#2cae74] text-xl md:text-2xl" />
                                <p className='mabu-text3'>+8 (800) 238 9997</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <MdEmail className="text-red-600 text-xl md:text-2xl" />
                                <p className='mabu-text3'>rentright77@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="relative mt-10 border-t pt-4 text-center text-black font-semibold">
                    <p>
                        © <span className="text-[#ec6331]">RentRight</span> <span className='mabu-text3'>2024 | Created by{" "}</span>
                        <span className="font-bold">Mahtab Uddin</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

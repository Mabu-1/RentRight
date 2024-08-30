import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full border-t-2'>
            <div
                className='relative bg-no-repeat bg-center bg-cover text-white p-8'
                style={{ backgroundImage: `url('https://i.ibb.co/D7WSqfc/6577e0ff3ab05.jpg')` }}
            >
                {/* Overlay for blur effect */}
                <div className='absolute inset-0 bg-white bg-opacity-30'></div>

                <div className='relative flex flex-col lg:flex-row lg:justify-between lg:items-start'>
                    <div className='flex-1 mb-10 lg:mb-0'>
                        <h3 className='text-2xl sm:text-2xl md:text-3xl font-semibold text-black'>
                            Rent<span className='text-[#eb7043]'>Right</span>
                        </h3>
                        <p className='text-black font-bold text-sm mt-4 w-full sm:w-[200px] md:w-[300px] lg:w-[500px]'>
                            RentRight Property Management offers modern, efficient solutions for managing residential and commercial properties. We pride ourselves on exceptional service and personalized care, ensuring your property is handled with expertise and attention to detail.
                        </p>
                        <div className='flex gap-3 mt-4 text-2xl'>
                            <div className='bg-blue-600 p-2 rounded-full'>
                                <FaFacebookF className='text-white' />
                            </div>
                            <div className='bg-gradient-to-r from-pink-500 to-orange-500 p-2 rounded-full'>
                                <FaInstagram className='text-white' />
                            </div>
                            <div className='bg-red-600 p-2 rounded-full'>
                                <FaYoutube className='text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 mb-10 lg:mb-0'>
                        <h2 className='text-2xl sm:text-2xl md:text-3xl font-semibold text-[#eb7043]'>
                            Useful Links
                        </h2>
                        <ul className='text-black mt-4 space-y-2'>
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/">Home</Link></li>
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/property">Property</Link></li>
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/service">Service</Link></li>
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/aboutUs">About Us</Link></li>
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/contactUs">Contact Us</Link></li>
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/login">Login</Link></li>
                            <li><Link className="hover:text-[#eb6838] font-bold" to="/signup">Register</Link></li>
                        </ul>
                    </div>
                    <div className=' mb-10 lg:mb-0'>
                        <h2 className='text-2xl sm:text-2xl md:text-3xl font-semibold text-[#eb7043]'>
                            Contact Us
                        </h2>
                        <ul className='flex flex-col gap-4 mt-4 text-black font-bold'>
                            <li className='flex gap-2 items-center'>
                                <BsTelephoneFill className='text-[#2cae74] text-2xl' />
                                <p>+8 (800) 238 9997</p>
                            </li>
                            <li className='flex gap-2 items-center'>
                                <MdEmail className='text-red-600 text-2xl' />
                                <p>rentright77@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='text-black font-bold p-3 text-center'>
                    <p>© <span className='text-[#ec6331]'>RentRight</span> 2024 | Created by <span>Mahtab Uddin</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

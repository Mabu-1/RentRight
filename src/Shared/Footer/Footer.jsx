
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {


    return (
  
            <div className='w-full bg-black' >
                <div className='bg-no-repeat bg-center bg-co text-white p-8'>
                    <div className='flex justify-between flex-col gap-20 lg:flex-row '>
                        <div className=''>
                            <div className='flex items-center my-5'>
                                <p className='text-blue-600 font-extrabold text-4xl'>RentRight</p>
                            </div>
                            <div>
                                <ul className=' flex flex-col gap-2'>

                                    <li className='flex gap-2 items-center'><BsTelephoneFill className='text-[#2cae74] text-2xl' /><p>+8 (800) 238 9997 </p></li>
                                    <li className='flex gap-2 items- center'><MdEmail className='text-[#2cae74] text-2xl' /><p>resicraft77@gmail.com</p></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-4xl mt-5 mb-8 font-semibold text-[#7207ff] '>Pages</h2>
                            <li><Link className="text-blue-300 text-lg font-bold" to='/'>Home</Link></li>
                            <li><Link className="text-blue-300 text-lg font-bold" to='/property'>Property</Link></li>
                            <li><Link className="text-blue-300 text-lg font-bold" to='/service'>Service</Link></li>
                            <li><Link className="text-blue-300 text-lg font-bold" to='/aboutUS'>About US</Link></li>
                            <li><Link className="text-blue-300 text-lg font-bold" to='/contactUs'>Contact US</Link></li>
                          
                           
                            <li><Link className="text-blue-300 text-lg font-bold" to='/login'>login</Link></li>
                            <li><Link className="text-blue-300 text-lg font-bold" to='/signup'>Register</Link></li>
                        </div>
                        <div>
                            <h2 className='font-semibold text-4xl  mt-5 mb-3 text-[#3d07ff]'>Social Links</h2>
                            <p>You can find us from social links given below</p>
                            <div className='flex gap-3 mt-8'>
                                <FaFacebookSquare className='text-[#1d1ddd] text-4xl' />
                                <RiInstagramFill className='text-[#d71ddd] text-4xl' />
                                <FaYoutube className='text-[#dd1d1d] text-4xl' />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='bg-black text-[#1d1ddd] p-3 text-center'>
                <p>© RentRight  2024 | Created by <span>Mahtab Uddin</span></p>
            </div>
            </div>
           
        
    );
};

export default Footer;

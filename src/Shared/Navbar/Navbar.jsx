import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PROPERTY", link: "/property" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT US", link: "/aboutUS" },
    { name: "CONTACT US", link: "/contactUS" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md fixed top-0 left-0 w-full z-50'>
      <div className='md:flex items-center justify-between bg-gray-100  md:px-10 px-7'>
        <div className="w-[260px]">
          <Link to="/">
            <img src="https://i.ibb.co/ynmCfyv/cover.png" alt="RentRight" />
          </Link>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 gap-3 absolute md:static bg-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 bg-gray-100 ' : 'top-[-490px] gap-1'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8  md:my-0 my-7 px-1'>
                <Link to={link.link} className='text-black hover:text-[#3d07ff] font-bold duration-500'>{link.name}</Link>
              </li>
            ))
          }

          <div className='md:flex px-1 gap-6'>
            <Link to="/" >
              <Button >
                Login
              </Button>
            </Link>
            <Link to="/"  >
              <Button >
                Visit Our Property
              </Button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

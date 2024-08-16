import { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PROPERTY", link: "/property" },
    { name: "SERVICE", link: "/service" },
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
            {
              user ? <>

                <button className='bg-yellow-500 hover:bg-[#3d07ff]  hover:text-white p-2  flex justify-center text-center border rounded-lg font-bold' onClick={handleLogOut} >
                  LogOut
                </button>

              </> : <>
                <Link to="/login" >
                  <Button >
                    Login
                  </Button>
                </Link>
              </>
            }

            {
              user?.email === "umahtab65@gmail.com"?
              <>
              <Link to="/dashboard/admin"  >
                <Button >
                  Admin
                </Button>
              </Link>
          </> :
          <><Link to="/dashboard/home"  >
            <Button >
              Visit Your Property
            </Button>
          </Link>
          </>
         }

      </div>
    </ul>
      </div >
    </div >
  );
}

export default Navbar;

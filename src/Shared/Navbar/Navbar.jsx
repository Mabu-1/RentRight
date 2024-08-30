import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login'); // Redirect to login page after logout
      })
      .catch(error => console.log(error));
  };

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (loading) {
      <Loading />
      return;
    }

    // Handle any logic that needs to happen once the auth state is resolved
  }, [loading]);

  return (
    <div className='sticky top-0 z-30 bg-white shadow-md'>
      <div className="navbar max-w-screen-2xl mx-auto px-4 lg:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] text-md w-52 p-2"
            >
              <li><a className=" font-heading font-bold " href="/">HOME</a></li>
              <li><a className=" font-heading font-bold " href="/property">PROPERTY</a></li>
              <li><a className=" font-heading font-bold " href="/service">SERVICE</a></li>
              <li><a className=" font-heading font-bold " href="/aboutUS">ABOUT US</a></li>
              <li><a className=" font-heading font-bold " href="/contactUS">CONTACT US</a></li>
            </ul>
          </div>
          <a href="/" className='hidden sm:hidden md:block'>
            <h3 className='ml-2 text-xl sm:text-xl md:text-2xl font-bold '>
              Rent<span className='text-[#eb7043]'>Right</span>
            </h3>
          </a>
        </div>
        <div className="navbar-center ">
          <a href="/" className='block sm:block md:hidden'>
            <h3 className='ml-2 text-xl sm:text-xl md:text-2xl  font-bold '>
              Rent<span className='text-[#eb7043]'>Right</span>
            </h3>
          </a>
          <ul className=' px-2 lg:px-1  hidden md:flex  md:gap-[10px] lg:gap-[20px] text-[13px] lg:text-[15px] '>
            <li><a className=" hover:text-[#eb6838] font-heading font-bold " href="/">HOME</a></li>
            <li><a className="hover:text-[#eb6838] font-heading font-bold " href="/property">PROPERTY</a></li>
            <li><a className="hover:text-[#eb6838] font-heading font-bold " href="/service">SERVICE</a></li>
            <li><a className="hover:text-[#eb6838] font-heading font-bold " href="/aboutUS">ABOUT US</a></li>
            <li><a className="hover:text-[#eb6838] font-heading font-bold " href="/contactUS">CONTACT US</a></li>
          </ul>
        </div>
        <div className="navbar-end mt-1 sm:mt-1 md:mt-3">
          {user ? (
            <div className="relative inline-block text-left">
              <button
                onClick={handleToggleDropdown}
                type="button"
                className="btn btn-ghost btn-circle avatar"
                id="user-menu"
                aria-expanded={isDropdownOpen ? 'true' : 'false'}
                aria-haspopup="true"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="" />
                </div>
              </button>

              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-base-100 ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <p className="block px-4 py-2 text-sm text-gray-700">{user.displayName}</p>
                    {user?.email === "umahtab65@gmail.com" ? (
                      <Link
                        to="/dashboard/admin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Dashboard
                      </Link>
                    ) : (
                      <Link
                        to="/dashboard/home"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleLogOut}
                      className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className='bg-[#ff7542db] hover:bg-[#eb7043] mt-[-4px] text-sm sm:text-sm md:text-base hover:text-white p-[4px] sm:p-[5px] md:px-2 md:py-1 flex justify-center text-center border rounded-lg font-bold'>
                Login
              </button>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;

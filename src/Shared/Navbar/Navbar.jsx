import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => navigate('/login'))
      .catch(console.error);
  };

  const navLinks = [
    { name: "HOME", to: "/" },
    { name: "PROPERTY", to: "/property" },
    { name: "SERVICE", to: "/service" },
    { name: "ABOUT US", to: "/aboutUS" },
    { name: "CONTACT US", to: "/contactUS" },
  ];

  return (
    <div className='mabu-bg sticky top-0 z-50 bg-white shadow-md'>
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-16 h-16 flex items-center justify-between">

        {/* Mobile: Hamburger Left */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none"
        >
          Rent<span className='text-[#eb7043]'>Right</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-1 justify-center gap-6 text-sm lg:text-base font-bold">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="hover:text-[#eb6838] transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User/Login */}
        <div className="ml-auto">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 hover:border-green-500 transition"
              >
                <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
              </button>

              {isDropdownOpen && (
                <div className="absolute  right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                  <div className="py-2">
                    <p className="mabu-text3 px-4 py-1 text-sm text-gray-700">{user.displayName}</p>
                    <Link
                      to={user.email === "umahtab65@gmail.com" ? "/dashboard/admin" : "/dashboard/home"}
                      className="mabu-text3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogOut}
                      className="mabu-text3 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className='bg-[#ff7542db] hover:bg-[#eb7043] text-white text-sm md:text-base px-3 py-1 rounded-lg transition'>
                Login
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white shadow-md border-t">
          {navLinks.map(link => (
            <li key={link.name} className="border-b">
              <Link
                to={link.to}
                className="block px-4 py-3 text-base font-bold hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

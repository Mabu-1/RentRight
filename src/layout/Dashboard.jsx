import { useState, useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
    FaBars, FaHome, FaBuilding, FaStar, FaHouseUser, FaTools, FaDollarSign, 
    FaUser, FaUserCircle 
} from 'react-icons/fa'; 
import { BiSolidLogOut } from 'react-icons/bi';
import { ImMail4 } from 'react-icons/im';
import { AiFillTool } from 'react-icons/ai';
import { FaBuildingUser } from 'react-icons/fa6';
import { AuthContext } from '../Providers/AuthProvider';
import ScrollToTop from '../Shared/ScroolToTop/ScrollToTop';

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
          .then(() => {
            navigate('/login'); 
            setIsDropdownOpen(false); // close dropdown after logout
          })
          .catch(console.error);
    };

    const handleToggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const handleLinkClick = () => setIsDropdownOpen(false); // close dropdown on link click

    // Define links for admin or normal user
    const adminLinks = [
        { to: "/dashboard/admin", name: "Admin Home", icon: <FaUserCircle className="inline mr-2" /> },
        { to: "/dashboard/allProperty", name: "ALL Property", icon: <FaHome className="inline mr-2" /> },
        { to: "/dashboard/allServices", name: "All Service", icon: <FaTools className="inline mr-2" /> },
        { to: "/dashboard/allNotification", name: "All Notification", icon: <ImMail4 className="inline mr-2" /> },
        { to: "/dashboard/allUsers", name: "All Users", icon: <FaUser className="inline mr-2" /> },
        { to: "/dashboard/createProperty", name: "Create Property", icon: <FaBuildingUser className="inline mr-2" /> },
        { to: "/dashboard/createService", name: "Create Service", icon: <AiFillTool className="inline mr-2" /> },
        { to: "/dashboard/createNotification", name: "Create Notification", icon: <ImMail4 className="inline mr-2" /> },
    ];

    const userLinks = [
        { to: "/dashboard/home", name: "User Home", icon: <FaHome className="inline mr-2" /> },
        { to: "/dashboard/myProperty", name: "My Property", icon: <FaHome className="inline mr-2" /> },
        { to: "/dashboard/myService", name: "My Service", icon: <FaHome className="inline mr-2" /> },
        { to: "/dashboard/paymentHistory", name: "Payment History", icon: <FaDollarSign className="inline mr-2" /> },
        { to: "/dashboard/review", name: "Add Review", icon: <FaStar className="inline mr-2" /> },
        { to: "/dashboard/notification", name: "Notification", icon: <ImMail4 className="inline mr-2" /> },
    ];

    const roleLinks = user?.email === "umahtab65@gmail.com" ? adminLinks : userLinks;

    return (
        <div className='flex flex-col min-h-screen'>
            {/* Mobile Header */}
            <div className="sticky top-0 z-30 bg-orange-400 shadow-md">
                <div className="flex items-center justify-between p-4 lg:hidden">
                    <h3 className="text-2xl font-bold text-white">Dashboard</h3>
                    <button onClick={handleToggleDropdown} className="btn btn-ghost btn-circle">
                        <FaBars size={24} />
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {isDropdownOpen && (
                    <div className="bg-white w-full lg:hidden">
                        <ul className="menu p-4">
                            {roleLinks.map(link => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        onClick={handleLinkClick}
                                        className={({ isActive }) => isActive ? "text-blue-500" : "mabu-text3"}
                                    >
                                        {link.icon} {link.name}
                                    </NavLink>
                                </li>
                            ))}
                            <li>
                                <NavLink to="/" onClick={handleLinkClick}>
                                    <FaHouseUser className="inline mr-2" /> Home
                                </NavLink>
                            </li>
                            <li>
                                <div className="flex">
                                    <BiSolidLogOut className="inline mr-2 mabu-text3" />
                                    <button className="bg-none mabu-text3" onClick={handleLogOut}>
                                        LogOut
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Desktop Sidebar */}
            <div className="flex">
                <div className="hidden lg:block w-64 min-h-screen bg-orange-400">
                    <ul className="menu p-2">
                        {roleLinks.map(link => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) => isActive ? "text-blue-500" : "mabu-text3"}
                                >
                                    {link.icon} {link.name}
                                </NavLink>
                            </li>
                        ))}
                        <div className="divider "></div>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : "mabu-text3"}>
                                <FaHouseUser className="inline mr-2" /> Home
                            </NavLink>
                        </li>
                        <li>
                            <div className="flex">
                                <BiSolidLogOut className="inline mr-2 mabu-text3" />
                                <button className="bg-none mabu-text3" onClick={handleLogOut}>
                                    LogOut
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex-grow container max-w-screen-xs sm:max-w-screen-md md:max-w-screen-xl lg:max-w-screen-2xl mx-auto p-2 md:px-4 lg:px-4">
                    <ScrollToTop />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

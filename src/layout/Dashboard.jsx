import { useState, useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaBars, FaHome, FaBuilding, FaStar, FaHouseUser, FaPhone, FaInfoCircle, FaTools, FaDollarSign, FaUser, FaUserCircle } from 'react-icons/fa'; 
import { BiSolidLogOut } from 'react-icons/bi';
import { AuthContext } from '../Providers/AuthProvider';
import ScrollToTop from '../Shared/ScroolToTop/ScrollToTop';
import { FaBuildingUser } from 'react-icons/fa6';
import { AiFillTool } from 'react-icons/ai';
import { ImMail4 } from 'react-icons/im';

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
          .then(() => {
            navigate('/login'); // Redirect to login page after logout
          })
          .catch(error => console.log(error));
      };
    

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    let roleComponent;

    if (user?.email === "umahtab65@gmail.com") {
        roleComponent = (
            <>
                <li>
                    <NavLink to="/dashboard/admin" activeClassName="text-blue-500">
                        <FaUserCircle className="inline mr-2" /> Admin Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/allProperty" activeClassName="text-blue-500">
                        <FaHome className="inline mr-2" /> ALL Property
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/allServices" activeClassName="text-blue-500">
                        <FaTools className="inline mr-2" /> All Service
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/allNotification" activeClassName="text-blue-500">
                        <ImMail4 className="inline mr-2" /> All Notification
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/allUsers" activeClassName="text-blue-500">
                        <FaUser className="inline mr-2" /> All Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/createProperty" activeClassName="text-blue-500">
                        <FaBuildingUser className="inline mr-2" /> Create Property
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/createService" activeClassName="text-blue-500">
                        <AiFillTool className="inline mr-2" /> Create Service
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/createNotification" activeClassName="text-blue-500">
                        <ImMail4 className="inline mr-2" /> Create Notification
                    </NavLink>
                </li>
            </>
        );
    } else {
        roleComponent = (
            <>
                <li>
                    <NavLink to="/dashboard/home" activeClassName="text-blue-500">
                        <FaHome className="inline mr-2" /> User Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/myProperty" activeClassName="text-blue-500">
                        <FaHome className="inline mr-2" /> My Property
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/myService" activeClassName="text-blue-500">
                        <FaHome className="inline mr-2" /> My Service
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to="/dashboard/payment" activeClassName="text-blue-500">
                        <FaDollarSign className="inline mr-2" /> Payment
                    </NavLink>
                </li> */}
                <li>
                    <NavLink to="/dashboard/paymentHistory" activeClassName="text-blue-500">
                        <FaDollarSign className="inline mr-2" /> Payment History
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/review" activeClassName="text-blue-500">
                        <FaStar className="inline mr-2" /> Add Review
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/notification" activeClassName="text-blue-500">
                        <ImMail4 className="inline mr-2" /> Notification
                    </NavLink>
                </li>
            </>
        );
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <div className="sticky top-0 z-30 bg-orange-400 shadow-md">
                <div className="flex items-center justify-between p-4 lg:hidden">
                    <h3 className="text-2xl font-bold text-white">Dashboard</h3>
                    <button onClick={handleToggleDropdown} className="btn btn-ghost btn-circle">
                        <FaBars size={24} />
                    </button>
                </div>
                {isDropdownOpen && (
                    <div className="bg-white w-full lg:hidden ">
                        <ul className="menu p-4">
                            {roleComponent}
                            <li>
                                <NavLink to="/" activeClassName="text-blue-500">
                                    <FaHouseUser className="inline mr-2" /> Home
                                </NavLink>
                            </li>
                           
                            <li>
                                <div className="flex">
                                    <BiSolidLogOut className="inline mr-2" />
                                    <button className="bg-none" onClick={handleLogOut}>
                                        LogOut
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="flex ">
                <div className="hidden lg:block w-64 min-h-screen bg-orange-400">
                    <ul className="menu p-2">
                        {roleComponent}
                        <div className="divider "></div>
                        <li>
                            <NavLink to="/" activeClassName="text-blue-500">
                                <FaHouseUser className="inline mr-2" /> Home
                            </NavLink>
                        </li>
                    
                        <li>
                            <div className="flex">
                                <BiSolidLogOut className="inline mr-2" />
                                <button className="bg-none" onClick={handleLogOut}>
                                    LogOut
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 flex-grow container max-w-screen-xs sm:max-w-screen-md md:max-w-screen-xl lg:max-w-screen-2xl mx-auto p-2 md:px-4 lg:px-4">
                    <ScrollToTop />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

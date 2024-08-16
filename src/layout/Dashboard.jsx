import {  NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaBuilding, FaStar, FaHouseUser, FaPhone, FaInfoCircle, FaTools, FaDollarSign, FaUser, FaUserCircle } from "react-icons/fa"; // Importing icons
import { BiSolidLogOut } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { IoMail } from "react-icons/io5";
import ScrollToTop from "../Shared/ScroolToTop/ScrollToTop";
import { FaBuildingUser } from "react-icons/fa6";
import { AiFillTool } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";

const Dashboard = () => {
 const {user} = useContext(AuthContext);

    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
            navigate('/');
    }

    let roleComponent;

if(user?.email==="umahtab65@gmail.com")
{
  roleComponent =(
    <>
    <li>
        <NavLink to="/dashboard/admin" activeClassName="text-blue-500">
        <FaUserCircle    className="inline mr-2" /> Admin Home
        </NavLink>
    </li>
   
    <li>
        <NavLink to="/dashboard/allProperty" activeClassName="text-blue-500">
            <FaHome className="inline mr-2" />ALL Property
        </NavLink>
    </li>
    <li>
        <NavLink to="/dashboard/allServices" activeClassName="text-blue-500">
            <FaTools className="inline mr-2" /> All Service
        </NavLink>
    </li>
    <li>
        <NavLink to="/dashboard/allNotification" activeClassName="text-blue-500">
        <ImMail4  className="inline mr-2" /> All Notification
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
        <AiFillTool className="inline mr-2" /> create Service
        </NavLink>
    </li>
    <li>
        <NavLink to="/dashboard/createNotification" activeClassName="text-blue-500">
        <IoMail className="inline mr-2" /> create Notification
        </NavLink>
    </li>

  


    </>
  )
 
}  else{
    roleComponent =(
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
        <NavLink to="/dashboard/payment" activeClassName="text-blue-500">
            <FaDollarSign className="inline mr-2" /> Payment 
        </NavLink>
    </li>
    <li>
        <NavLink to="/dashboard/review" activeClassName="text-blue-500">
            <FaStar className="inline mr-2" /> Add Review
        </NavLink>
    </li>
    <li>
        <NavLink to="/dashboard/notification" activeClassName="text-blue-500">
            <IoMail className="inline mr-2" /> Notification
        </NavLink>
    </li>

 

    </>
  )
  }


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                {roleComponent}
                <div className="divider"></div>

<li>
    <NavLink to="/" activeClassName="text-blue-500">
        <FaHouseUser className="inline mr-2" /> Home
    </NavLink>
</li>
<li>
    <NavLink to="/property" activeClassName="text-blue-500">
        <FaBuilding className="inline mr-2" /> Property
    </NavLink>
</li>
<li>
    <NavLink to="/service" activeClassName="text-blue-500">
        <FaTools className="inline mr-2" /> Service
    </NavLink>
</li>
<li>
    <NavLink to="/contactUs" activeClassName="text-blue-500">
        <FaPhone className="inline mr-2" /> Contact Us
    </NavLink>
</li>
<li>
    <NavLink to="/aboutUs" activeClassName="text-blue-500">
        <FaInfoCircle className="inline mr-2" /> About Us
    </NavLink>
</li>

<li>
    <div className="flex">
    <BiSolidLogOut className="inline mr-2" />

        <button className='bg-none' onClick={handleLogOut} >
            LogOut
        </button>
    </div>
</li>

                </ul>
            </div>

            <div className="flex-1">
            <ScrollToTop/>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;

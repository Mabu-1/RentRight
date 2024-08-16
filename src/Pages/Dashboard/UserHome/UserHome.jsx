import { FaUser, FaEnvelope, FaHome, FaPhone, FaBriefcase, FaCalendarAlt, FaClock, FaTools, FaCity, FaBuilding, FaWrench, FaFileAlt, FaParking, FaMapMarkerAlt, FaPaw } from 'react-icons/fa';
import useUser from "../../../hooks/UseUser";
import usePackage from '../../../hooks/usePackage';
import useProperty from '../../../hooks/useProperty';
import Loading from "../../../Loading/Loading";
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { GrUserWorker } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const UserHome = () => {
    const { user } = useContext(AuthContext);
    const { data, isLoading, isError, error } = useUser();
    const { data: PackData, isLoading: isLoadingPack, isError: isErrorPack, error: errorPack } = usePackage();


    if (isLoading || isLoadingPack ) {
        return <Loading />;
    }

    if (isError || isErrorPack ) {
        return <div className="text-red-500 text-center">Error: {error?.message || errorPack?.message }</div>;
    }

    const email = user?.email;
    const userData = data.find(u => u.email === email);
    const userServiceId = userData?.service;
   
   
    const serviceData = PackData.find(p => p._id === userServiceId);
   

    return (
        <div className="flex-row justify-center gap-10  p-10">
            {/* User Information Section */}
            <div className="flex-1 bg-gray-100 border-4 border-blue-600 rounded-lg p-6 text-center">
                <div className="text-center mb-6">
                    <img
                        src={userData?.image}
                        alt="User Avatar"
                        className="w-[250px] h-[250px] mx-auto rounded-full border-4 border-blue-500"
                    />
                    <h1 className="text-2xl font-bold text-blue-700 mt-4">{userData?.name}</h1>
                </div>

                <div className='flex justify-center'>
                    <ul className="space-y-4 tex-center">
                        <li className="flex items-center space-x-4">
                            <FaUser className="text-blue-500 h-6 w-6" />
                            <span className="text-gray-700 font-bold">Name:</span>
                            <span>{userData?.name}</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <FaEnvelope className="text-blue-500 h-6 w-6" />
                            <span className="text-gray-700 font-bold">Email:</span>
                            <span>{userData?.email}</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <FaHome className="text-blue-500 h-6 w-6" />
                            <span className="text-gray-700 font-bold">Address:</span>
                            <span>{userData?.address}</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <FaPhone className="text-blue-500 h-6 w-6" />
                            <span className="text-gray-700 font-bold">Phone:</span>
                            <span>{userData?.phone}</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <FaBriefcase className="text-blue-500 h-6 w-6" />
                            <span className="text-gray-700 font-bold">Profession:</span>
                            <span>{userData?.profession}</span>
                        </li>
                      
                    </ul>
                </div>
            </div>


            {/* Service and Property Information Section */}
            <div className="flex-1 rounded-lg p-6">
                <div className="flex flex-col space-y-10">

                    <div className='border-4 border-green-600 rounded-lg p-4'>
                        {/* Service Data */}
                        {serviceData ? (
                            <div>
                                <div className='text-center'>
                                    <h2 className="text-2xl font-bold text-green-700 mb-4">Service </h2>

                                </div>
                                <div className="text-center mb-6">
                                    <div className='flex justify-center'>
                                        <GrUserWorker className='text-[250px] text-green-500  mx-auto rounded-full border-4 border-green-500 p-2' />

                                    </div>
                                    <h3 className="text-xl font-bold text-green-700 mt-4">{serviceData?.name}</h3>
                                </div>
                                <div className="text-center text-gray-700">
                                    <p className="text-4xl font-bold text-green-600 mb-4">${serviceData?.price}</p>
                                    <ul className="space-y-2">
                                        {serviceData?.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-center justify-center space-x-2">
                                                <FaTools className="text-green-500 h-6 w-6" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='text-center my-7 text-6xl'>
                                    {userData?.servicePaid === "no" ? (
                                        <span className="text-red-600 font-bold ">Expired</span>
                                    ) : (
                                        <span className="text-green-600 font-bold">Paid</span>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center">
                                <div className='flex justify-center items-center'>
                                    <FaTools className="text-green-500 text-6xl mb-4" />

                                </div>
                                <p className="text-gray-700">You haven't purchased any service yet.</p>
                                <Link to="/service">
                                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg">
                                    Purchase a Service
                                </button>
                                </Link>
                            </div>
                        )}
                    </div>
                 

                </div>
            </div>
        </div>
    );
};

export default UserHome;

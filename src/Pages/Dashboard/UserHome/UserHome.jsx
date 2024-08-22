import { FaUser, FaEnvelope, FaHome, FaPhone, FaBriefcase, FaTools } from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import useUser from "../../../hooks/UseUser";

import Loading from "../../../Loading/Loading";
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';


const UserHome = () => {
    const { user } = useContext(AuthContext);
    const { data, isLoading, isError, error } = useUser();


    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div className="text-red-500 text-center">Error: {error?.message.message}</div>;
    }

    const email = user?.email;
    const userData = data.find(u => u.email === email);


    return (
        <div className="flex justify-center items-center mt-7">
            {/* User Information Section */}
            <div className=" bg-gray-100 border-2 md:border-4 border-blue-600 rounded-lg p-4 md:p-6 w-1/2">
                <div className="text-center mb-4 md:mb-6">
                    <img
                        src={userData?.image}
                        alt="User Avatar"
                        className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] mx-auto rounded-full border-2 md:border-4 border-blue-500"
                    />
                    <h1 className="text-xl md:text-2xl font-bold text-blue-700 mt-4">{userData?.name}</h1>
                </div>
                <div className='flex justify-center'>

                    <div className='flex flex-col items-start'>
                        <ul className="space-y-2 md:space-y-4">
                            <li className="flex items-center space-x-2 md:space-x-4">
                                <FaUser className="text-blue-500 h-5 w-5 md:h-6 md:w-6" />
                                <span className="text-gray-700 font-bold">Name:</span>
                                <span>{userData?.name}</span>
                            </li>
                            <li className="flex items-center space-x-2 md:space-x-4">
                                <FaEnvelope className="text-blue-500 h-5 w-5 md:h-6 md:w-6" />
                                <span className="text-gray-700 font-bold">Email:</span>
                                <span>{userData?.email}</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UserHome;

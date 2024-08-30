import { FaUser, FaEnvelope } from 'react-icons/fa';
import { useContext } from 'react';
import useUser from "../../../hooks/UseUser";
import Loading from "../../../Loading/Loading";
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
            <div className="bg-gray-100 border-2 sm:border-4 border-blue-600 rounded-lg p-4 sm:p-6 w-full max-w-lg">
                <div className="text-center mb-4 sm:mb-6">
                    <img
                        src={userData?.image}
                        alt="User Avatar"
                        className="w-24 h-24 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 mx-auto rounded-full border-2 sm:border-4 border-blue-500"
                    />
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-700 mt-4">{userData?.email}</h1>
                </div>
                <div className='flex justify-center '>
                    <div className='flex flex-col items-start text-sm md:text-base'>
                        <ul className="space-y-2 sm:space-y-4">
                            <li className="flex items-center space-x-2 sm:space-x-4">
                                <FaUser className="text-blue-500 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                                <span className="text-gray-700 font-bold">Name:</span>
                                <span>{userData?.name}</span>
                            </li>
                            <li className="flex items-center space-x-2 sm:space-x-4">
                                <FaEnvelope className="text-blue-500 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
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

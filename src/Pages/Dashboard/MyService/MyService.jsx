import React from 'react';
import usePackage from '../../../hooks/usePackage';
import useUser from '../../../hooks/UseUser';
import Loading from '../../../Loading/Loading';
import useAuth from '../../../hooks/useAuth';
import { GrUserWorker } from 'react-icons/gr';
import { FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyService = () => {
    const { user } = useAuth();
    const { data, isLoading, isError, error } = useUser();
    const { data: PackData, isLoading: isLoadingPack, isError: isErrorPack, error: errorPack } = usePackage();
    if (isLoading || isLoadingPack) {
        return <Loading />;
    }

    if (isError || isErrorPack) {
        return <div className="text-red-500 text-center">Error: {error?.message || errorPack?.message}</div>;
    }

    const email = user?.email;
    const userData = data.find(u => u.email === email);
    const userServiceId = userData?.service;
    const serviceData = PackData.find(p => p._id === userServiceId);

    return (
      <div className='mt-6'>
          <div className="flex-1 border-2 md:border-4 border-green-600 rounded-lg p-4 md:p-6">
        {serviceData ? (
            <div>
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">Service</h2>
                </div>
                <div className="text-center mb-4 md:mb-6">
                    <div className="flex justify-center">
                        <GrUserWorker className="text-[150px] md:text-[250px] text-green-500 mx-auto rounded-full border-2 md:border-4 border-green-500 p-2" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-green-700 mt-4">{serviceData?.name}</h3>
                </div>
                <div className="text-center text-gray-700">
                    <p className="text-2xl md:text-4xl font-bold text-green-600 mb-4">${serviceData?.price}</p>
                 <div className='flex justify-center'>
                 <ul className="space-y-1 md:space-y-2">
                        {serviceData?.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center justify-start space-x-2">
                                <FaTools className="text-green-500 h-5 w-5 md:h-6 md:w-6" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="text-center my-4 md:my-7 text-3xl md:text-4xl">
                    {userData?.servicePaid === "no" ? <>
                       <div className='flex flex-col gap-4'>
                       <span className="text-red-600 font-bold">Expired</span>
                      <Link to ={`/dashboard/payment/${serviceData?._id}`}>
                      <button className='bg-blue-600 font-bold p-2 border-2 rounded-lg'>Pay</button>
                      </Link>
                       </div>
                    </> : <>
                        <span className="text-green-600 font-bold">Paid</span>
                        </>
                    }
                </div>
            </div>
        ) : (
            <div className="text-center">
                <div className="flex justify-center items-center">
                    <FaTools className="text-green-500 text-4xl md:text-6xl mb-4" />
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
    );
};

export default MyService;
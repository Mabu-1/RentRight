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
<<<<<<< HEAD

    if (isLoading || isLoadingPack) return <Loading />;
    if (isError || isErrorPack) return <div className="text-red-500 text-center mt-6">Error: {error?.message || errorPack?.message}</div>;
=======
    if (isLoading || isLoadingPack) {
        return <Loading />;
    }

    if (isError || isErrorPack) {
        return <div className="text-red-500 text-center">Error: {error?.message || errorPack?.message}</div>;
    }
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24

    const email = user?.email;
    const userData = data.find(u => u.email === email);
    const userServiceId = userData?.service;
    const serviceData = PackData.find(p => p._id === userServiceId);

    return (
<<<<<<< HEAD
        <div className="mt-6 flex justify-center">
            <div className="flex-1 max-w-3xl border-2 md:border-4 border-green-600 rounded-xl p-6 md:p-10 shadow-lg bg-white">
                {serviceData ? (
                    <>
                        {/* Service Header */}
                        <div className="text-center mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-green-700">Service Details</h2>
                        </div>

                        {/* Service Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="bg-green-100 rounded-full p-6 md:p-10 flex justify-center items-center shadow-inner">
                                <GrUserWorker className="text-green-500 text-[120px] md:text-[200px]" />
                            </div>
                        </div>

                        {/* Service Name & Price */}
                        <div className="text-center mb-6">
                            <h3 className="text-xl md:text-2xl font-bold text-green-700">{serviceData?.name}</h3>
                            <p className="text-2xl md:text-4xl font-extrabold text-green-600 mt-2">${serviceData?.price}</p>
                        </div>

                        {/* Benefits */}
                        <div className="mb-6">
                            <h4 className="text-lg md:text-xl font-semibold text-gray-700 mb-3 text-center">Benefits:</h4>
                            <ul className="flex flex-col gap-3 md:gap-4 max-w-md mx-auto">
                                {serviceData?.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <FaTools className="text-green-500 w-5 h-5 md:w-6 md:h-6" />
                                        <span className="text-sm md:text-base">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Payment Status */}
                        <div className="text-center mt-6">
                            {userData?.servicePaid === "no" ? (
                                <div className="flex flex-col items-center gap-4">
                                    <span className="text-red-600 text-xl md:text-2xl font-bold">Expired</span>
                                    <Link to={`/dashboard/payment/${serviceData?._id}`}>
                                        <button className="bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                                            Pay Now
                                        </button>
                                    </Link>
                                </div>
                            ) : (
                                <span className="text-green-600 text-xl md:text-2xl font-bold">Paid</span>
                            )}
                        </div>
                    </>
                ) : (
                    // No Service Purchased
                    <div className="text-center py-10">
                        <div className="flex justify-center mb-4">
                            <FaTools className="text-green-500 text-6xl md:text-8xl" />
                        </div>
                        <p className="text-gray-700 text-lg md:text-xl mb-4">You haven't purchased any service yet.</p>
                        <Link to="/service">
                            <button className="bg-green-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-green-600 transition">
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
=======
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
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24

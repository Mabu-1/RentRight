<<<<<<< HEAD
import { IoIosCall, IoIosMail } from "react-icons/io";

const Banner = () => {
  return (
    <div className="my-12 px-4">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co/3prVrDy/3d-rendering-house-model-min1.jpg"
            alt="House"
            className="w-90 h-90 object-cover rounded-full border-4 border-[#eb7043] shadow-lg"
             loading="eager"
          />
        </div>

        {/* Right: Text + Contact */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">Find Your</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#eb7043] mt-2">
            Perfect Future House
          </h1>
          <p className="text-lg md:text-xl font-semibold mt-3">
            We Give the Best Price
          </p>
          <p className="text-gray-500 mt-4 max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            commodi impedit eius laborum odit dolore inventore.
          </p>

          {/* Contact Info */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-6">
            {/* Call */}
            <div className="flex items-center gap-3 bg-white rounded-lg shadow px-4 py-3 border">
              <IoIosCall className="text-green-600 w-8 h-8" />
              <div>
                <p className="font-bold">Call us Anytime</p>
                <p className="text-gray-600 text-sm">+90792972337</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-white rounded-lg shadow px-4 py-3 border">
              <IoIosMail className="text-red-600 w-8 h-8" />
              <div>
                <p className="font-bold">Email us Anytime</p>
                <p className="text-gray-600 text-sm">resicraft77@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
=======

import { IoIosCall, IoIosMail } from "react-icons/io";

const Banner = () => {
    return (
        <div className="my-[20px]">
            <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row gap-4">
                <div className="flex-1 ">
                    <div>
                        <img src="https://i.ibb.co/3prVrDy/3d-rendering-house-model-min1.jpg" alt="" className="border rounded-full " />

                    </div>
                </div>
                <div className="flex-1  flex text-center items-center justify-center">
                    <div className="mb-6 ">
                        <div className="">
                            <h6 className="text-2xl sm:text-2xl  md:text-3xl   font-bold">Find Your</h6>
                        </div>
                        <div className="mb-4">
                            <h6 className="text-3xl sm:text-3xl md:text-4xl  text-[#eb7043] font-bold">Perfect Future House</h6>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-2xl md:text-2xl  font-bold">We Give the Best Price</p>
                        </div>
                        <div className="mt-4 mb-1">
                            <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti commodi impedit eius laborum odit dolore inventore, ad exercitationem eos ullam!</p>
                        </div>

                        <div className="flex flex-col sm:flex-col md:flex-row justify center items-center gap-4 ">
                            <div className="flex  items-center  rounded-md">
                                <IoIosCall className="mr-2 h-[110px] w-[40px] sm:w-[40px] md:w-[50px] lg:md:w-[50px] text-green-700" />
                                <div className="">
                                    <p className="font-bold ">Call us Anytime</p>
                                    <p className="">+90792972337</p>
                                </div>
                            </div>
                            <div className="flex  items-center rounded-md">
                                <IoIosMail className="mr-2 h-[110px] w-[40px] sm:w-[40px] md:w-[50px] lg:md:w-[50px] text-red-700" />
                                <div className="">
                                    <p className="font-bold ">Email us Anytime</p>
                                    <p className="">resicraft77@gmail.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24

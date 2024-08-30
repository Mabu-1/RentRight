
import { IoIosCall, IoIosMail } from "react-icons/io";

const Banner = () => {
    return (
        <div className="my-[20px]">
            <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row gap-4">
                <div className="flex-1 ">
                    <div>
                        <img src="https://i.ibb.co/m57qs00/3d-rendering-house-model.jpg" alt="" className="border rounded-full " />

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
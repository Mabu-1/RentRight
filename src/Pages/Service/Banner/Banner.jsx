import { IoIosCall, IoIosMail } from "react-icons/io";

const Banner = () => {
    return (
        <div className="my-[120px]">
            <div className="flex md:flex-row sm:flex-col ">
                    <div className="flex-1 ">
                        <div>
                        <img src="https://i.ibb.co/m57qs00/3d-rendering-house-model.jpg" alt=""  className="border rounded-full bg-slate-500 h-[600px]"/>

                        </div>
                    </div>
                    <div className="flex-1   text-center md:mt-[80px] sm:mt-[30px]">
                  <div className="my-6 ">
                  <div className="">
                        <h6 className="text-5xl text-yellow-400  font-bold">Find Your</h6>
                    </div>
                    <div className="mb-4">
                        <h6 className="text-5xl text-blue-600 font-bold">Perfect Future House</h6>
                    </div>
                    <div>
                        <p className="text-3xl  font-bold">We Give the Best Price</p>
                    </div>
                    <div className="mt-4 mb-1">
                        <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti commodi impedit eius laborum odit dolore inventore, ad exercitationem eos ullam!</p>
                    </div>
                  
                   <div className="flex gap-4 justify-center">
                   <div  className="flex justify-center items-center p-4 rounded-md">
                    <IoIosCall className="mr-2 h-[110px] w-[40px] text-green-700" />
                    <div>
                        <p className="font-bold">Call us Anytime</p>
                        <p>+90792972337</p>
                    </div>
                </div>
                <div  className="flex items-center  p-4 rounded-md">
                    <IoIosMail className="mr-2 h-[110px] w-[40px] text-red-600" />
                    <div>
                        <p className="font-bold">Email us Anytime</p>
                        <p>resicraft77@gmail.com</p>
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
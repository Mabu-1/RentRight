import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBath, FaBed, FaDollarSign } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';

const SearchBar = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease'
    });
  }, []);



  return (
    <div className="" data-aos="fade-up">
      <div className="flex flex-col lg:flex-row bg-white p-5 rounded-lg shadow-lg space-y-4 lg:space-y-0 lg:space-x-4 w-full font-bold">
        <div className="flex items-center border border-gray-300 rounded-lg  p-2">
          <FaDollarSign className="text-gray-500 mr-2 h-[30px] w-[40px]" />
          <input
            type="number"
            placeholder="Min Price"
            className="focus:outline-none bg-transparent w-1/2 lg:w-auto "
          />
          <span className="text-gray-500 mx-2">-</span>
          <input
            type="number"
            placeholder="Max Price"
            className="focus:outline-none bg-transparent w-full lg:w-auto"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full font-bold">
          <MdLocationOn className="text-gray-500 mr-7 h-[40px] w-[40px]" />
          <select className="focus:outline-none bg-transparent w-full lg:w-auto">
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
            <option>Houston</option>
            <option>Phoenix</option>
          </select>

        </div>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full lg:w-auto font-bold">
          <IoHome className="text-gray-500 mr-7 h-[30px] w-[40px]" />
          <select className="focus:outline-none bg-transparent w-full lg:w-auto">
            <option>Penthouse</option>
            <option>Rowhouse</option>
            <option>Studio Apartment</option>
            <option>Farmhouse</option>
            <option>Villa</option>
          </select>
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg w-full p-2">
          <FaBed className="text-gray-500 mr-7 h-[30px] w-[40px]" />
          <select className="focus:outline-none bg-transparent w-full lg:w-auto text-xl">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg w-full p-2 gap-7">
          <FaBath className="text-gray-500 mr-7 h-[30px] w-[40px]" />
          <select className="focus:outline-none bg-transparent w-full lg:w-auto text-xl">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
       
      </div>
      <div className='flex justify-center items-center mt-5'>
      <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold text-2xl w-[200px]">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
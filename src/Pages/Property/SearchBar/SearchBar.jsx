import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSearchLocation } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineHome, AiOutlineCalendar } from 'react-icons/ai';

const SearchBar = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease',
        // Add more options as needed
    });
}, []);

  return (
    <div className="flex items-center justify-center my-10 " data-aos="fade-up">
      <div className="flex flex-col lg:flex-row bg-white p-5 rounded-lg shadow-lg space-y-4 lg:space-y-0 lg:space-x-4 w-full max-w-6xl ">
        <div className="flex items-center border border-gray-300 rounded-lg  w-full  p-2">
          <FaSearchLocation className="text-gray-500 mr-2 " />
          <input
            type="text"
            placeholder="Where would you like to go!"
            className="focus:outline-none w-full "
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full ">
          <MdLocationOn className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Location"
            className="focus:outline-none w-full"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full lg:w-auto">
          <AiOutlineHome className="text-gray-500 mr-2" />
          <select className="focus:outline-none bg-transparent w-full lg:w-auto">
            <option>Categories</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
          </select>
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full lg:w-auto">
          <AiOutlineCalendar className="text-gray-500 " />
          <input
            type="date"
            className="focus:outline-none w-full lg:w-full"
          />
        </div>
        <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold w-full lg:w-auto">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

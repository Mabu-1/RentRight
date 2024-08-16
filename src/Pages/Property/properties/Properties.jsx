import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loading from '../../../Loading/Loading';
import Card from "./Card";
import useProperty from "../../../hooks/useProperty";
import { RiHomeSmileFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Properties = () => {
    const { count } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = Array.from({ length: numberOfPages }, (_, i) => i);

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [condition, setCondition] = useState('');
    const [filteredProperties, setFilteredProperties] = useState([]);

    const { data, isLoading, isError, error } = useProperty();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    useEffect(() => {
        if (data && Array.isArray(data)) {
            const filtered = data.filter(p => p.condition !== "Sold")
                .filter(property => (
                    (!minPrice || property.price >= parseFloat(minPrice)) &&
                    (!maxPrice || property.price <= parseFloat(maxPrice)) &&
                    (!location || property.city === location) &&
                    (!propertyType || property.type === propertyType) &&
                    (!condition || property.condition === condition)
                ));
            
            setFilteredProperties(filtered);
        }
    }, [data, minPrice, maxPrice, location, propertyType, condition]);

    // Scroll to top when the page changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const handleSearch = () => {
        setCurrentPage(0); // Reset to first page when searching
    };

    const handleItemsPerPage = e => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(0); // Reset to first page when items per page change
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < numberOfPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div className="text-red-500 text-center">Error: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div className="text-center text-gray-500">No Properties found.</div>;
    }

    // Paginated data
    const paginatedProperties = filteredProperties.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <div className="my-[100px]">
            <div className="my-[100px]" data-aos="fade-up">
                {/* Search Bar */}
                <div className="my-[20px] flex flex-col lg:flex-row bg-white p-5 rounded-lg shadow-lg space-y-4 lg:space-y-0 lg:space-x-4 w-full font-bold">
                    <div className="flex items-center border border-gray-300 rounded-lg p-2">
                        <FaDollarSign className="text-gray-500 mr-1 h-[30px] w-[20px]" />
                        <input
                            type="number"
                            placeholder="Min Price"
                            className="focus:outline-none bg-transparent w-1/2 lg:w-auto"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <span className="text-gray-500 mx-2">-</span>
                        <FaDollarSign className="text-gray-500 mr-1 h-[30px] w-[40px]" />
                        <input
                            type="number"
                            placeholder="Max Price"
                            className="focus:outline-none bg-transparent w-full lg:w-auto"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-lg  w-full font-bold">
                        <MdLocationOn className="text-gray-500 h-[40px] w-[20px]" />
                        <select
                            className="focus:outline-none bg-transparent w-full lg:w-auto"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">Select Location</option>
                            <option>New York</option>
                            <option>Los Angeles</option>
                            <option>Chicago</option>
                            <option>Houston</option>
                            <option>Phoenix</option>
                        </select>
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full lg:w-auto font-bold">
                        <IoHome className="text-gray-500 mr-1 h-[30px] w-[30px]" />
                        <select
                            className="focus:outline-none bg-transparent w-full lg:w-auto"
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                        >
                            <option value="">Select Property Type</option>
                            <option>Penthouse</option>
                            <option>Rowhouse</option>
                            <option>Studio Apartment</option>
                            <option>Farmhouse</option>
                            <option>Villa</option>
                        </select>
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-lg w-full p-2">
                        <RiHomeSmileFill className="text-gray-500 mr-1 h-[30px] w-[20px]" />
                        <select
                            className="focus:outline-none bg-transparent w-full lg:w-auto"
                            value={condition}
                            onChange={(e) => setCondition(e.target.value)}
                        >
                            <option value="">Select Condition</option>
                            <option>Rent</option>
                            <option>Sell</option>
                        </select>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-5'>
                    <button
                        onClick={handleSearch}
                        className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold text-2xl w-[200px]"
                    >
                        SEARCH
                    </button>
                </div>
            </div>

            {/* Render Paginated Properties */}
            <div className="grid grid-cols-1 gap-8">
                {
                    paginatedProperties.map((property) => (
                        <Card key={property._id} Property={property} />
                    ))
                }
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center space-x-2 mt-8">
                <button 
                    onClick={handlePrevPage} 
                    className='bg-orange-600 hover:bg-orange-300 p-1 rounded-lg'
                    disabled={currentPage === 0}
                >
                    Prev
                </button>
                {pages.map(page => (
                    <button 
                        className={`p-2 rounded-lg ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-300'}`} 
                        onClick={() => setCurrentPage(page)} 
                        key={page}
                    >
                        {page + 1}
                    </button>

                ))}
                <button 
                    className='bg-orange-600 hover:bg-orange-300 p-1 rounded-lg' 
                    onClick={handleNextPage}
                    disabled={currentPage === pages.length - 1}
                >
                    Next
                </button>
                <select className='ml-2 p-2 rounded-lg' value={itemsPerPage} onChange={handleItemsPerPage}>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Properties;

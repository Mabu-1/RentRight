import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loading from '../../../Loading/Loading';
import Card from "./Card";
import useProperty from "../../../hooks/useProperty";
import { FaDollarSign, FaMapMarkerAlt, FaBuilding, FaExchangeAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Properties = () => {
    const { count } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [condition, setCondition] = useState('');
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [pagesToShow, setPagesToShow] = useState(2); // Default to showing 2 pages plus Prev/Next

    const { data, isLoading, isError, error } = useProperty();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    useEffect(() => {
        const updatePagesToShow = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setPagesToShow(2); // Small devices
            } else if (width < 768) {
                setPagesToShow(3); // Medium devices
            } else if (width < 1024) {
                setPagesToShow(5); // Larger devices
            } else {
                setPagesToShow(7); // Even larger devices
            }
        };

        updatePagesToShow(); // Set initial value
        window.addEventListener("resize", updatePagesToShow);
        return () => window.removeEventListener("resize", updatePagesToShow);
    }, []);

    const handleSearch = () => {
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
            setCurrentPage(0); // Reset to first page when searching
        }
    };

    useEffect(() => {
        if (data) {
            setFilteredProperties(data.filter(p => p.condition !== "Sold"));
        }
    }, [data]);

    const handleItemsPerPage = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(0); // Reset to first page when items per page change
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

    // Calculate total pages based on filtered properties
    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);


    // Function to get visible pages
    const getVisiblePages = () => {
        const visiblePages = [];

        // Add the previous button
        if (currentPage > 0) {
            visiblePages.push("Prev");
        }

        // Show pages around the current page based on pagesToShow
        const start = Math.max(currentPage - Math.floor(pagesToShow / 2), 0);
        const end = Math.min(start + pagesToShow, totalPages);

        for (let i = start; i < end; i++) {
            visiblePages.push(i);
        }

        // Add the next button
        if (currentPage < totalPages - 1) {
            visiblePages.push("Next");
        }

        return visiblePages;
    };

    const visiblePages = getVisiblePages();

    const handlePageClick = (page) => {
        if (page === "Prev") {
            setCurrentPage((prev) => Math.max(prev - 1, 0));
        } else if (page === "Next") {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
        } else {
            setCurrentPage(page);
        }
    };

    return (
        <div className="my-[20px]">

            <div className="relative  mb-8">
                <img src="https://i.ibb.co/NWg7btm/4255359.jpg" alt="" className="h-full sm:h-full md:h-[400px] lg:h-[400px] w-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col   bg-opacity-50 text-center " data-aos="fade-up">
                    <div className="mt-8 p-2">
                    <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 ">Find Your  <br/> <span className="text-red-600"> Dream</span> <span className="text-blue-600">Property</span></h1>
                    <p className=" text-md sm:text-md md:text-xl lg:text-xl font-bold">Search through our extensive list of properties.</p>
                    </div>
                </div>
                <div className="relative lg:absolute lg:bottom-[-20px] lg:left-0 w-full lg:p-4 lg:bg-opacity-90 rounded-t-lg" data-aos="fade-up">
    {/* Search Bar */}
    <div className="flex flex-col justify-center items-center lg:flex-row p-5 rounded-lg space-y-4 lg:space-y-0 lg:space-x-4 w-full font-bold">
        <div className="flex items-center border-2 border-blue-600 rounded-lg p-2 w-full  lg:w-auto space-x-2">
            <FaDollarSign className="text-green-600 h-[20px] w-[20px] sm:w-[20px] md:w-[14px]" />
            <input
                type="number"
                placeholder="Min Price"
                className="focus:outline-none bg-transparent w-full sm:w-full md:w-full lg:w-[120px] text-sm placeholder-black"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />
            <span className="text-red-500">-</span>
            <FaDollarSign className="text-green-600 h-[20px] w-[20px] sm:w-[20px] md:w-[14px]" />
            <input
                type="number"
                placeholder="Max Price"
                className="focus:outline-none bg-transparent w-full sm:w-full md:w-full lg:w-[120px] text-sm placeholder-black"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />
        </div>

        <div className="flex items-center border-2 border-blue-600 rounded-lg w-full lg:w-auto p-2">
            <FaMapMarkerAlt className="text-red-700 h-[20px] w-[14px]" />
            <select
                className="focus:outline-none bg-transparent w-full text-sm"
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

        <div className="flex items-center border-2 border-blue-600 rounded-lg px-3 py-2 w-full lg:w-auto">
            <FaBuilding className="text-yellow-700 h-[20px] w-[14px]" />
            <select
                className="focus:outline-none bg-transparent w-full text-sm"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
            >
                <option value="">Property Type</option>
                <option>Penthouse</option>
                <option>Rowhouse</option>
                <option>Studio Apartment</option>
                <option>Farmhouse</option>
                <option>Villa</option>
            </select>
        </div>

        <div className="flex items-center border-2 border-blue-600 rounded-lg w-full lg:w-auto p-2">
            <FaExchangeAlt className="text-blue-700 h-[20px] w-[14px]" />
            <select
                className="focus:outline-none bg-transparent w-full text-sm"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
            >
                <option value="">Availability</option>
                <option>Rental</option>
                <option>Sell</option>
            </select>
        </div>
    </div>

    <div className="flex justify-center items-center my-5">
        <button
            onClick={handleSearch}
            className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold text-2xl w-[200px]"
        >
            SEARCH
        </button>
    </div>
</div>

            </div>
            {/* Render Paginated Properties */}
            <div className="grid grid-cols-1 gap-8">
                {paginatedProperties.map((property) => (
                    <Card key={property._id} Property={property} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center space-x-2 mt-8">
                {visiblePages.map((page, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageClick(page)}
                        className={`p-2 min-w-[40px] rounded-lg ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-300'
                            }`}
                    >
                        {page === "Prev" || page === "Next" ? page : page + 1}
                    </button>
                ))}
                <select className="ml-2 p-2 rounded-lg" value={itemsPerPage} onChange={handleItemsPerPage}>
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

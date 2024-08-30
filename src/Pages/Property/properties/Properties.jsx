import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loading from '../../../Loading/Loading';
import Card from "./Card";
import useProperty from "../../../hooks/useProperty";
import { FaDollarSign, FaMapMarkerAlt, FaBuilding, FaExchangeAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Properties = () => {
    const { count } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [condition, setCondition] = useState('');
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [pagesToShow, setPagesToShow] = useState(2); // Default to showing 2 pages plus Prev/Next
    const [priceRange, setPriceRange] = useState([80000, 1000000]); // Updated initial price range
    const { data, isLoading, isError, error } = useProperty();

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);

    };

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
                .filter(property => {
                    const isPriceInRange = property.price >= priceRange[0] && property.price <= priceRange[1];
                    const isLocationMatch = !location || property.city === location;
                    const isPropertyTypeMatch = !propertyType || property.type === propertyType;
                    const isConditionMatch = !condition || property.condition === condition;

                    return isPriceInRange && isLocationMatch && isPropertyTypeMatch && isConditionMatch;
                });

            setFilteredProperties(filtered);
            setCurrentPage(0); // Reset to the first page when searching
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
        <div className="mb-4">
            <div className="relative mb-8">
                <img
                    src="https://i.ibb.co/BtxYTC6/NRI-Property-In-India.jpg"
                    alt=""
                    className="w-full object-cover h-[600px] sm:h-[600px] md:h-[600px] lg:h-[400px]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center  " data-aos="fade-up">
                    <div className="p-2 text-white">
                        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
                            Find Your <br /> Dream Property
                        </h1>
                        <p className="text-md sm:text-md md:text-lg font-bold">
                            Search through our extensive list of properties.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative z-10 gap-2 flex flex-col justify-center items-center bg-white lg:flex-row rounded-lg w-[250px] md:w-[500px] lg:w-[900px] font-bold mt-4 px-4 py-9">
                        <div className="flex flex-col items-center   rounded-lg  w-full lg:w-auto space-x-2 lg:mt-[-34px]  ">
                            <div className="text-center ">
                                <span className="text-md font-semibold">Price Range:<br /> ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}</span>
                            </div>
                            <Box className="w-full sm:w-full md:w-full lg:w-[200px] px-4 lg:border-r-2 border-gray-200">
                                <Slider
                                    value={priceRange}
                                    onChange={handlePriceChange}
                                    valueLabelDisplay="auto"
                                    min={80000}
                                    max={1000000}
                                    step={50000}
                                    aria-labelledby="range-slider"
                                    sx={{
                                        color: '#eb7043', // Set the active track and thumb color
                                        '& .MuiSlider-thumb': {
                                            backgroundColor: '#eb7043', // Set the thumb color
                                        },
                                        '& .MuiSlider-rail': {
                                            color: '#d1d1d1', // Set the unselected portion of the slider color
                                        },
                                        '& .MuiSlider-valueLabel': {
                                            backgroundColor: '#eb7043', // Set the value label background color
                                        },
                                    }}
                                />
                            </Box>

                        </div>
                        <div className="flex items-center   w-full lg:w-auto p-2 lg:border-r-2 border-gray-200">
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

                        <div className="flex items-center lg:border-r-2 border-gray-200 px-3 py-2 w-full lg:w-auto">
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

                        <div className="flex items-center lg:border-r-2 border-gray-200 w-full lg:w-auto p-2">
                            <FaExchangeAlt className="text-blue-700 h-[20px] w-[14px]" />
                            <select
                                className="focus:outline-none  bg-transparent w-full text-sm"
                                value={condition}
                                onChange={(e) => setCondition(e.target.value)}
                            >
                                <option value="">Availability</option>
                                <option>Rental</option>
                                <option>Sell</option>
                            </select>
                        </div>
                        <div className="flex justify-center items-center">
                            <button
                                onClick={handleSearch}
                                className="bg-[#e67850] hover:bg-[#eb7043] text-white hover:text-black px-6 py-2 rounded-lg font-semibold text-md"
                            >
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Render Paginated Properties */}
            <div>
                {paginatedProperties.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedProperties.map((property) => (
                            <Card key={property._id} Property={property} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center ">
                        <img src="https://i.postimg.cc/856bvW6m/5219070.jpg" alt="No Data Found" className="w-full md:w-1/2 lg:w-1/4" />
                        <h3 className="text-xl md:text-4xl font-bold ">No Properties found</h3>
                    </div>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center space-x-2 mt-8">
                {visiblePages.map((page, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageClick(page)}
                        className={`p-2 min-w-[40px] rounded-lg ${currentPage === page ? 'bg-[#eb7043] text-white' : 'bg-gray-300'
                            }`}
                    >
                        {page === "Prev" || page === "Next" ? page : page + 1}
                    </button>
                ))}
                <select className="ml-2 p-2 rounded-lg" value={itemsPerPage} onChange={handleItemsPerPage}>
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                </select>
            </div>
        </div>
    );
};

export default Properties;

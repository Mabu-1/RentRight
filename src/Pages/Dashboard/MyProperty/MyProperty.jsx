import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useProperty from "../../../hooks/useProperty";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../../Loading/Loading";
import Card from "./Card";

const MyProperty = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const { data, isLoading, isError, error } = useProperty();
<<<<<<< HEAD

    if (isLoading) return <Loading />;
    if (isError) return <div className="text-center text-red-600 mt-8">Error: {error.message}</div>;

    const filterData = data?.filter((p) => p.email === email);

    return (
        <div className="p-6 flex justify-center">
            {filterData.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
                    {filterData.map((property) => (
                        <Card
                            key={property._id}
                            property={property}
                            totalProperties={filterData.length}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center mt-16">
                    <FaHome className="text-red-500 text-7xl mb-4 mx-auto" />
                    <p className="text-gray-700 text-lg mb-4">You haven't purchased any property yet.</p>
                    <Link to="/property">
                        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">
=======
    

    if (isLoading) {
        return <div><Loading /></div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    const filterData = data?.filter((p) => p.email === email);
    console.log(filterData);

    return (
        <div className="border-4 rounded-lg border-red-600 m-6">
            {/* Property filterData */}
            {filterData && filterData.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8">
                    {filterData.map((property) => (
                        <Card key={property._id} property={property} />
                      
                    ))}
                </div>
            ) : (
                <div className="text-center">
                    <div className="flex justify-center items-center">
                        <FaHome className="text-red-500 text-6xl mb-4" />
                    </div>
                    <p className="text-gray-700">You haven't purchased any property yet.</p>
                    <Link to="/property">
                        <button className="my-4 bg-red-500 text-white py-2 px-4 rounded-lg">
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
                            Purchase a Property
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyProperty;

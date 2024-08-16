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
                <div className="grid grid-cols-1 gap-8">
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
                        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg">
                            Purchase a Property
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyProperty;

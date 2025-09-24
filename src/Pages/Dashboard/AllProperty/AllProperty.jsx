import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useProperty from "../../../hooks/useProperty";
import Headline from "../../../Shared/Headline/Headline";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllProperty = () => {
    const { data, isLoading, isError, error, refetch } = useProperty();
    const axiosPublic = useAxiosPublic();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/property/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div className="my-7">
            <Headline headline1="Manage All Property" subheading1="Hurry up" />
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="hidden lg:table-cell">Image</th>
                            <th>Name</th>
                            {/* Show these columns on medium and larger screens */}
                            <th className="hidden md:table-cell">Price</th>
                            <th className="hidden md:table-cell">Area (m²)</th>
                            <th className="hidden xl:table-cell">Bed</th>
                            <th className="hidden xl:table-cell">Bath</th>
                            <th className="hidden xl:table-cell">Parking<br />Spaces</th>
                            <th className="hidden xl:table-cell">Amenities</th>
                            <th className="hidden xl:table-cell">Nearby<br />Amenities</th>
                            <th className="hidden md:table-cell">Address</th>
                            <th className="hidden lg:table-cell">Year Built</th>
                            <th className="hidden md:table-cell">Condition</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td className="hidden lg:table-cell">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.imageURL} alt="Property" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                {/* Show these columns on medium and larger screens */}
                                <td className="hidden md:table-cell">{item.price}</td>
                                <td className="hidden md:table-cell">{item.area}</td>
                                <td className="hidden xl:table-cell">{item.bed}</td>
                                <td className="hidden xl:table-cell">{item.baths}</td>
                                <td className="hidden xl:table-cell">{item.parkingSpaces}</td>
                                <td className="hidden xl:table-cell">
                                    {item.amenities && Array.isArray(item.amenities) ? item.amenities.join(" ,") : "No Amenities Available"}
                                </td>
                                <td className="hidden xl:table-cell">
                                    {item.nearbyAmenities && Array.isArray(item.nearbyAmenities) ? item.nearbyAmenities.join(" ,") : "No Nearby Amenities Available"}
                                </td>
                                <td className="hidden md:table-cell">{item.address}</td>
                                <td className="hidden lg:table-cell">{item.yearBuilt}</td>
                                <td className="hidden md:table-cell">{item.condition}</td>
                                <td>
                                    <Link to={`/dashboard/updateProperty/${item._id}`}>
                                        <button className="btn btn-ghost btn-sm sm:btn-sm md:btn-lg bg-orange-500">
                                            <FaEdit className="text-white  " />
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost btn-sm sm:btn-sm md:btn-lg">
                                        <FaTrashAlt className="text-red-600" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProperty;

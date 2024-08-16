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
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui

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
            <Headline headline1="Manage All Property" subheading1="Hurry up"></Headline>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>Area (m²)</th>
                                <th>Bed</th>
                                <th>Bath</th>
                                <th>Parking<br /> Spaces</th>

                                <th>Amenities</th>
                                <th>Nearby <br />Amenities</th>
                               
                                <th>Address</th>
                               
                                <th>Year Built</th>
                                <th>Condition</th>

                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.imageURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        {item.name}
                                    </td>
                                    <td >
                                        {item.price}
                                    </td>
                                    <td >
                                        {item.area}
                                    </td>
                                    <td >
                                        {item.bed}
                                    </td>
                                    <td >
                                        {item.baths}
                                    </td>
                                    <td >
                                        {item.parkingSpaces}
                                    </td>
                                  

                                    <td>
                                        {item.amenities && Array.isArray(item.amenities) ? item.amenities.join(" ") : "No Amenities Available"}
                                    </td>
                                    <td>
                                        {item.nearbyAmenities && Array.isArray(item.nearbyAmenities) ? item.nearbyAmenities.join(" ") : "No Nearby Amenities Available"}
                                    </td>

                                    <td>
                                        {item.address}
                                    </td>
                                   
                                    <td>
                                        {item.yearBuilt}
                                    </td>
                                    <td>
                                        {item.condition}
                                    </td>


                                    <td>
                                        <Link to={`/dashboard/updateProperty/${item._id}`}>
                                            <button
                                                className="btn btn-ghost btn-lg bg-orange-500">
                                                <FaEdit className="text-white 
                                        "></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllProperty;
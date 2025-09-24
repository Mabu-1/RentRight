import { FaCheckCircle, FaEdit, FaTrashAlt } from "react-icons/fa";

import Swal from "sweetalert2";

import { Link } from "react-router-dom";

import Headline from "../../../Shared/Headline/Headline";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUser from "../../../hooks/UseUser";
import { ImCross } from "react-icons/im";
import Loading from "../../../Loading/Loading";




const AllUsers = () => {
    const { data, isLoading, isError, error ,refetch} = useUser();
     const axiosPublic =useAxiosPublic();
    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div className="text-red-500 text-center">Error: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div className="text-center text-gray-500">No Properties found.</div>;
    }

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
             
                const res = await axiosPublic.delete(`/users/${item._id}`);
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
        <div>
            <Headline headline1="Manage All Users" subheading1="Hurry up"></Headline>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th  className="hidden md:table-cell">Image</th>
                                <th>Name</th>
                                <th  className="hidden md:table-cell">Address</th>
                                <th  className="hidden md:table-cell">Phone</th>
                                <th  className="hidden md:table-cell">Service</th>
                                <th  className="hidden md:table-cell">Property</th>
                               
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td  className="hidden md:table-cell">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td>
                                        {item.name}
                                    </td>
                                    <td  className="hidden md:table-cell">
                                        {item.address}
                                    </td>
                                    <td  className="hidden md:table-cell">
                                        {item.phone}
                                    </td>
                                    <td  className="hidden md:table-cell">
                                      {
                                        item.service ? 
                                        <>
                                        <FaCheckCircle className="text-green-600"/>
                                        </> :
                                        <>
                                        <ImCross className="text-red-600"/>
                                        </>
                                      }
                                    </td>
                                    <td  className="hidden md:table-cell">
                                      {
                                        item.buy ? 
                                        <>
                                        <FaCheckCircle className="text-green-600"/>
                                        </> :
                                        <>
                                        <ImCross className="text-red-600"/>
                                        </>
                                      }
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

export default AllUsers;
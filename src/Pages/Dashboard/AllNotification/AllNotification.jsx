import { FaEdit, FaTools, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Headline from "../../../Shared/Headline/Headline";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import usePackage from "../../../hooks/usePackage";
import Loading from "../../../Loading/Loading";
import useNotification from "../../../hooks/UseNotification";

const AllNotification = () => {
    const { data, isLoading, isError, error, refetch } = useNotification();
    const axiosPublic = useAxiosPublic();

    // Handle loading state
    if (isLoading) {
        return <div><Loading></Loading></div>;
    }

    // Handle error state
    if (isError) {
        return <div>Error: {error.message}</div>;
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
                try {
                    const res = await axiosPublic.delete(`/notification/${item._id}`);
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
                } catch (error) {
                    console.error("Error deleting item:", error);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }
            }
        });
    };

    return (
        <div>
            <Headline headline1="Manage All Services" subheading1="Hurry up"></Headline>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* Table Head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Message</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Type</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.message}</td>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                    <td>{item.type}</td>
                                   
                                   
                                    
                                    <td>
                                        <Link to={`/dashboard/updateNotification/${item._id}`}>
                                            <button className="btn btn-ghost btn-lg bg-orange-500">
                                                <FaEdit className="text-white"></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-lg"
                                        >
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllNotification;

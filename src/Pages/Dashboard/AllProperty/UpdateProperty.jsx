import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const UpdateProperty = () => {
   
    const property = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit,formState: { errors } } = useForm({
        defaultValues: property
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axiosPublic.put(`/property/${property._id}`, data);
            if (response.status === 200) {
                Swal.fire("Success!", "Property updated successfully!", "success");
    
                // Refetch the property data
                navigate(`/dashboard/updateProperty/${property._id}`);
            }
        } catch (error) {
            console.error("Error updating property:", error);
            Swal.fire("Error!", "There was a problem updating the property.", "error");
        }
    };
    

    return (
        <div className="p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
            <img
                src={property.imageURL}
                alt={property.name}
                className="w-full h-full object-cover rounded-t-lg"
            />
            <div className="p-6 bg-white rounded-b-lg">
              

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                    <div>
                        <label className="block text-gray-700">Name </label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.area && <span className="text-red-600">Name is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Description</label>
                        <input
                            type="text"
                            {...register("description", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.baths && <span className="text-red-600">Description of baths is required</span>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Area (m²)</label>
                        <input
                            type="number"
                            {...register("area", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.area && <span className="text-red-600">Area is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Baths</label>
                        <input
                            type="number"
                            {...register("baths", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.baths && <span className="text-red-600">Number of baths is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Beds</label>
                        <input
                            type="number"
                            {...register("bed", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.bed && <span className="text-red-600">Number of beds is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Parking Spaces</label>
                        <input
                            type="number"
                            {...register("parkingSpaces", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.parkingSpaces && <span className="text-red-600">Parking spaces are required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Amenities</label>
                        <input
                            type="text"
                            {...register("amenities", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.amenities && <span className="text-red-600">Amenities are required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Nearby Amenities</label>
                        <input
                            type="text"
                            {...register("nearbyAmenities", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.nearbyAmenities && <span className="text-red-600">Nearby amenities are required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Year Built</label>
                        <input
                            type="number"
                            {...register("yearBuilt", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.yearBuilt && <span className="text-red-600">Year built is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Pet Friendly</label>
                       
                            <select
                                {...register("petFriendly", { required: true })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            >
                                <option value={true} selected={true}>Yes</option>
                                <option value={false} selected={false}>No</option>
                            </select>

                       
                        {errors.petFriendly && <span className="text-red-600">Pet friendly status is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Address</label>
                        <input
                            type="text"
                            {...register("address", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.address && <span className="text-red-600">Address is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">City</label>
                        <input
                            type="text"
                            {...register("city", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.city && <span className="text-red-600">City is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Price</label>
                        <input
                            type="number"
                            {...register("price", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.price && <span className="text-red-600">Price is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Condition</label>
                        <select
                            {...register("condition", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        >
                            <option value="Rental">Rental</option>
                            <option value="Sell">Sell</option>
                            <option value="Sold">Sold</option>
                        </select>
                        {errors.condition && <span className="text-red-600">Condition is required</span>}
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-700">Owner Contact Name</label>
                        <input
                            type="text"
                            {...register("ownerContact.name", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.ownerContact?.phone && <span className="text-red-600">Owner's name is required</span>}
                    </div>
                    <div className="col-span-2">
                        <label className="block text-gray-700">Owner Contact Phone</label>
                        <input
                            type="text"
                            {...register("ownerContact.phone", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.ownerContact?.phone && <span className="text-red-600">Owner's phone is required</span>}
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-700">Owner Contact Email</label>
                        <input
                            type="email"
                            {...register("ownerContact.email", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.ownerContact?.email && <span className="text-red-600">Owner's email is required</span>}
                    </div>

                    <button
                        type="submit"
                        className="col-span-2 bg-blue-500 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
                    >
                        Update Property
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProperty;

import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateProperty = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const [amenities, setAmenities] = useState([]);
    const [nearbyAmenities, setNearbyAmenities] = useState([]);

    const handleAddAmenity = () => setAmenities([...amenities, ""]);
    const handleRemoveAmenity = (index) => setAmenities(amenities.filter((_, i) => i !== index));

    const handleAddNearbyAmenity = () => setNearbyAmenities([...nearbyAmenities, ""]);
    const handleRemoveNearbyAmenity = (index) => setNearbyAmenities(nearbyAmenities.filter((_, i) => i !== index));

    const handleAmenityChange = (index, value) => {
        const newAmenities = [...amenities];
        newAmenities[index] = value;
        setAmenities(newAmenities);
    };

    const handleNearbyAmenityChange = (index, value) => {
        const newNearbyAmenities = [...nearbyAmenities];
        newNearbyAmenities[index] = value;
        setNearbyAmenities(newNearbyAmenities);
    };

    const onSubmit = async (data) => {
        if (amenities.length === 0) {
            Swal.fire("Error!", "Please add at least one amenity.", "error");
            return;
        }

        if (nearbyAmenities.length === 0) {
            Swal.fire("Error!", "Please add at least one nearby amenity.", "error");
            return;
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Create it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const imageFile = new FormData();
                    imageFile.append('image', data.imageURL[0]);

                    const res = await axiosPublic.post(image_hosting_api, imageFile, {
                        headers: {
                            'content-type': 'multipart/form-data'
                        }
                    });

                    const imageURL = res.data.data.display_url;
                    const propertyInfo = {
                        ...data,
                        imageURL: imageURL,
                        amenities,
                        nearbyAmenities,
                        ownerContact: {
                            name: data.ownerContact.name,
                            phone: data.ownerContact.phone,
                            email: data.ownerContact.email,
                        },
                        email: "",
                    };

                    const response = await axiosPublic.post(`/property`, propertyInfo);
                    if (response.status === 200) {
                        Swal.fire("Success!", "Property created successfully!", "success");
                        reset();
                        setAmenities([]);
                        setNearbyAmenities([]);
                    }
                } catch (error) {
                    console.error("Error creating property:", error);
                    Swal.fire("Error!", "There was a problem creating the property.", "error");
                }
            }
        });
    };

    return (
        <div className="my-7 p-4 sm:p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
            <div className="text-center mb-7">
                <h1 className="text-red-600 font-bold text-3xl sm:text-5xl">Create Property</h1>
            </div>
            <div className="p-6 bg-white rounded-b-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="block mb-2 text-sm font-bold">Photo</label>
                            <input type="file" {...register("imageURL", { required: true })} className="input input-bordered text-black" />
                            {errors.imageURL && <span className="text-red-600">Photo is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="block text-gray-700">Name</label>
                            <input type="text" {...register("name", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="block text-gray-700">Description</label>
                            <input type="text" {...register("description", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                            {errors.description && <span className="text-red-600">Description is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="block text-gray-700">Address</label>
                            <input type="text" {...register("address", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                            {errors.address && <span className="text-red-600">Address is required</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="form-control">
                            <label className="block text-gray-700">Area (m²)</label>
                            <input type="number" {...register("area", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                            {errors.area && <span className="text-red-600">Area is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="block text-gray-700">Baths</label>
                            <input type="number" {...register("baths", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                            {errors.baths && <span className="text-red-600">Baths are required</span>}
                        </div>

                        <div className="form-control">
                            <label className="block text-gray-700">Beds</label>
                            <input type="number" {...register("bed", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                            {errors.bed && <span className="text-red-600">Beds are required</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="form-control">
                            <label className="block text-gray-700">Parking Spaces</label>
                            <input type="number" {...register("parkingSpaces", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                            {errors.parkingSpaces && <span className="text-red-600">Parking spaces are required</span>}
                        </div>

                        <div className="form-control">
                            <label className="block text-gray-700">Price</label>
                            <input type="number" {...register("price", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                            {errors.price && <span className="text-red-600">Price is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="block text-gray-700">Property Type</label>
                            <select {...register("type", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg">
                                <option value="House">House</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Studio">Studio</option>
                            </select>
                            {errors.type && <span className="text-red-600">Property type is required</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <label className="block text-gray-700 mb-2">Amenities</label>
                        {amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <input
                                    type="text"
                                    required={true}
                                    value={amenity}
                                    onChange={(e) => handleAmenityChange(index, e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveAmenity(index)}
                                    className="ml-2 p-3 bg-red-500 text-white rounded-lg font-bold"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddAmenity}
                            className="mt-2 p-3 bg-green-500 text-white rounded-lg font-bold"
                        >
                            Add Amenity
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <label className="block text-gray-700 mb-2">Nearby Amenities</label>
                        {nearbyAmenities.map((nearbyAmenity, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <input
                                    type="text"
                                    required={true}
                                    value={nearbyAmenity}
                                    onChange={(e) => handleNearbyAmenityChange(index, e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveNearbyAmenity(index)}
                                    className="ml-2 p-3 bg-red-500 text-white rounded-lg font-bold"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddNearbyAmenity}
                            className="mt-2 p-3 bg-green-500 text-white rounded-lg font-bold"
                        >
                            Add Nearby Amenity
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="block text-gray-700 mb-2">Owner Name</label>
                            <input
                                type="text"
                                {...register("ownerContact.name", { required: true })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            {errors.ownerContact?.name && <span className="text-red-600">Owner name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="block text-gray-700 mb-2">Owner Phone</label>
                            <input
                                type="text"
                                {...register("ownerContact.phone", { required: true })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            {errors.ownerContact?.phone && <span className="text-red-600">Owner phone is required</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="block text-gray-700 mb-2">Owner Email</label>
                            <input
                                type="text"
                                {...register("ownerContact.email", { required: true })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            {errors.ownerContact?.email && <span className="text-red-600">Owner email is required</span>}
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="mt-4 bg-red-600 text-white p-4 rounded-lg font-bold">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProperty;

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

                    // Upload image to imgbb
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
                            name: data.ownerContact.name,  // Owner's name
                            phone: data.ownerContact.phone,  // Owner's phone
                            email: data.ownerContact.email,  // Owner's email
                        },
                        email:"",
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
        <div className="my-7 p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
            <div className="text-center mb-7">
                <h1 className="text-red-600 font-bold text-5xl">Create Property</h1>
            </div>
            <div className="p-6 bg-white rounded-b-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="form-control mb-2">
                        <label className="block mb-2 text-sm font-bold">Photo URL</label>
                        <input type="file" {...register("imageURL", { required: true })} className="input input-bordered text-black" />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input type="text" {...register("name", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Description</label>
                        <input type="text" {...register("description", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                        {errors.description && <span className="text-red-600">Description is required</span>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Address</label>
                        <input type="text" {...register("address", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                        {errors.description && <span className="text-red-600">Description is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Area (m²)</label>
                        <input type="number" {...register("area", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                        {errors.area && <span className="text-red-600">Area is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Baths</label>
                        <input type="number" {...register("baths", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                        {errors.baths && <span className="text-red-600">Number of baths is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Beds</label>
                        <input type="number" {...register("bed", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                        {errors.bed && <span className="text-red-600">Number of beds is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Parking Spaces</label>
                        <input type="number" {...register("parkingSpaces", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                        {errors.parkingSpaces && <span className="text-red-600">Parking spaces are required</span>}
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-700 mb-2">Amenities</label>
                        {amenities.map((amenity, index) => (
                            <div key={index} className="flex mb-2">
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
                                    className="ml-2 p-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-700 transition duration-300"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddAmenity}
                            className="mt-2 bg-green-500 text-white p-3 rounded-lg font-bold hover:bg-green-700 transition duration-300"
                        >
                            Add Amenity
                        </button>
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-700 mb-2">Nearby Amenities</label>
                        {nearbyAmenities.map((nearbyAmenity, index) => (
                            <div key={index} className="flex mb-2">
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
                                    className="ml-2 p-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-700 transition duration-300"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddNearbyAmenity}
                            className="mt-2 bg-green-500 text-white p-3 rounded-lg font-bold hover:bg-green-700 transition duration-300"
                        >
                            Add Nearby Amenity
                        </button>
                    </div>

                    <div>
                        <label className="block text-gray-700">Year Built</label>
                        <input type="number" {...register("yearBuilt", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                        {errors.yearBuilt && <span className="text-red-600">Year built is required</span>}
                    </div>

                    <div>
                        <label className="block text-gray-700">Pet Friendly</label>
                        <select {...register("petFriendly", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                        {errors.petFriendly && <span className="text-red-600">Pet friendly status is required</span>}
                    </div>

                   
                <div>
                    <label className="block text-gray-700">City</label>
                    <select {...register("city", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg">
                
                            <option value="New York"> New York</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="Chicago">Chicago</option>
                            <option value="Houston">Houston</option>
                            <option value="Phoenix">Phoenix</option>
                    </select>
                    {errors.type && <span className="text-red-600">City is required</span>}
                </div>


                <div>
                    <label className="block text-gray-700">Price</label>
                    <input type="number" {...register("price", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
                    {errors.price && <span className="text-red-600">Price is required</span>}
                </div>

                <div>
                    <label className="block text-gray-700">Type</label>
                    <select {...register("type", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg">
                        <option value="Penthouse">Penthouse</option>
                        <option value="Rowhouse">Rowhouse</option>
                        <option value="Studio Apartment">Studio Apartment</option>
                        <option value="Farmhouse">Farmhouse</option>
                        <option value="Villa">Villa</option>
                       
                    </select>
                    {errors.type && <span className="text-red-600">Type is required</span>}
                </div>

                <div>
                        <label className="block text-gray-700">Condition</label>
                        <select {...register("condition", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg">
                            <option value="Rental">Rental</option>
                            <option value="Sell">Sell</option>
                        </select>
                        {errors.condition && <span className="text-red-600">Condition is required</span>}
                    </div>

                <div className="col-span-2">
                        <label className="block text-gray-700 mb-2">Owner Contact Information</label>
                        <div className="flex mb-2 space-x-2">
                            <input
                                type="text"
                                placeholder="Name"
                                {...register("ownerContact.name", { required: true })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                {...register("ownerContact.phone", { required: true })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("ownerContact.email", { required: true })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>
                    </div>

                  


                <button
                    type="submit"
                    className="col-span-2 mt-4 p-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-700 transition duration-300"
                >
                    Create Property
                </button>
            </form>
        </div>
    </div>
);
};

export default CreateProperty;

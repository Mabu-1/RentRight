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
  const handleAmenityChange = (index, value) => {
    const newAmenities = [...amenities];
    newAmenities[index] = value;
    setAmenities(newAmenities);
  };

  const handleAddNearbyAmenity = () => setNearbyAmenities([...nearbyAmenities, ""]);
  const handleRemoveNearbyAmenity = (index) => setNearbyAmenities(nearbyAmenities.filter((_, i) => i !== index));
  const handleNearbyAmenityChange = (index, value) => {
    const newNearby = [...nearbyAmenities];
    newNearby[index] = value;
    setNearbyAmenities(newNearby);
  };

  const onSubmit = async (data) => {
    if (!amenities.length || !nearbyAmenities.length) {
      Swal.fire("Error!", "Please add at least one amenity and one nearby amenity.", "error");
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
            headers: { 'content-type': 'multipart/form-data' }
          });

          const propertyInfo = {
            ...data,
            imageURL: res.data.data.display_url,
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
          Swal.fire("Error!", "There was a problem creating the property.", "error");
        }
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-10 my-10 bg-white rounded-2xl shadow-xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-8">Create Property</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
        {/* Photo & Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Property Photo</label>
            <input type="file" {...register("imageURL", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
            {errors.imageURL && <span className="text-red-500 text-sm">Photo is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Property Name</label>
            <input type="text" {...register("name", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>
        </div>

        {/* Description & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Description</label>
            <input type="text" {...register("description", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
            {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Address</label>
            <input type="text" {...register("address", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
            {errors.address && <span className="text-red-500 text-sm">Address is required</span>}
          </div>
        </div>

        {/* Area, Baths, Beds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold mb-2">Area (m²)</label>
            <input type="number" {...register("area", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
            {errors.area && <span className="text-red-500 text-sm">Area is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Baths</label>
            <input type="number" {...register("baths", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
            {errors.baths && <span className="text-red-500 text-sm">Baths are required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Beds</label>
            <input type="number" {...register("bed", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
            {errors.bed && <span className="text-red-500 text-sm">Beds are required</span>}
          </div>
        </div>

        {/* Parking, Price, Type */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold mb-2">Parking Spaces</label>
            <input type="number" {...register("parkingSpaces", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
            {errors.parkingSpaces && <span className="text-red-500 text-sm">Parking spaces required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Price</label>
            <input type="number" {...register("price", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
            {errors.price && <span className="text-red-500 text-sm">Price is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Property Type</label>
            <select {...register("type", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg">
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Studio">Studio</option>
            </select>
            {errors.type && <span className="text-red-500 text-sm">Property type required</span>}
          </div>
        </div>

        {/* Amenities */}
        <div>
          <label className="block font-semibold mb-2">Amenities</label>
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={amenity}
                onChange={(e) => handleAmenityChange(index, e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-lg"
              />
              <button type="button" onClick={() => handleRemoveAmenity(index)} className="p-3 bg-red-500 text-white rounded-lg font-semibold">Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddAmenity} className="mt-2 p-3 bg-green-500 text-white rounded-lg font-semibold">Add Amenity</button>
        </div>

        {/* Nearby Amenities */}
        <div>
          <label className="block font-semibold mb-2">Nearby Amenities</label>
          {nearbyAmenities.map((nearby, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={nearby}
                onChange={(e) => handleNearbyAmenityChange(index, e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-lg"
              />
              <button type="button" onClick={() => handleRemoveNearbyAmenity(index)} className="p-3 bg-red-500 text-white rounded-lg font-semibold">Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddNearbyAmenity} className="mt-2 p-3 bg-green-500 text-white rounded-lg font-semibold">Add Nearby Amenity</button>
        </div>

        {/* Owner Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Owner Name</label>
            <input type="text" {...register("ownerContact.name", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
            {errors.ownerContact?.name && <span className="text-red-500 text-sm">Owner name required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Owner Phone</label>
            <input type="text" {...register("ownerContact.phone", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
            {errors.ownerContact?.phone && <span className="text-red-500 text-sm">Owner phone required</span>}
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-2">Owner Email</label>
          <input type="text" {...register("ownerContact.email", { required: true })} className="w-full p-3 border border-gray-300 rounded-lg" />
          {errors.ownerContact?.email && <span className="text-red-500 text-sm">Owner email required</span>}
        </div>

        {/* Submit */}
        <div className="text-center mt-4">
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all">Create Property</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProperty;

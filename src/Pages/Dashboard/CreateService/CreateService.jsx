import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const CreateService = () => {
    const { register, handleSubmit, reset, control, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { fields, append, remove } = useFieldArray({ control, name: "benefits" });

    const onSubmit = async (data) => {
        if (!data.benefits || data.benefits.length === 0 || data.benefits.some(b => b.trim() === "")) {
            Swal.fire("Error!", "Please add at least one valid benefit.", "error");
            return;
        }
        try {
            const serviceInfo = { name: data.name, price: data.price, benefits: data.benefits, bought: 0 };
            const response = await axiosPublic.post(`/package`, serviceInfo);
            if (response.status === 200) {
                Swal.fire("Success!", "Service created successfully!", "success");
                reset();
                fields.forEach((_, index) => remove(index));
            }
        } catch (error) {
            console.error("Error creating service:", error);
            Swal.fire("Error!", "There was a problem creating the service.", "error");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 sm:p-10 my-10 bg-white rounded-2xl shadow-xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-8">Create Service</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
                {/* Service Name & Price */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="mabu-text3 block text-gray-700 font-semibold mb-2">Service Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Service name is required" })}
                            className="mabu-text2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                        {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
                    </div>
                    <div>
                        <label className="mabu-text3  block text-gray-700 font-semibold mb-2">Price</label>
                        <input
                            type="number"
                            {...register("price", { required: "Price is required" })}
                            className="mabu-text2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                        {errors.price && <span className="text-red-600 text-sm">{errors.price.message}</span>}
                    </div>
                </div>

                {/* Benefits */}
                <div>
                    <label className="mabu-text3 block text-gray-700 font-semibold mb-2">Benefits</label>
                    {fields.map((field, index) => (
                        <div key={field.id} className="flex items-center mb-2 gap-2">
                            <input
                                type="text"
                                {...register(`benefits.${index}`, { 
                                    required: "Each benefit is required",
                                    validate: value => value.trim() !== "" || "Benefit cannot be empty"
                                })}
                                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => remove(index)}
                                className="p-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => append('')}
                        className="mt-2 p-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
                    >
                        Add Benefit
                    </button>
                    {errors.benefits && <span className="text-red-600 text-sm block mt-1">Please add at least one benefit.</span>}
                </div>

                {/* Submit Button */}
                <div className="text-center mt-4">
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all"
                    >
                        Create Service
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateService;

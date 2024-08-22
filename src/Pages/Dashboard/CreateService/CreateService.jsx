import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const CreateService = () => {
    const { register, handleSubmit, reset, control, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "benefits"
    });

    const onSubmit = async (data) => {
        if (!data.benefits || data.benefits.length === 0 || data.benefits.some(benefit => benefit.trim() === "")) {
            Swal.fire("Error!", "Please add at least one valid benefit.", "error");
            return;
        }
        try {
            const serviceInfo = {
                name: data.name,
                price: data.price,
                benefits: data.benefits,
                bought: 0
            };

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
        <div className="my-7 p-4 sm:p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
            <div className="text-center mb-7">
                <h1 className="text-red-600 font-bold text-3xl sm:text-5xl">Create Service</h1>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-2">Service Name</label>
                            <input
                                type="text"
                                {...register("name", { required: "Service name is required" })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Price</label>
                            <input
                                type="number"
                                {...register("price", { required: "Price is required" })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            {errors.price && <span className="text-red-600">{errors.price.message}</span>}
                        </div>
                    </div>

                    <div className="col-span-1 sm:col-span-2">
                        <label className="block text-gray-700 mb-2">Benefits</label>
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex items-center mb-2">
                                <input
                                    type="text"
                                    {...register(`benefits.${index}`, { 
                                        required: "Each benefit is required",
                                        validate: value => value.trim() !== "" || "Benefit cannot be empty"
                                    })}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="ml-2 p-2 bg-red-500 text-white rounded-lg"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        {errors.benefits && <span className="text-red-600">Please add at least one benefit.</span>}
                        <button
                            type="button"
                            onClick={() => append('')}
                            className="mt-2 p-2 bg-green-500 text-white rounded-lg"
                        >
                            Add Benefit
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="col-span-1 sm:col-span-2 bg-red-500 text-white p-3 rounded-lg font-bold hover:bg-red-700 transition duration-300"
                    >
                        Create Service
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateService;

import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const UpdateService = () => {
    const service = useLoaderData();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, control,  formState: { errors } } = useForm({
        defaultValues: {
            ...service,
            benefits: service.benefits || [],  // Ensure benefits is an array
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "benefits"
    });

    const onSubmit = async (data) => {
        try {
            const response = await axiosPublic.put(`/package/${service._id}`, data);
            if (response.status === 200) {
                Swal.fire("Success!", "Service updated successfully!", "success");
                navigate(`/dashboard/updateService/${service._id}`);
            }
        } catch (error) {
            console.error("Error updating service:", error);
            Swal.fire("Error!", "There was a problem updating the service.", "error");
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
            <div className="p-6 bg-white rounded-lg">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">{service.name}</h1>
                    <p className="text-gray-600 text-xl mb-4">{service.description}</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <span className="text-red-600">Name is required</span>}
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

                    <div className="col-span-2">
                        <label className="block text-gray-700">Benefits</label>
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex items-center mb-2">
                                <input
                                    type="text"
                                    {...register(`benefits.${index}`, { required: true })}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="ml-2 bg-red-500 text-white p-2 rounded-lg"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => append('')}
                            className="mt-2 bg-green-500 text-white p-2 rounded-lg"
                        >
                            Add Benefit
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="col-span-2 bg-blue-500 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
                    >
                        Update Service
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateService;

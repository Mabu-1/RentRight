import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import registers from "../../assets/registers.json"
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { createUser ,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                    })
                    .catch(error => {
                        // Handle the error with Swal.fire
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong while adding user to the database!",
                        });
                        console.error("Database insertion error:", error);
                    });

                reset();
                Swal.fire({
                    position: 'top-centre',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                // Handle the error with Swal.fire
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong while adding user to the database!",
                });
                console.error("Database insertion error:", error);
            });


    }

    return (
        <div className="flex flex-col md:flex-row">
            <Helmet>
                <title>RentRight | SignUp</title>
            </Helmet>
            <div className="md:w-1/2 lg:w-1/2 hidden md:flex lottie flex-1 mx-20">
                <Lottie animationData={registers} loop={false}></Lottie>
            </div>

            <div className="md:w-1/2 lg:w-1/2 p-6 mt-[50px]">
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-[380px] mx-auto p-6 bg-[rgb(19,16,54)] border-neutral text-white rounded-lg shadow-lg relative">
                    <div className="form-control mb-2 border-neutral">
                        <label className="block mb-2 text-sm font-bold">Name</label>
                        <input type="text" {...register("name", { required: true })} placeholder="Name" name="name" className="input input-bordered text-black" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control mb-2 border-neutral">
                        <label className="block mb-2 text-sm font-bold">Photo URL</label>
                        <input type="url" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered text-black" />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                    </div>
                    <div className="form-control mb-2 border-neutral">
                        <label className="block mb-2 text-sm font-bold">Email</label>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered text-black" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control mb-4 border-neutral relative">
                        <label className="block mb-2 text-sm font-bold">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })}
                            placeholder="Password"
                            className="input input-bordered text-black"
                        />
                        <span className="absolute top-[40px] right-2 text-black cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase, one lowercase, one number, and one special character.</p>}
                        <label className="block mb-2 text-sm font-bold">
                            <Link to="/forgot-password" className="label-text-alt link link-hover text-white">Forgot password?</Link>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="my-1 p-3 w-full flex justify-center text-center border-neutral-50 rounded-lg font-bold bg-yellow-500 hover:bg-[#3d07ff]"
                    >
                        Sign Up
                    </button>

                    <p className="text-center mt-4">Already have an account? Please <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;

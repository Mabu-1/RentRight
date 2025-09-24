import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/loginAnimation.json";
import { Helmet } from "react-helmet-async";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useUser from "../../hooks/UseUser";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
    const [captchaValue, setCaptchaValue] = useState('');
<<<<<<< HEAD
    const [captchaValid, setCaptchaValid] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const axiosPublic = useAxiosPublic();
    const { signIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { data } = useUser();

=======

    const [captchaValid, setCaptchaValid] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { signIn, googleLogin,handleUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {data} = useUser();
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleValidateCaptcha = () => {
<<<<<<< HEAD
        setCaptchaValid(validateCaptcha(captchaValue));
=======
        if (validateCaptcha(captchaValue)) {
            setCaptchaValid(true);
        } else {
            setCaptchaValid(false);
        }
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
    };

    const handleStandardLogin = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        signIn(email, password)
<<<<<<< HEAD
            .then(() => {
=======
            .then(result => {
                
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Logged in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                setLoginError(error.message);
                Swal.fire({
                    icon: "error",
<<<<<<< HEAD
                    title: "Login Failed",
=======
                    title: "Oops...",
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
                    text: error.message,
                });
            });
    };

<<<<<<< HEAD
    const handleGoogleSignIn = async () => {
        try {
            const result = await googleLogin();
            const loggedUser = result.user;
            const { displayName, email, photoURL } = loggedUser;

            const userExists = data.find(u => u.email === email);

            if (!userExists) {
                const userInfo = {
                    name: displayName,
                    email,
                    image: photoURL,
=======
    const handleGoogleSignIn = async (googleLogin) => {
        try {
            // Trigger Google login
            const result = await googleLogin();
            const loggedUser = result.user;
            
            // Extract user information from the logged-in user
            const { displayName, email, photoURL } = loggedUser;
            
            // Check if the user already exists in the data
            const userExists = data.find((u) => u.email === email);
    
            if (!userExists) {
                // Save user information to the database
                const userInfo = {
                    name: displayName,    // Name from Google
                    email: email,         // Email from Google
                    image: photoURL,      // Photo URL from Google
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
                    buy: 0,
                    service: "",
                    serviceDate: "",
                    servicePaid: "no",
                };
<<<<<<< HEAD

                await axiosPublic.post('/users', userInfo);
            }

            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Logged in Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from, { replace: true });
        } catch (error) {
            setLoginError(error.message);
            Swal.fire({
                icon: "error",
                title: "Google Sign-In Failed",
                text: error.message,
            });
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <Helmet>
                <title>RentRight | Login</title>
            </Helmet>

            {/* Login Form */}
            <div className="md:w-1/2 flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-[rgb(19,16,54)] text-white rounded-lg shadow-lg p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-center mb-4">Login to RentRight</h2>

                    {/* Email */}
                    <div className="form-control">
                        <label className="block mb-1 font-bold">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full text-black"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="form-control relative">
                        <label className="block mb-1 font-bold">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full text-black pr-10"
                            required
                        />
                        <span
                            className="absolute top-3 right-3 cursor-pointer text-black"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {loginError && <p className="text-red-500 text-sm">{loginError}</p>}

                    {/* Captcha */}
                    <div className="form-control space-y-2">
                        <LoadCanvasTemplate />
                        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                            <input
                                type="text"
                                placeholder="Type the captcha above"
                                value={captchaValue}
                                onChange={(e) => setCaptchaValue(e.target.value)}
                                className="input input-bordered text-black flex-1"
                            />
                            <button
                                onClick={handleValidateCaptcha}
                                className="bg-[#d2873c] hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg"
=======
    
                await axiosPublic.post('/users', userInfo)
                    .then(() => {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Logged in Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from, { replace: true });
                    })
                    .catch(error => {
                        const errorMessage = error.message;
                        setLoginError(errorMessage);
                        Swal.fire({
                            icon: "error",
                            title: "Google Sign-In Failed",
                            text: errorMessage,
                        });
                    });
            } else {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Logged in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            }
        } catch (error) {
            const errorMessage = error.message;
            setLoginError(errorMessage);
            Swal.fire({
                icon: "error",
                title: "Google Sign-In Failed",
                text: errorMessage,
            });
        }
    };
    
    
    return (
        <div className="flex flex-col md:flex-row">
            <Helmet>
                <title>RentRight | Login</title>
            </Helmet>
            <div className="md:w-1/2 lg:w-1/2 p-6">
                <div className="max-w-[480px] mx-auto p-6 bg-[rgb(19,16,54)] border-neutral text-white rounded-lg shadow-lg">
                    <div className="form-control mb-4 border-neutral">
                        <label className="block mb-2 text-sm font-bold">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="input input-bordered text-black"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="block mb-2 text-sm font-bold">Password</label>
                        <div className="mb-4 relative">
                            <input
                                id="password"
                                className="input input-bordered w-full text-black"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                required
                            />
                            <span
                                className="absolute top-3 right-2 text-black cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {loginError && <p className="text-red-700">{loginError}</p>}
                    </div>
                    <div className="my-4 form-control">
                        <label className="label">
                            <LoadCanvasTemplate className="" />
                        </label>
                        <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center">
                            <input
                                type="text"
                                placeholder="Type the captcha above"
                                className="input input-bordered text-black w-full"
                                value={captchaValue}
                                onChange={(e) => setCaptchaValue(e.target.value)}
                            />
                            <button
                                onClick={handleValidateCaptcha}
                                className="p-[9px] border rounded-lg text-center ml-1 sm:ml-1 md:ml-7 mt-2 sm:mt-2 md:mt-0 w-full bg-[#d2873c] hover:bg-orange-600 text-xl font-bold cursor-pointer"
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
                            >
                                Validate
                            </button>
                        </div>
                    </div>
<<<<<<< HEAD

                    {/* Submit */}
                    <button
                        onClick={handleStandardLogin}
                        disabled={!captchaValid}
                        className={`w-full py-3 font-bold rounded-lg text-white ${!captchaValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#af5b3c] hover:bg-[#eb7043]'}`}
                    >
                        Sign In
                    </button>

                    <p className="text-center font-bold my-2">OR</p>

                    {/* Google Login */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full py-2 flex justify-center items-center gap-2 font-bold text-white rounded-lg bg-[#d88b6e] hover:bg-[#ff7847]"
                    >
                        <FcGoogle size={24} /> Sign in with Google
                    </button>

                    {/* Signup Link */}
                    <p className="text-center mt-4">
                        Don't have an account? <Link className="text-[#eb7043] font-bold" to="/signup">Register</Link>
                    </p>
                </div>
            </div>

            {/* Animation Section */}
            <div className="md:w-1/2 hidden md:flex items-center justify-center p-6">
                <Lottie animationData={loginAnimation} loop={true} className="w-full max-w-lg" />
=======
                    <button
                        onClick={handleStandardLogin}
                        disabled={!captchaValid}
                        className={`my-2 p-3 w-full flex justify-center text-center border-neutral-50 rounded-lg font-bold ${!captchaValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#af5b3c] hover:bg-[#eb7043]'}`}
                    >
                        Sign In
                    </button>
                    <p className="text-xl text-center font-bold">Or</p>
                    <button
                        onClick={() => handleGoogleSignIn(googleLogin)} 
                        
                        className={`my-2 p-1 w-full flex justify-center text-center border-neutral-50 rounded-lg font-bold  bg-[#d88b6e] hover:bg-[#ff7847]`}
                    >
                        <FcGoogle className="text-4xl" />
                    </button>
                    <p className="text-center mt-4">
                        Do not have an account? Please <Link className="text-[#eb7043] font-bold" to='/signup'>Register</Link>
                    </p>
                </div>
            </div>
            <div className="md:w-1/2 lg:w-1/2 hidden md:flex lottie flex-1 mx-20">
                <Lottie animationData={loginAnimation} loop={false}></Lottie>
>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
            </div>
        </div>
    );
};

export default Login;

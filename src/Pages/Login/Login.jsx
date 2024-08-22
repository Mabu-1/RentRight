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

    const [captchaValid, setCaptchaValid] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { signIn, googleLogin,handleUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {data} = useUser();
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleValidateCaptcha = () => {
        if (validateCaptcha(captchaValue)) {
            setCaptchaValid(true);
        } else {
            setCaptchaValid(false);
        }
    };

    const handleStandardLogin = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        signIn(email, password)
            .then(result => {
                
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
                    title: "Oops...",
                    text: error.message,
                });
            });
    };

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
                    buy: 0,
                    service: "",
                    serviceDate: "",
                    servicePaid: "no",
                };
    
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
                            >
                                Validate
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={handleStandardLogin}
                        disabled={!captchaValid}
                        className={`my-2 p-3 w-full flex justify-center text-center border-neutral-50 rounded-lg font-bold ${!captchaValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-[#3d07ff]'}`}
                    >
                        Sign In
                    </button>
                    <p className="text-xl text-center font-bold">Or</p>
                    <button
                        onClick={() => handleGoogleSignIn(googleLogin)} 
                        disabled={!captchaValid}
                        className={`my-2 p-1 w-full flex justify-center text-center border-neutral-50 rounded-lg font-bold ${!captchaValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#dd1d77] hover:bg-[#9832a5]'}`}
                    >
                        <FcGoogle className="text-4xl" />
                    </button>
                    <p className="text-center mt-4">
                        Do not have an account? Please <Link className="text-blue-600 font-bold" to='/signup'>Register</Link>
                    </p>
                </div>
            </div>
            <div className="md:w-1/2 lg:w-1/2 hidden md:flex lottie flex-1 mx-20">
                <Lottie animationData={loginAnimation} loop={false}></Lottie>
            </div>
        </div>
    );
};

export default Login;

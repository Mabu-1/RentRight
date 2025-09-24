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
    const { signIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { data } = useUser();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleValidateCaptcha = () => {
        setCaptchaValid(validateCaptcha(captchaValue));
    };

    const handleStandardLogin = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        signIn(email, password)
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
                setLoginError(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message,
                });
            });
    };

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
                    buy: 0,
                    service: "",
                    serviceDate: "",
                    servicePaid: "no",
                };

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
                            >
                                Validate
                            </button>
                        </div>
                    </div>

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
            </div>
        </div>
    );
};

export default Login;

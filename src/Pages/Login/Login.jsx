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


const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
            .then(result => {
                const user = result.user;
                
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
                    text: "Something went wrong!",
                });
            });
    };

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };


    return (
        <div className="flex flex-col md:flex-row" >
            <Helmet>
                <title>RentRight | Login</title>
            </Helmet>
            <div className="md:w-1/2 lg:w-1/2 p-6" s>
                <form onSubmit={handleLogin} className="max-w-[480px] mx-auto p-6 bg-[rgb(19,16,54)] border-neutral text-white rounded-lg shadow-lg">
                    <div className="form-control mb-4 border-neutral">
                        <label className="block mb-2 text-sm font-bold">Email</label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="block mb-2 text-sm font-bold">Password</label>
                        <div className="mb-4 relative">
                            <input className="input input-bordered w-full text-black"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                required />
                            <span className="absolute top-3 right-2 text-black cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {loginError && <p className="text-red-700">{loginError}</p>}
                    </div>
                    <div className="my-4 form-control">
                        <label className="label">
                            <LoadCanvasTemplate />
                        </label>
                        <div className="flex">
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the captcha above" className="input input-bordered text-black" />
                            <div className="p-[9px] border rounded-lg text-center ml-7 w-1/3 bg-[#d2873c] hover:bg-orange-600 text-xl font-bold cursor-pointer" >
                                Validate
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={disabled}
                        className={`my-2 p-3 w-full flex justify-center text-center border-neutral-50 rounded-lg font-bold ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-[#3d07ff]'}`}
                    >
                        Sign In
                    </button>
                    <p className="text-xl text-center font-bold">Or</p>
                    <button
                        disabled={disabled}
                        className={`my-2 p-1 w-full flex justify-center text-center border-neutral-50 rounded-lg font-bold ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#dd1d77] hover:bg-[#9832a5]'}`}
                    >
                        <FcGoogle className="text-4xl" />
                    </button>
                    <p className="text-center mt-4">Do not have an account? Please <Link className="text-blue-600 font-bold" to='/signup'>Register</Link></p>
                </form>
            </div>
            <div className="md:w-1/2 lg:w-1/2 hidden md:flex lottie flex-1 mx-20">
                <Lottie animationData={loginAnimation} loop={false}></Lottie>
            </div>
        </div>
    );
};

export default Login;

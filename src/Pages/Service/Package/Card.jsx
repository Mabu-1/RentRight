












import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../Providers/AuthProvider";
import useUser from "../../../hooks/UseUser";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Card = ({ pack }) => {

    const { _id, name, price, benefits,bought } = pack;
   const navigate=useNavigate();
   const location = useLocation();
    const { data } = useUser();
 
    const { user } = useContext(AuthContext);
   

    const handleBook = async () => {

     
        const email = user?.email;
        const serviceData = data.find((u) => u.email === email);
        const userServiceId = serviceData?.service;
     
        if (user && user.email) {
            // TODO: Add functionality for logged-in 
            if (userServiceId === _id) {
                Swal.fire({
                    position: "top-center",
                    icon: "warning",
                    title: "Your have already bought this service",
                    showConfirmButton: false,
                    timer: 1000
                  });
                   
                   return;
            }
            else {

                return navigate(`/packageBuy/${_id}`);
                
                }
            }
        
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to buy your home",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Send the user to the login page
                    navigate('/login', { state: { from: location } });
                }
            });
        }
        };
       
    
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="border-1 bg-gray-100 rounded-lg shadow-lg hover:translate-y-3 transform transition-transform duration-300 flex flex-col overflow-hidden" data-aos="fade-up" data-aos-delay={50}>
            <div className="flex justify-center my-8">
                <p className="text-yellow-400">{name}</p>
            </div>
            <div className="flex justify-center text-white font-extrabold text-6xl mb-4 py-8 bg-yellow-400">
                <p className="text-orange-700">${price}/-</p>
            </div>
            <div className="flex-grow flex flex-col justify-center text-center">
                {benefits.map((benefit, idx) => (
                    <div key={idx}>
                        <p className="font-semibold">{benefit}</p>
                        <hr className="my-2 border-t-2 border-gray-300 mx-6 p-2" />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mb-4">
                <button className="bg-[#f705b7] hover:bg-[#9205f7] p-2 flex justify-center text-center border rounded-lg font-bold" onClick={handleBook}>
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default Card;



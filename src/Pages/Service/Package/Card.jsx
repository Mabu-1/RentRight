<<<<<<< HEAD
=======













>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
<<<<<<< HEAD
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../Providers/AuthProvider";
import useUser from "../../../hooks/UseUser";

const Card = ({ pack }) => {
  const { _id, name, price, benefits } = pack;
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useUser();
  const { user } = useContext(AuthContext);

  const handleBook = async () => {
    const email = user?.email;
    const serviceData = data.find((u) => u.email === email);
    const userServiceId = serviceData?.service;

    if (user && user.email) {
      if (userServiceId === _id) {
        Swal.fire({
          position: "top-center",
          icon: "warning",
          title: "You have already bought this service",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      } else {
        return navigate(`/packageBuy/${_id}`);
      }
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to buy your home",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#eb7043",
        cancelButtonColor: "#999",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="border bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 flex flex-col overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={50}
    >
      {/* Title */}
      <div className="flex justify-center mt-6">
        <p className="text-xl font-semibold text-[#e96738]">{name}</p>
      </div>

      {/* Price */}
      <div className="flex justify-center text-white font-extrabold text-5xl mb-4 py-8 bg-gradient-to-r from-[#ff8f67] to-[#eb7043]">
        <p>${price}</p>
      </div>

      {/* Benefits */}
      <div className="flex-grow flex flex-col justify-center text-center px-6">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="mb-3">
            <p className="font-medium text-gray-700">{benefit}</p>
            {idx !== benefits.length - 1 && (
              <hr className="my-3 border-t border-gray-200" />
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={handleBook}
          className="bg-[#ff8f67] hover:bg-[#eb7043] text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Card;
=======
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
                <p className="text-[#e96738]">{name}</p>
            </div>
        <div className="flex justify-center text-white font-extrabold text-6xl mb-4 py-8 bg-[#e57a54]">
                <p className="">${price}/-</p>
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
                <button className="bg-[#ff8f67] hover:bg-[#eb7043] hover:text-white p-2 flex justify-center text-center border rounded-lg font-bold" onClick={handleBook}>
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default Card;


>>>>>>> 864ad4bea09fd6da8e4a510a02760f45e28ecb24

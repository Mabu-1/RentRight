import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
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
  const [showPaymentForm, setShowPaymentForm] = useState(false);

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
        // Pass the package data and payment form state through navigation
        return navigate(`/packageBuy/${_id}`, { 
          state: { 
            packageData: pack,
            showPaymentForm: showPaymentForm 
          } 
        });
      }
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to buy your package",
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
      className="border bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 flex flex-col overflow-hidden h-full"
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
            <p className="mabu-text3 font-medium text-gray-700">{benefit}</p>
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
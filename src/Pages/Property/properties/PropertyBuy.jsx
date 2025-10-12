import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const PropertyBuy = () => {
  const property = useLoaderData();
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Complete Your Purchase
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Secure your dream property with our simple checkout process
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Property Information */}
            <div className="w-full lg:w-2/5 p-6 lg:p-8 bg-gradient-to-br from-[#EB7249] to-orange-600 text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Property Details</h2>
              <div className="relative h-48 sm:h-56 lg:h-64 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={property.imageURL} 
                  alt={property.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {property.condition}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-2">{property.name}</h3>
              <p className="mb-4 flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base">{property.address}</span>
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-xs sm:text-sm opacity-80">Bedrooms</p>
                  <p className="text-lg sm:text-xl font-bold">{property.bed}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-xs sm:text-sm opacity-80">Bathrooms</p>
                  <p className="text-lg sm:text-xl font-bold">{property.baths}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-xs sm:text-sm opacity-80">Area</p>
                  <p className="text-lg sm:text-xl font-bold">{property.area} m²</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-xs sm:text-sm opacity-80">Parking</p>
                  <p className="text-lg sm:text-xl font-bold">{property.parkingSpaces}</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm opacity-80 mb-1">Total Price</p>
                <p className="text-2xl sm:text-3xl font-bold">${property.price.toLocaleString()}</p>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="w-full lg:w-3/5 p-6 lg:p-8">
              <Elements stripe={stripePromise}>
                <CheckoutForm 
                  property={property} 
                  showPaymentForm={showPaymentForm} 
                  setShowPaymentForm={setShowPaymentForm}
                />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBuy;
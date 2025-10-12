import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData, useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

const PackageBuy = () => {
  const packages = useLoaderData();
  const location = useLocation();
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  
  // Initialize state with either the passed state or default to false
  const [showPaymentForm, setShowPaymentForm] = useState(
    location.state?.showPaymentForm || false
  );

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mabu-text2">
            Complete Your Purchase
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600 mabu-text2">
            Secure your service package with our simple checkout process
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Package Information */}
            <div className="w-full lg:w-2/5 p-6 lg:p-8 bg-gradient-to-br from-[#ff8f67] to-[#eb7043] text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Package Details</h2>
              
              <div className="mb-6 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm p-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center">{packages.name}</h3>
                <div className="text-center mb-6">
                  <p className="text-4xl sm:text-5xl font-extrabold">${packages.price}</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <h4 className="text-lg font-semibold mb-3">Package Benefits:</h4>
                <ul className="space-y-2">
                  {packages.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm opacity-80 mb-1">Total Price</p>
                <p className="text-2xl sm:text-3xl font-bold">${packages.price.toLocaleString()}</p>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="w-full lg:w-3/5 p-6 lg:p-8">
              <Elements stripe={stripePromise}>
                <CheckoutForm 
                  packages={packages} 
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

export default PackageBuy;
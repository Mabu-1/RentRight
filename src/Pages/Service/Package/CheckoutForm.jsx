import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import usePackage from "../../../hooks/usePackage";

const CheckoutForm = ({ packages, showPaymentForm: propShowPaymentForm, setShowPaymentForm: propSetShowPaymentForm }) => {
  // Use internal state if props are not provided
  const [internalShowPaymentForm, setInternalShowPaymentForm] = useState(false);
  const showPaymentForm = propShowPaymentForm !== undefined ? propShowPaymentForm : internalShowPaymentForm;
  const setShowPaymentForm = propSetShowPaymentForm !== undefined ? propSetShowPaymentForm : setInternalShowPaymentForm;
  
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(false);
  
  const [clientInfo, setClientInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '', // Will store country code
    additionalInfo: ''
  });
  
  const [formErrors, setFormErrors] = useState({});

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { data, refetch } = usePackage();

  // Country mapping for common countries
  const countryMap = {
    "United States": "US",
    "Canada": "CA",
    "United Kingdom": "GB",
    "Australia": "AU",
    "Germany": "DE",
    "France": "FR",
    "Spain": "ES",
    "Italy": "IT",
    "Netherlands": "NL",
    "Sweden": "SE",
    "Norway": "NO",
    "Denmark": "DK",
    "Finland": "FI",
    "Switzerland": "CH",
    "Austria": "AT",
    "Belgium": "BE",
    "Ireland": "IE",
    "Portugal": "PT",
    "New Zealand": "NZ",
    "Japan": "JP",
    "China": "CN",
    "India": "IN",
    "Brazil": "BR",
    "Mexico": "MX",
    "Argentina": "AR",
    "Egypt": "EG",
    "South Africa": "ZA",
    "Russia": "RU",
    "Turkey": "TR",
    "Saudi Arabia": "SA",
    "United Arab Emirates": "AE",
    "Singapore": "SG",
    "Malaysia": "MY",
    "Thailand": "TH",
    "Philippines": "PH",
    "Indonesia": "ID",
    "Hong Kong": "HK",
    "South Korea": "KR",
    "Israel": "IL",
    "Poland": "PL",
    "Czech Republic": "CZ",
    "Greece": "GR",
    "Hungary": "HU",
    "Romania": "RO",
    "Bulgaria": "BG",
    "Croatia": "HR",
    "Slovenia": "SI",
    "Slovakia": "SK",
    "Estonia": "EE",
    "Latvia": "LV",
    "Lithuania": "LT",
    "Bangladesh": "BD"
  };

  useEffect(() => {
    if (user) {
      setClientInfo(prev => ({
        ...prev,
        email: user.email || '',
        firstName: user.displayName?.split(' ')[0] || '',
        lastName: user.displayName?.split(' ').slice(1).join(' ') || '',
        country: 'US' // Default to US
      }));
    }
  }, [user]);

  useEffect(() => {
    if (showPaymentForm) {
      axiosSecure.post('/create-payment-intent', { price: packages.price })
        .then(res => setClientSecret(res.data.clientSecret))
        .catch(err => {
          console.error('Error creating payment intent:', err);
          setError('Failed to initialize payment. Please try again.');
        });
    }
  }, [axiosSecure, packages.price, showPaymentForm]);

  const validateClientInfo = () => {
    const errors = {};
    
    if (!clientInfo.firstName.trim()) errors.firstName = 'First name is required';
    if (!clientInfo.lastName.trim()) errors.lastName = 'Last name is required';
    if (!clientInfo.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientInfo.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!clientInfo.phone.trim()) errors.phone = 'Phone number is required';
    if (!clientInfo.address.trim()) errors.address = 'Address is required';
    if (!clientInfo.city.trim()) errors.city = 'City is required';
    if (!clientInfo.state.trim()) errors.state = 'State is required';
    if (!clientInfo.zipCode.trim()) errors.zipCode = 'Zip code is required';
    if (!clientInfo.country.trim()) errors.country = 'Country is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo(prev => ({ ...prev, [name]: value }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleClientInfoSubmit = (e) => {
    e.preventDefault();
    if (validateClientInfo()) {
      setShowPaymentForm(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements || !isCardComplete) return;

    setIsProcessing(true);
    setError('');

    const card = elements.getElement(CardElement);
    if (!card) {
      setIsProcessing(false);
      return;
    }

    const { error: paymentMethodError } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (paymentMethodError) {
      setError(paymentMethodError.message);
      setIsProcessing(false);
      return;
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          email: clientInfo.email,
          name: `${clientInfo.firstName} ${clientInfo.lastName}`,
          address: {
            line1: clientInfo.address,
            city: clientInfo.city,
            state: clientInfo.state,
            postal_code: clientInfo.zipCode,
            country: clientInfo.country, // Using country code
          }
        }
      }
    });

    if (confirmError) {
      setError(confirmError.message);
      setIsProcessing(false);
      return;
    }

    if (paymentIntent?.status === 'succeeded') {
      setTransactionId(paymentIntent.id);

      try {
        // Update package purchase count
        const serviceBoughtDate = new Date().toISOString().split('T')[0];
        const email = user?.email;
        const buy = packages.bought + 1;
        await axiosPublic.put(`/package/${packages._id}`, { bought: buy });

        // Update user's service information
        const propertyBuy = await axiosPublic.put(`/users/${email}`, { 
          service: packages._id, 
          serviceDate: serviceBoughtDate, 
          servicePaid: "yes" 
        });

        // Create purchase record with client information - formatted to match backend expectations
        const purchaseData = {
          // Client Information
          firstName: clientInfo.firstName,
          lastName: clientInfo.lastName,
          email: clientInfo.email,
          phone: clientInfo.phone,
          address: clientInfo.address,
          city: clientInfo.city,
          state: clientInfo.state,
          zipCode: clientInfo.zipCode,
          country: clientInfo.country,
          additionalInfo: clientInfo.additionalInfo,
          
          // Property Information (using package data)
          propertyId: packages._id,
          propertyName: packages.name,
          propertyAddress: `Service Package - ${packages.name}`,
          propertyPrice: packages.price,
          propertyImage: packages.image || '', // Use package image if available
          
          // Payment Information
          paymentId: paymentIntent.id,
          paymentAmount: packages.price,
          paymentDate: new Date().toISOString().split('T')[0],
          
          // User Information
          userEmail: user?.email,
          userName: user?.displayName,
          
          // Package specific fields
          packageId: packages._id,
          packageName: packages.name,
          packagePrice: packages.price,
          packageBenefits: packages.benefits,
        };

        console.log('Sending purchase data:', purchaseData); // Debug log

        const purchaseResponse = await axiosPublic.post('/purchase', purchaseData);
        
        if (purchaseResponse.data) {
          // Save payment record
          const payment = {
            email: user?.email,
            price: packages.price,
            transactionId: paymentIntent.id,
            date: new Date().toISOString().split('T')[0],
            name: packages.name,
            clientInfo: clientInfo
          };

          await axiosPublic.post(`/payment`, payment);
          
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Thank you for your purchase!",
            text: "We will contact you soon with further details.",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate('/service');
        }
      } catch (err) {
        console.error('Error processing purchase:', err);
        console.error('Error response:', err.response?.data); // Debug log
        setError('There was an issue processing your purchase. Please contact support.');
      }
    }

    setIsProcessing(false);
  };

  const handleCardChange = (event) => {
    setIsCardComplete(event.complete);
    setError(event.error ? event.error.message : "");
  };

  const handleBackToForm = () => {
    setShowPaymentForm(false);
  };

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      {!showPaymentForm ? (
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">Your Information</h2>
          
          <form onSubmit={handleClientInfoSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={clientInfo.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8f67] bg-gray-800 text-white placeholder-gray-400 ${
                    formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={clientInfo.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8f67] bg-gray-800 text-white placeholder-gray-400 ${
                    formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={clientInfo.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8f67] bg-gray-800 text-white placeholder-gray-400 ${
                    formErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={clientInfo.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8f67] bg-gray-800 text-white placeholder-gray-400 ${
                    formErrors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-black mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={clientInfo.address}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8f67] bg-gray-800 text-white placeholder-gray-400 ${
                  formErrors.address ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {formErrors.address && <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={clientInfo.city}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8f67] bg-gray-800 text-white placeholder-gray-400 ${
                    formErrors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formErrors.city && <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={clientInfo.state}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8f67] bg-gray-800 text-white placeholder-gray-400 ${
                    formErrors.state ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formErrors.state && <p className="text-red-500 text-xs mt-1">{formErrors.state}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={clientInfo.zipCode}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8f67] bg-gray-800 text-white placeholder-gray-400 ${
                    formErrors.zipCode ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formErrors.zipCode && <p className="text-red-500 text-xs mt-1">{formErrors.zipCode}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">Country</label>
                <select
                  name="country"
                  value={clientInfo.country}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8f67] bg-gray-800 text-white ${
                    formErrors.country ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Country</option>
                  {Object.entries(countryMap).map(([name, code]) => (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </select>
                {formErrors.country && <p className="text-red-500 text-xs mt-1">{formErrors.country}</p>}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-black mb-1">Additional Information (Optional)</label>
              <textarea
                name="additionalInfo"
                value={clientInfo.additionalInfo}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8f67] bg-gray-800 text-white placeholder-gray-400"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#ff8f67] hover:bg-[#eb7043] text-white py-3 px-4 rounded-lg font-semibold transition-colors"
            >
              Continue to Payment
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">Payment Information</h2>
          
          <div className="mb-6 p-4 bg-orange-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-black text-sm sm:text-base">Package</span>
              <span className="font-semibold text-black text-sm sm:text-base">{packages.name}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-black text-sm sm:text-base">Buyer</span>
              <span className="font-semibold text-black text-sm sm:text-base">{clientInfo.firstName} {clientInfo.lastName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-black text-sm sm:text-base">Total Amount</span>
              <span className="text-lg sm:text-xl font-bold text-[#ff8f67]">${packages.price.toLocaleString()}</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="p-4 border border-gray-300 rounded-lg bg-gray-800">
              <label className="block text-sm font-medium text-white mb-2">Card Details</label>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#ffffff',
                      '::placeholder': { color: '#aab7c4' },
                    },
                    invalid: { color: '#9e2146' },
                  },
                }}
                onChange={handleCardChange}
              />
            </div>

            <button
              className="w-full bg-[#ff8f67] hover:bg-[#eb7043] text-white py-3 px-4 rounded-lg font-semibold transition-colors disabled:opacity-50 flex items-center justify-center"
              type="submit"
              disabled={!stripe || !clientSecret || isProcessing}
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                `Pay $${packages.price.toLocaleString()}`
              )}
            </button>

            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
            {transactionId && (
              <p className="text-green-600 text-sm text-center">
                Payment successful! Transaction ID: {transactionId}
              </p>
            )}
            
            <button
              type="button"
              onClick={handleBackToForm}
              className="w-full text-[#ff8f67] py-2 px-4 rounded-lg font-medium hover:text-[#eb7043] transition-colors"
            >
              Back to Information
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {
    const packages = useLoaderData(); 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

    return (
        <div className="my-7">
                         
            <Elements stripe={stripePromise}>
                    <CheckoutForm packages={packages}></CheckoutForm>
                </Elements>
                
              
        
        </div>
    );
};

export default Payment;
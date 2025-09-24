import { Elements } from "@stripe/react-stripe-js";
import {  useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";



const PropertyBuy = () => {

const property = useLoaderData(); 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

    return (
        <div className="my-7">
                    
          

      
               
            <Elements stripe={stripePromise}>
                    <CheckoutForm property={property}></CheckoutForm>
                </Elements>
                
              
        
        </div>
    );
};

export default PropertyBuy;

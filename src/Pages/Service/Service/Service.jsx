import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Testimonial from "../Testimonial/Testimonial";
import Package from "../Package/Package";


const Service = () => {
    return (
        <div>
              <Helmet>
            <title>RentRight | SERVICE</title>
        </Helmet>
            <Banner></Banner>
            <ServiceDetails></ServiceDetails>
            <Package></Package>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Service;
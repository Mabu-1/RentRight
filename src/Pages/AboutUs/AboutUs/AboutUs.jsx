

import { Helmet } from "react-helmet-async";
import Achievement from "../Achievement/Achievement";
import Agents from "../Agents/Agents";
import Amenities from "../Amenities/Amenities";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import MobileApp from "../MobileAPP/MobileAPP";



const AboutUs = () => {
    
    return (
        <div>
          <Helmet>
            <title>RentRight | ABOUT US</title>
        </Helmet>
            <Banner></Banner>
            <MobileApp></MobileApp>
            <Amenities></Amenities>
            <Achievement></Achievement>
            <FAQ></FAQ>
            <Agents></Agents>
           
        </div>
    );
};

export default AboutUs;
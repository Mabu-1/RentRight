

import { Helmet } from "react-helmet-async";
import Achievement from "../Achievement/Achievement";
import Agents from "../Agents/Agents";
import Amenities from "../Amenities/Amenities";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import MobileApp from "../MobileAPP/MobileAPP";
import Leading from "../Leading/Leading";



const AboutUs = () => {
    
    return (
        <div>
          <Helmet>
            <title>RentRight | ABOUT US</title>
        </Helmet>
            <Banner></Banner>
           
            <Amenities></Amenities>
            <Leading></Leading>
            <Achievement></Achievement>
            <FAQ></FAQ>
            <Agents></Agents>
           
        </div>
    );
};

export default AboutUs;
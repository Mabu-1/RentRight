import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Leading from "../Leading/Leading";
import Newsletter from "../Newsletter/Newsletter";
import Package from "../Package/Package";
import Partners from "../Partners/Partners";
import Requirement from "../Requirement/Requirement";


import Unique from "../Unique/Unique";

const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <AboutUs></AboutUs>
           <Unique></Unique>
           <Leading></Leading>
           <Requirement></Requirement>
           <Package></Package>
           <Partners></Partners>
           <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
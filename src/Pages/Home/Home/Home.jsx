import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Leading from "../Leading/Leading";
import Package from "../Package/Package";
import Partners from "../Partners/Partners";
import Requirement from "../Requirement/Requirement";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";
import Unique from "../Unique/Unique";

const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <AboutUs></AboutUs>
           <Unique></Unique>
           <Leading></Leading>
           <Service></Service>
           <Requirement></Requirement>
           <Testimonial></Testimonial>
           <Package></Package>
           <Partners></Partners>
        </div>
    );
};

export default Home;
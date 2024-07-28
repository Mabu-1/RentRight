import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Leading from "../Leading/Leading";
import Newsletter from "../Newsletter/Newsletter";
import Partners from "../Partners/Partners";
import Requirement from "../Requirement/Requirement";


import Unique from "../Unique/Unique";
import Register from "../Register/Regsiter";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>RentRight | HOME</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Unique></Unique>
            <Leading></Leading>
            <Requirement></Requirement>
            <Partners></Partners>
            <Register></Register>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
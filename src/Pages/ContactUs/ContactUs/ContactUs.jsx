import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Branch from "../Branch/Branch";
import Contact from "../Contact/Contact";


const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>RentRight | CONTACT US</title>
            </Helmet>
            <Banner></Banner>
            <Branch></Branch>
            <Contact></Contact>
        </div>
    );
};

export default ContactUs;
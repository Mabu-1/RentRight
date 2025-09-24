import { Helmet } from "react-helmet-async";
import Properties from "../properties/Properties";




const Property = () => {
    return (
        <div>
            <Helmet>
                <title>RentRight | PROPERTY</title>
            </Helmet>
           
            <Properties></Properties>

        </div>
    );
};

export default Property;
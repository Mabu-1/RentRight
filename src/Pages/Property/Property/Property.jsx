import { Helmet } from "react-helmet-async";
import Properties from "../properties/Properties";
import SearchBar from "../SearchBar/SearchBar";



const Property = () => {
    return (
        <div>
            <Helmet>
                <title>RentRight | PROPERTY</title>
            </Helmet>
            <SearchBar></SearchBar>
            <Properties></Properties>

        </div>
    );
};

export default Property;
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Properties from "../properties/Properties";
import SearchBar from "../SearchBar/SearchBar";



const Property = () => {
    return (
        <div>
            <Helmet>
            <title>RentRight | PROPERTY</title>
        </Helmet>
          <Banner></Banner>
          <SearchBar></SearchBar>
          <Properties></Properties>
         
        </div>
    );
};

export default Property;
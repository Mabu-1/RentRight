import Banner from "../Banner/Banner";
import Properties from "../properties/Properties";
import SearchBar from "../SearchBar/SearchBar";
import Testimonial from "../Testimonial/Testimonial";


const Property = () => {
    return (
        <div>
          <Banner></Banner>
          <SearchBar></SearchBar>
          <Properties></Properties>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Property;
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Marquee from "react-fast-marquee";
import Headline from "../../../Shared/Headline/Headline";
import "./Styles.css";
import useAmenties from '../../../hooks/useAmenties';
import Loading from '../../../Loading/Loading';
import Card from './Card';

const Amenities = () => {
const [feature,loading] =useAmenties();

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

   if(loading)
    return <Loading></Loading>
    return (
        <div className="my-7">
            <Headline 
                subheading={"EXCLUSIVE PROPERTIES"}
                headline={"Luxurious Amenities"}
            />

            <Marquee speed={50} pauseOnHover={true} className="gap-5">
                <div className="flex gap-5">
                {feature.map((feature) => (
                        <Card key={feature._id} feature={feature} />
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Amenities;

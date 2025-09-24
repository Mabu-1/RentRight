import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Marquee from "react-fast-marquee";
import Headline from "../../../Shared/Headline/Headline";
import useAmenties from '../../../hooks/useAmenties';
import Loading from '../../../Loading/Loading';
import Card from './Card';

const Amenities = () => {
    const { data, isLoading, isError, error } = useAmenties();

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <div className="text-red-500 text-center">Error: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div className="text-center text-gray-500">No Amenties found.</div>;
    }
    return (
        <div className="mt-[100px]">
            <Headline 
                subheading={"EXCLUSIVE PROPERTIES"}
                headline={"Luxurious Amenities"}
            />

            <Marquee speed={50} pauseOnHover={true} className="gap-5">
                <div className="flex gap-5">
                {data.map((feature) => (
                        <Card key={feature._id} feature={feature} />
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Amenities;

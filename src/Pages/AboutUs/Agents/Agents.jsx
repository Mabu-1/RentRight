import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Loading from '../../../Loading/Loading';
import Card from './Card';
import useAgent from '../../../hooks/useAgent';
import Headline from '../../../Shared/Headline/Headline';

const Agents = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    const { data, isLoading, isError, error } = useAgent();

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div className="text-red-500 text-center">Error: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div className="text-center text-gray-500">No agents found.</div>;
    }

    return (
        <div className="my-7">
            <Headline
                data-aos="fade-up"
                subheading1={"Meet Our Agents"}
                headline1={"Guiding You Home with Expertise and Care"}
            />

            <div className="grid grid-cols-1 gap-8">
                {data.map((agent) => (
                    <Card key={agent._id} agent={agent} />
                ))}
            </div>
        </div>
    );
};

export default Agents;

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Loading from '../../../Loading/Loading';
import Card from './Card';
import useAgent from '../../../hooks/useAgent';

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
            <h2 data-aos="fade-right" className="text-4xl font-bold text-yellow-400 text-center mb-8">
                Meet Our Agents
            </h2>
            <div className="grid grid-cols-1 gap-8">
                {data.map((agent) => (
                    <Card key={agent._id} agent={agent} />
                ))}
            </div>
        </div>
    );
};

export default Agents;

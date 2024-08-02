import  { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import useAgents from '../../../hooks/useAgent';
import Loading from '../../../Loading/Loading';
import Card from './Card';

const Agents = () => {
    const [agent,loading] =useAgents();
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

   if(loading)
    return <Loading></Loading>
    return (
        <div className="my-7">
            <h2  data-aos="fade-right" className="text-4xl font-bold text-yellow-400 text-center mb-8">Meet Our Agents</h2>
            <div className="grid grid-cols-1 gap-8">
            {agent.map((agent) => (
                        <Card key={agent._id} agent={agent} />
                    ))}
            </div>
        </div>
    );
};

export default Agents;

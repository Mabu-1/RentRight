import { useEffect, useState } from "react";


const useAgents = () => {
    const [agent, setAgent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('agent.json')
            .then(res => res.json())
            .then(data => 
                setAgent(data))
                setLoading(false);
    }, [])

    return [agent,loading]
};

export default useAgents;
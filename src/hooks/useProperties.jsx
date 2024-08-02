import { useEffect, useState } from "react";


const useProperties = () => {
    const [Properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('property.json')
            .then(res => res.json())
            .then(data => 
                setProperties(data))
                setLoading(false);
    }, [])

    return [Properties,loading]
};

export default useProperties;
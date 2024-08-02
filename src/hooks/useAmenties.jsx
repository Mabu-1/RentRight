import { useEffect, useState } from "react";


const useAmenties = () => {
    const [feature, setFeature] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('feature.json')
            .then(res => res.json())
            .then(data => 
                setFeature(data))
                setLoading(false);
    }, [])

    return [feature,loading]
};

export default useAmenties;
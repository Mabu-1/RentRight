import { useEffect, useState } from "react";


const usePackage = () => {
    const [pack, setPackage] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('package.json')
            .then(res => res.json())
            .then(data => 
                setPackage(data))
                setLoading(false);
    }, [])

    return [pack,loading]
};

export default usePackage;
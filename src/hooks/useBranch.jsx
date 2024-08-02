import { useEffect, useState } from "react";


const useBranch = () => {
    const [branch, setBranch] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('branch.json')
            .then(res => res.json())
            .then(data => 
                setBranch(data))
                setLoading(false);
    }, [])

    return [branch,loading]
};

export default useBranch;
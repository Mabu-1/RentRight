import { useEffect, useState } from "react";


const useReview = () => {
    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => 
                setReview(data))
                setLoading(false);
    }, [])

    return [review,loading]
};

export default useReview;
import { useQuery } from "@tanstack/react-query";

const useReview= () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["review"],
            queryFn: async () => {
                const data = await fetch("http://localhost:5000/review");
                return await data.json();
            }
        }
       
    );

    return { data, isLoading, isFetching, refetch };
};

export default useReview;

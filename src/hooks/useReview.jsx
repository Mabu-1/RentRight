import { useQuery } from "@tanstack/react-query";

const useReview= () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["review"],
            queryFn: async () => {
                const data = await fetch("https://rent-right-server.vercel.app/review");
                return await data.json();
            }
        }
       
    );

    return { data, isLoading, isFetching, refetch };
};

export default useReview;

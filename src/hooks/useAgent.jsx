import { useQuery } from "@tanstack/react-query";

const useAgent= () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["agent"],
            queryFn: async () => {
                const data = await fetch("http://localhost:5000/agent");
                return await data.json();
            }
        }
       
    );

    return { data, isLoading, isFetching, refetch };
};

export default useAgent;

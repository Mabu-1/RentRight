import { useQuery } from "@tanstack/react-query";

const useAgent= () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["agent"],
            queryFn: async () => {
                const data = await fetch("https://rent-right-server.vercel.app/agent");
                return await data.json();
            }
        }
       
    );

    return { data, isLoading, isFetching, refetch };
};

export default useAgent;

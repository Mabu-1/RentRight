import { useQuery } from "@tanstack/react-query";

const useAmenties= () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["feature"],
            queryFn: async () => {
                const data = await fetch("https://rent-right-server.vercel.app/feature");
                return await data.json();
            }
        }
       
    );

    return { data, isLoading, isFetching, refetch };
};

export default useAmenties;

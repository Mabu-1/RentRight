import { useQuery } from "@tanstack/react-query";

const useProperty= () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["property"],
            queryFn: async () => {
                const data = await fetch("https://rent-right-server.vercel.app/property");
                return await data.json();
            }
        }
       
    );

    return { data, isLoading, isFetching, refetch };
};

export default useProperty;

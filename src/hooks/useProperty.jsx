import { useQuery } from "@tanstack/react-query";

const useProperty= () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["property"],
            queryFn: async () => {
                const data = await fetch("http://localhost:5000/property");
                return await data.json();
            }
        }
       
    );

    return { data, isLoading, isFetching, refetch };
};

export default useProperty;

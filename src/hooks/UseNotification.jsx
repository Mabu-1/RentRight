import { useQuery } from "@tanstack/react-query";

const useNotification= () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["notification"],
            queryFn: async () => {
                const data = await fetch("http://localhost:5000/notification");
                return await data.json();
            }
        }
       
    );

    return { data, isLoading, isFetching, refetch };
};

export default useNotification;

import { useQuery } from "@tanstack/react-query";

const useNotification= () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["notification"],
            queryFn: async () => {
                const data = await fetch("https://rent-right-server.vercel.app/notification");
                return await data.json();
            }
        }
       
    );

    return { data, isLoading, isFetching, refetch };
};

export default useNotification;

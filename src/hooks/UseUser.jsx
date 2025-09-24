import { useQuery } from "@tanstack/react-query";

const useUser= () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["user"],
            queryFn: async () => {
                const data = await fetch("https://rent-right-server.vercel.app/users");
                return await data.json();
            }
        }
       
    );

    return { data, isLoading, isFetching, refetch };
};

export default useUser;

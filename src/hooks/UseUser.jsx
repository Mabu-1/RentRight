import { useQuery } from "@tanstack/react-query";

const useUser= () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["user"],
            queryFn: async () => {
                const data = await fetch("http://localhost:5000/users");
                return await data.json();
            }
        }
       
    );

    return { data, isLoading, isFetching, refetch };
};

export default useUser;

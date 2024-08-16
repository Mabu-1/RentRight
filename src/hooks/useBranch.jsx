import { useQuery } from "@tanstack/react-query";

const useBranch= () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["branch"],
            queryFn: async () => {
                const data = await fetch("http://localhost:5000/branch");
                return await data.json();
            }
        }
       
    );

    return { data, isLoading, isFetching, refetch };
};

export default useBranch;

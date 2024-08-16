import { useQuery } from "@tanstack/react-query";

const usePackage= () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["package"],
            queryFn: async () => {
                const data = await fetch("http://localhost:5000/package");
                return await data.json();
            }
        }
       
    );

    return { data, isLoading, isFetching, refetch };
};

export default usePackage;

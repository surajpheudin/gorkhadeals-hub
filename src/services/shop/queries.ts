import { useQuery } from "@tanstack/react-query";
import { api } from "../axios.constants";
import { getShops } from "./apis";

const useGetShops = (params?: { search: string }) => {
    return useQuery({
        queryKey: [api.getShops, params?.search],
        queryFn: getShops(params),
        staleTime: 0,
    });
};
export { useGetShops };

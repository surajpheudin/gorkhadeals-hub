import { useQuery } from "@tanstack/react-query";
import { api } from "../axios.constants";
import { getShop, getShops } from "./apis";

const useGetShops = (params?: { search: string }) => {
    return useQuery({
        queryKey: [api.getShops, params?.search],
        queryFn: getShops(params),
    });
};

const useGetShop = (id: string) => {
    return useQuery({
        queryKey: [api.getShop, id],
        queryFn: getShop(id),
        enabled: !!id,
    });
};
export { useGetShops, useGetShop };

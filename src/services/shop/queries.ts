import { useQuery } from "@tanstack/react-query";
import { api } from "../axios.constants";
import { getShop, getShopMembers, getShops } from "./apis";
import { IGetShopMembersRequest, IGetShopsRequest } from "./interface";

const useGetShops = (params: IGetShopsRequest) => {
    return useQuery({
        queryKey: [api.getShops, params?.search],
        queryFn: getShops(params),
    });
};

const useGetShopInvitations = () => {
    return useQuery({
        queryKey: [api.getShopInvitations],
        queryFn: getShops({
            search: "",
            status: "INVITED",
        }),
    });
};

const useGetShop = (id: string) => {
    return useQuery({
        queryKey: [api.getShop, id],
        queryFn: getShop(id),
        enabled: !!id,
    });
};

const useGetShopMembers = (params: IGetShopMembersRequest) => {
    return useQuery({
        queryKey: [api.getShopMembers, params?.search, params?.id],
        queryFn: getShopMembers(params),
    });
};
export { useGetShops, useGetShop, useGetShopMembers, useGetShopInvitations };

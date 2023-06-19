import { useQuery } from "@tanstack/react-query";
import { api } from "../axios.constants";
import { getProducts } from "./apis";
import { IGetProductsRequest } from "./interface";

const useGetProducts = (params: IGetProductsRequest) => {
    return useQuery({
        queryKey: [api.getProducts, params?.search],
        queryFn: getProducts(params),
    });
};

export { useGetProducts };

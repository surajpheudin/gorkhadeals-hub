import { useQuery } from "@tanstack/react-query";
import { api } from "../axios.constants";
import { getProduct, getProductCategories, getProducts } from "./apis";
import { IGetProductsRequest } from "./interface";

const useGetProducts = (params: IGetProductsRequest) => {
    return useQuery({
        queryKey: [api.getProducts, params?.search],
        queryFn: getProducts(params),
    });
};

const useGetProductCategories = () => {
    return useQuery({
        queryKey: [api.getProductCategories],
        queryFn: getProductCategories(),
    });
};

const useGetProduct = (id: string) => {
    return useQuery({
        queryKey: [api.getProduct, id],
        queryFn: getProduct(id),
    });
};

export { useGetProducts, useGetProduct, useGetProductCategories };

import { ICategory, IProduct } from "@src/@types/modal";
import { AxiosAuthInstance } from "../axios.config";
import { api } from "../axios.constants";
import {
    IAddProductRequest,
    IEditProductRequest,
    IGetProductsRequest,
} from "./interface";

export const addProduct = async (params: IAddProductRequest) => {
    const data = await AxiosAuthInstance.post(api.addProduct, params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });

    return data.data;
};

export const editProduct = async (params: IEditProductRequest) => {
    const { id, ...body } = params;
    const data = await AxiosAuthInstance.patch(
        api.getProduct.replace(":id", id),
        body,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );

    return data.data;
};

export const getProducts =
    ({ search, status, shopId }: IGetProductsRequest) =>
    async () => {
        const data = await AxiosAuthInstance.get<IProduct[]>(api.getProducts, {
            params: {
                search,
                status,
                shopId,
            },
        });

        return data.data;
    };

export const getProduct = (id: string) => async () => {
    const data = await AxiosAuthInstance.get<IProduct>(
        api.getProduct.replace(":id", id)
    );

    return data.data;
};

export const getProductCategories = () => async () => {
    const data = await AxiosAuthInstance.get<ICategory>(
        api.getProductCategories
    );

    return data.data;
};

export const deleteProduct = async (id: string) => {
    const data = await AxiosAuthInstance.delete(
        api.delteProduct.replace(":id", id)
    );
    return data.data;
};

import { IShop } from "@src/@types/modal";
import { AxiosAuthInstance } from "../axios.config";
import { api } from "../axios.constants";
import { ICreateShopRequest } from "./interface";

export const createShop = async (params: ICreateShopRequest) => {
    const data = await AxiosAuthInstance.post(api.createShop, params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });

    return data.data;
};

export const getShops = (params?: { search: string }) => async () => {
    const data = await AxiosAuthInstance.get<IShop[]>(api.getShops, {
        params,
    });

    return data.data;
};

export const getShop = (id: string) => async () => {
    const data = await AxiosAuthInstance.get<IShop>(
        api.getShop.replace(":id", id)
    );

    return data.data;
};

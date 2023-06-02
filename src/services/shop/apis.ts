import { AxiosAuthInstance } from "../axios.config";
import { api } from "../axios.constants";
import { ICreateShopRequest } from "./interface";

export const createShop = async (params: ICreateShopRequest) => {
    const data = await AxiosAuthInstance.post(api.createShop, params);

    return data.data;
};

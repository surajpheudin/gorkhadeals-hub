import { ACTIVE_SHOP } from "@src/constants/storage.constants";
import Cookies from "js-cookie";

export const addActiveShop = (shopId: string) => {
    Cookies.set(ACTIVE_SHOP, shopId);
};

export const getActiveShop = () => {
    return Cookies.get(ACTIVE_SHOP);
};

export const removeActiveShop = () => {
    Cookies.remove(ACTIVE_SHOP);
};

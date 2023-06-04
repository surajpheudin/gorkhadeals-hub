import { IUser } from "@src/@types/modal";
import { AxiosAuthInstance } from "../axios.config";
import { api } from "../axios.constants";

export const getLoggedInUser = async () => {
    const data = await AxiosAuthInstance.get<IUser>(api.isLogin);

    return data.data;
};

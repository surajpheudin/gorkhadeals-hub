import { IShop, IProduct } from "@src/@types/modal";
import { AxiosAuthInstance } from "../axios.config";
import { api } from "../axios.constants";
import { IAddProductRequest, IGetProductsRequest } from "./interface";

export const addProduct = async (params: IAddProductRequest) => {
    const data = await AxiosAuthInstance.post(api.addProduct, params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });

    return data.data;
};

export const getProducts =
    ({ search, status }: IGetProductsRequest) =>
    async () => {
        const data = await AxiosAuthInstance.get<IProduct[]>(api.getProducts, {
            params: {
                search,
                status: status,
            },
        });

        return data.data;
    };

export const getShop = (id: string) => async () => {
    const data = await AxiosAuthInstance.get<IShop>(
        api.getShop.replace(":id", id)
    );

    return data.data;
};

export const inviteMember = async ({
    email,
    id,
}: {
    id: string;
    email: string;
}) => {
    const data = await AxiosAuthInstance.post<IShop>(
        api.inviteMember.replace(":id", id),
        {
            email,
        }
    );

    return data.data;
};

export const acceptMemberInvitation = async ({
    shopId,
}: {
    shopId: string;
}) => {
    const data = await AxiosAuthInstance.post<IShop>(
        api.acceptMemberInvitation.replace(":id", shopId)
    );

    return data.data;
};

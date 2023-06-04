import { IShop, IShopMember } from "@src/@types/modal";
import { AxiosAuthInstance } from "../axios.config";
import { api } from "../axios.constants";
import {
    ICreateShopRequest,
    IGetShopMembersRequest,
    IGetShopsRequest,
} from "./interface";

export const createShop = async (params: ICreateShopRequest) => {
    const data = await AxiosAuthInstance.post(api.createShop, params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });

    return data.data;
};

export const getShops =
    ({ search, status }: IGetShopsRequest) =>
    async () => {
        const data = await AxiosAuthInstance.get<IShop[]>(api.getShops, {
            params: {
                search,
                status: status || "JOINED",
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

export const getShopMembers =
    ({ id, ...params }: IGetShopMembersRequest) =>
    async () => {
        const data = await AxiosAuthInstance.get<IShopMember[]>(
            api.getShopMembers.replace(":id", id),
            {
                params,
            }
        );

        return data.data;
    };

export const removeShopMember = async ({
    id,
    ...params
}: {
    id: string;
    userShopId: string;
}) => {
    const data = await AxiosAuthInstance.delete(
        api.removeShopMember.replace(":id", id),
        {
            params,
        }
    );

    return data.data;
};

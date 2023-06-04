import { MemberStatus } from "@src/@types/modal";

export interface ICreateShopRequest {
    registeredName: string;
    displayName: string;
    email: string;
    image: File | null;
}

export interface IGetShopsRequest {
    search: string;
    status?: MemberStatus;
}
export interface IGetShopMembersRequest {
    id: string;
    search: string;
}

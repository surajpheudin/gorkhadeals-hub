import { ProductStatus } from "@src/@types/modal";

export interface IAddProductRequest {
    category?: string;
    status: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    sku: string;
    shopId: string;
    featuredImage: string;
}

export interface IEditProductRequest extends IAddProductRequest {
    id: string;
    variantId: string;
}

export interface IGetProductsRequest {
    search: string;
    status?: ProductStatus;
}
export interface IGetShopMembersRequest {
    id: string;
    search: string;
}

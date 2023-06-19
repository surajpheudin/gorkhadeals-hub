import * as Yup from "yup";

export interface IAddProductFormData {
    category: string;
    status: string;
    name: string;
    description: string;
    image: FileList | null;
    options: {
        name: string;
        values: string[];
    }[];
    price: string;
    stock: string;
    sku: string;
}

export const AddProductSchema = Yup.object({
    name: Yup.string().required(),
    description: Yup.string().required(),
    price: Yup.string().required(),
    stock: Yup.string().required(),
    sku: Yup.string().required(),
    status: Yup.string().required(),
});

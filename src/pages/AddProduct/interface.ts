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
}

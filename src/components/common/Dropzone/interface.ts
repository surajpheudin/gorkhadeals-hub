import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface IDropzone<T extends FieldValues> {
    control: Control<T, unknown>;
    name: FieldPath<T>;
    defaultImage?: string;
    accept?: string;
    maxSizeInMb: number;
    label?: string;
}

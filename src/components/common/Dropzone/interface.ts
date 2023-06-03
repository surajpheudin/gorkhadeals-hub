import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface IDropzone<T extends FieldValues> {
    control: Control<T, unknown>;
    name: FieldPath<T>;
    setFiles: (files: File[]) => void;
    defaultImage?: string;
    accept?: string;
    maxSizeInMb: number;
}

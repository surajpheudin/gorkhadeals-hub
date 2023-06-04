import { FormLabelProps, SelectProps } from "@chakra-ui/react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export type ISelectField<T extends FieldValues = FieldValues> = SelectProps & {
    control: Control<T, unknown>;
    name: FieldPath<T>;
    label?: string;
    placeholder?: string;
    labelProps?: FormLabelProps;
    options?: ISelectOption[];
    onCustomChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export interface ISelectOption<T = string> {
    label: string;
    value: T;
}

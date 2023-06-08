import { FormLabelProps, TextareaProps } from "@chakra-ui/react";
import {
    Control,
    FieldPath,
    FieldValues,
    RegisterOptions,
} from "react-hook-form";

export interface ITextArea<T extends FieldValues> extends TextareaProps {
    control: Control<T, unknown>;
    name: FieldPath<T>;
    label: string;
    labelProps?: FormLabelProps;
    placeholder?: string;
    rules?: Omit<
        RegisterOptions<T, FieldPath<T>>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >;
}

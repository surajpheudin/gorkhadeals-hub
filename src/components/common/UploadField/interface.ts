import { FormLabelProps, InputProps } from "@chakra-ui/react";
import { FunctionComponent, SVGProps } from "react";
import {
    Control,
    ControllerRenderProps,
    FieldPath,
    FieldValues,
    Path,
} from "react-hook-form";

export type IUploadField<T extends FieldValues = FieldValues> = InputProps & {
    control: Control<T, unknown>;
    name: FieldPath<T>;
    label?: string;
    labelProps?: FormLabelProps;
    leftIcon?: FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
    rightIcon?: FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
    onCustomChange?: (e: FileList) => void;
};

export type ICustomInput<T extends FieldValues> = InputProps & {
    labelProps?: FormLabelProps;
    leftIcon?: FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
    rightIcon?: FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
    field: ControllerRenderProps<T, Path<T>>;
    onCustomChange?: (e: FileList) => void;
};

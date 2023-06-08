import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Textarea,
} from "@chakra-ui/react";
import { FieldValues, useController } from "react-hook-form";
import { ITextArea } from "./interface";

const TextArea = <T extends FieldValues>(props: ITextArea<T>) => {
    const { name, control, label, placeholder, labelProps, ...otherProps } =
        props;

    const {
        field,
        fieldState: { error },
    } = useController({
        control,
        name,
    });

    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={name} color="gray.700" {...labelProps}>
                {label}
            </FormLabel>

            <Textarea
                id={name}
                placeholder={placeholder}
                {...field}
                {...otherProps}
            />

            <FormErrorMessage>{error && error?.message}</FormErrorMessage>
        </FormControl>
    );
};

export default TextArea;

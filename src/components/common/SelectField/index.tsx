import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Select,
} from "@chakra-ui/react";
import { FieldValues, useController } from "react-hook-form";
import { ISelectField } from "./interface";

const SelectField = <T extends FieldValues>(props: ISelectField<T>) => {
    const {
        name,
        control,
        label,
        labelProps,
        onCustomChange,
        options = [],
        ...others
    } = props;
    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
    });

    return (
        <FormControl isInvalid={!!error}>
            {label && (
                <FormLabel
                    fontSize={"md"}
                    fontWeight={"medium"}
                    mb={2}
                    {...labelProps}
                >
                    {label}
                </FormLabel>
            )}

            <Select
                {...field}
                onChange={(e) => {
                    field.onChange(e);
                    onCustomChange && onCustomChange(e);
                }}
                {...others}
                borderRadius={"md"}
                _placeholder={{
                    color: "gray.200",
                }}
            >
                {options?.map(({ label, value }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </Select>
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
    );
};

export default SelectField;

import {
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Icon,
    Text,
} from "@chakra-ui/react";
import { MimeTypes } from "@src/@types/modal";
import { FieldValues, useController } from "react-hook-form";
import { ICustomInput, IUploadField } from "./interface";

const UploadField = <T extends FieldValues = FieldValues>(
    props: IUploadField<T>
) => {
    const {
        name,
        control,
        label,
        labelProps,
        onCustomChange,
        accept = `${MimeTypes[".png"]}, ${MimeTypes[".jpeg"]}`,
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
                    mb={3}
                    {...labelProps}
                >
                    {label}
                </FormLabel>
            )}
            <CustomInput
                labelProps={labelProps}
                field={field}
                onCustomChange={onCustomChange}
                accept={accept}
                {...others}
            />
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
    );
};

UploadField.displayName = "UploadField";

export default UploadField;

const CustomInput = <T extends FieldValues>({
    labelProps,
    leftIcon,
    rightIcon,
    field,
    onCustomChange,
    accept,
    placeholder,
}: ICustomInput<T>) => {
    const { onChange, value, name, ...otherFields } = field;

    return (
        <>
            <Flex
                as={"label"}
                htmlFor={name}
                px={3}
                py={3}
                border="1px solid transparent"
                borderColor="gray.500"
                borderRadius={"lg"}
                alignItems="center"
                justifyContent="space-between"
                tabIndex={0}
                position="relative"
            >
                {leftIcon && (
                    <Icon
                        color={labelProps?.color}
                        fontSize="xs"
                        as={leftIcon}
                    />
                )}
                <Text
                    whiteSpace={"nowrap"}
                    overflowX="auto"
                    maxW="300px"
                    sx={{
                        "::-webkit-scrollbar": {
                            display: "none",
                        },
                    }}
                >
                    {value}
                </Text>
                <Text
                    color="gray.700"
                    sx={{
                        zIndex: 2,
                        position: "absolute",
                        backgroundColor: "white",
                        pointerEvents: "none",
                        inset: 0,
                        marginY: "auto",
                        w: "fit-content",
                        h: "fit-content",
                        px: 2,

                        ...(value && {
                            transform: "scale(0.85) translateY(-30px)",
                            color: "brand.500",
                        }),
                    }}
                >
                    {placeholder}
                </Text>
                {rightIcon && (
                    <Icon
                        color={value ? "green.500" : labelProps?.color}
                        fontSize="3xl"
                        as={rightIcon}
                    />
                )}
            </Flex>
            <input
                id={name}
                type={"file"}
                name={name}
                {...otherFields}
                onChange={(e) => {
                    const files = e.target?.files;
                    if (files) {
                        onChange(files);
                        onCustomChange?.(files);
                    }
                }}
                accept={accept}
                hidden
            />
        </>
    );
};

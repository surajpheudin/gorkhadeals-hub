import {
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text,
} from "@chakra-ui/react";
import { FieldValues, useController } from "react-hook-form";
import { ICustomInput, IInputField } from "./interface";

const InputField = <T extends FieldValues>(props: IInputField<T>) => {
    const {
        name,
        control,
        label,
        labelProps,
        onCustomChange,
        formControlProps,
        showMaxLength,
        rightElement,
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
        <FormControl isInvalid={!!error} {...formControlProps}>
            {label && formControlProps?.variant !== "floating" && (
                <FormLabel
                    fontSize={"sm"}
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
                rightElement={rightElement}
                onCustomChange={onCustomChange}
                showMaxLength={showMaxLength}
                {...others}
            />
            {label && formControlProps?.variant === "floating" && (
                <FormLabel
                    fontSize={"md"}
                    fontWeight={"medium"}
                    mb={3}
                    {...labelProps}
                >
                    {label}
                </FormLabel>
            )}
            <Flex justifyContent={"space-between"} mt={2}>
                <Text as="span" flexGrow={1}>
                    <FormErrorMessage mt={0}>
                        {error && error.message}
                    </FormErrorMessage>
                </Text>

                {showMaxLength && (
                    <Text fontSize={"xs"} color={"gray.500"}>
                        {`${field.value?.length}/${showMaxLength}`}
                    </Text>
                )}
            </Flex>
        </FormControl>
    );
};

export default InputField;

const CustomInput = <T extends FieldValues>({
    labelProps,
    leftIcon,
    rightIcon,
    field,
    onCustomChange,
    rightElement,
    showMaxLength,

    ...others
}: ICustomInput<T>) => {
    const { onChange, ...otherFields } = field;

    return (
        <InputGroup borderColor={"gray.500"} size="lg">
            {leftIcon && (
                <InputLeftElement
                    color={labelProps?.color}
                    top="50%"
                    transform={"translate(0%, -50%)"}
                >
                    <Icon
                        color={labelProps?.color}
                        fontSize="xs"
                        as={leftIcon}
                    ></Icon>
                </InputLeftElement>
            )}

            <Input
                fontSize={"sm"}
                borderRadius={"md"}
                _readOnly={{
                    backgroundColor: "gray.100",
                }}
                _placeholder={{
                    color: "gray.400",
                }}
                _disabled={{
                    backgroundColor: "gray.100",
                    cursor: "not-allowed",
                }}
                placeholder=" "
                size={"md"}
                {...otherFields}
                {...others}
                onChange={(e) => {
                    if (showMaxLength) {
                        if (e.target.value.length <= showMaxLength) {
                            onChange(e);
                            onCustomChange?.(e);
                        }
                    } else {
                        onChange(e);
                        onCustomChange?.(e);
                    }
                }}
            ></Input>
            {rightElement && (
                <InputRightElement
                    top="50%"
                    right={"16px"}
                    transform={"translate(0%, -50%)"}
                    height={"auto"}
                    width={"auto"}
                    cursor="pointer"
                >
                    {rightElement}
                </InputRightElement>
            )}

            {rightIcon && (
                <InputRightElement
                    color={labelProps?.color}
                    top="50%"
                    transform={"translate(0%, -50%)"}
                >
                    <Icon
                        color={labelProps?.color}
                        fontSize="xl"
                        as={rightIcon}
                    ></Icon>
                </InputRightElement>
            )}
        </InputGroup>
    );
};

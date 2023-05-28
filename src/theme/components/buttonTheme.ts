import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solidPrimary = defineStyle({
    background: "blue.300",
    _hover: {
        background: "blue.400",
    },
});

const grayPrimary = defineStyle({
    background: "gray.300",
    color: "gray.600",
    _hover: {
        background: "gray.400",
    },
});

export const buttonTheme = defineStyleConfig({
    baseStyle: {},
    variants: {
        solid: ({ colorScheme }) => ({
            ...(colorScheme === "primary" && solidPrimary),
            ...(colorScheme === "gray" && grayPrimary),
        }),
    },
    defaultProps: {
        colorScheme: "primary",
    },
});

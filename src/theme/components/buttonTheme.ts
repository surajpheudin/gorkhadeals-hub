import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solidPrimary = defineStyle({
    background: "blue.300",
    _hover: {
        background: "blue.400",
    },
});

export const buttonTheme = defineStyleConfig({
    baseStyle: {},
    variants: {
        solid: ({ colorScheme }) => ({
            ...(colorScheme === "primary" && solidPrimary),
        }),
    },
    defaultProps: {
        colorScheme: "primary",
    },
});

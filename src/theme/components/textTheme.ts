import { defineStyleConfig } from "@chakra-ui/react";

const textTheme = defineStyleConfig({
    baseStyle: {
        fontSize: {
            base: "sm",
            md: "md",
        },
        color: "text",
    },
    variants: {
        disabled: {
            color: "gray.300",
        },
        error: {
            color: "red.500",
        },
    },
});

export default textTheme;

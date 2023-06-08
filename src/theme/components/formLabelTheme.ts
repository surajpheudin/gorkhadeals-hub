import { defineStyleConfig } from "@chakra-ui/react";

const formLabelTheme = defineStyleConfig({
    baseStyle: {
        fontSize: {
            base: "sm",
            md: "md",
        },
        color: "text",
    },
});

export default formLabelTheme;

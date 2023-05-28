import { Avatar, Box } from "@chakra-ui/react";

const ShopButton = () => {
    const isActive = true;
    return (
        <Box as="button" pl={3} pr={3} position="relative">
            {isActive && (
                <Box
                    sx={{
                        content: `""`,
                        position: "absolute",
                        borderTopRightRadius: "3xl",
                        borderBottomRightRadius: "3xl",
                        backgroundColor: "blue.500",
                        width: "4px",
                        top: 0,
                        bottom: 0,
                        left: 0,
                    }}
                />
            )}

            <Avatar name="Dan" />
        </Box>
    );
};
export default ShopButton;

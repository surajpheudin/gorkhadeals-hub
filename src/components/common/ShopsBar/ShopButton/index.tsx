import { As, Avatar, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const ShopButton = ({ to }: IShopButton) => {
    const location = useLocation();
    const isActive = location.pathname === to;
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

            <Avatar name="Dan" size={"md"} />
        </Box>
    );
};
export default ShopButton;

interface IShopButton {
    icon?: As;
    to: string;
}

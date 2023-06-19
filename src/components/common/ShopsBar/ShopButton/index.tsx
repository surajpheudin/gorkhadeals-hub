import { Avatar, Box, Tooltip } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { addActiveShop, getActiveShop } from "@src/utils/commonFunc";
import { useNavigate } from "react-router-dom";

const ShopButton = ({ id, name }: IShopButton) => {
    const navigate = useNavigate();

    const to = NAVIGATION_ROUTES.SHOP.replace(":id", id?.toString());
    const isActive = getActiveShop() === id;

    const handleClick = () => {
        addActiveShop(id);
        navigate(to);
    };
    return (
        <Box as="button" px={3} position="relative" onClick={handleClick}>
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
            <Tooltip label={name}>
                <Avatar name={name} size={"md"} />
            </Tooltip>
        </Box>
    );
};
export default ShopButton;

interface IShopButton {
    id: string;
    name: string;
}

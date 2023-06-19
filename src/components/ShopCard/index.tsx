import { Box } from "@chakra-ui/react";
import Card from "@components/library/Card";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { addActiveShop } from "@src/utils/commonFunc";
import { useNavigate } from "react-router-dom";
import { IShopCard } from "./interface";

const ShopCard = ({
    displayName,
    registeredName,
    image,
    createdAt,
    id,
}: IShopCard) => {
    const navigate = useNavigate();
    const handleClick = () => {
        addActiveShop(id);
        navigate(NAVIGATION_ROUTES.SHOP.replace(":id", id?.toString()), {});
    };

    return (
        <Box
            p={{
                base: 4,
                lg: 6,
            }}
            borderWidth="1px"
            borderColor={"gray.200"}
            boxShadow={"0 4px 6px rgba(0,0,0,.04)"}
            borderRadius="md"
            cursor={"pointer"}
            tabIndex={0}
            _hover={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            onClick={handleClick}
        >
            <Card
                variant="one"
                image={image}
                title={displayName}
                description={registeredName}
                relativeDate={createdAt}
            />
        </Box>
    );
};

export default ShopCard;

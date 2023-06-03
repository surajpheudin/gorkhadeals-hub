import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { formatDaysAgo } from "@src/utils/date";
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
            <Flex alignItems={"center"} gap={4}>
                <Image
                    height={"32px"}
                    width={"32px"}
                    src={image}
                    fallbackSrc="/svg/shop.svg"
                />
                <Box>
                    <Heading fontWeight={"medium"} fontSize="md">
                        {displayName}
                    </Heading>
                    <Text color={"gray.700"}>{registeredName}</Text>
                </Box>
            </Flex>

            <Text mt={4} color={"gray.500"}>
                {formatDaysAgo(new Date(createdAt))}
            </Text>
        </Box>
    );
};

export default ShopCard;
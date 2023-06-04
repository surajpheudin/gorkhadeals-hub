import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ICardTwo } from "./interface";

const CardTwo = ({ image, title, label }: ICardTwo) => {
    return (
        <Flex alignItems={"center"} gap={4}>
            <Image
                height={"32px"}
                width={"32px"}
                src={image}
                fallbackSrc="/svg/shop.svg"
            />
            <Box>
                <Heading fontWeight={"medium"} fontSize="md">
                    {title}
                </Heading>
                <Text color={"gray.700"}>{label}</Text>
            </Box>
        </Flex>
    );
};

export default CardTwo;

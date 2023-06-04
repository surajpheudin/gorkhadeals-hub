import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { formatDaysAgo } from "@src/utils/date";
import { ICardOne } from "./interface";

const CardOne = ({ image, title, description, relativeDate }: ICardOne) => {
    return (
        <Box>
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
                    <Text color={"gray.700"}>{description}</Text>
                </Box>
            </Flex>

            {relativeDate && (
                <Text mt={4} color={"gray.500"}>
                    {formatDaysAgo(new Date(relativeDate))}
                </Text>
            )}
        </Box>
    );
};

export default CardOne;

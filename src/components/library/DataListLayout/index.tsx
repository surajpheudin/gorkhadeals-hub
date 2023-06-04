import { Box, Flex, Heading } from "@chakra-ui/react";
import { IDataListLayout } from "./interface";

const DataListLayout = ({ title, children }: IDataListLayout) => {
    return (
        <Box
            borderWidth={"1px"}
            borderColor="gray.400"
            borderRadius="md"
            overflow={"hidden"}
        >
            <Flex
                justifyContent={"space-between"}
                backgroundColor="gray.100"
                borderBottomWidth="1px"
                borderBottomColor={"gray.400"}
                py={4}
                px={6}
            >
                <Heading fontSize={"2xl"}>{title}</Heading>
            </Flex>
            <Box py={4} px={6}>
                {children}
            </Box>
        </Box>
    );
};

export default DataListLayout;

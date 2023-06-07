import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { IDataListLayout } from "./interface";

const DataListLayout = ({
    title,
    children,
    onAddClick,
    addButtonLabel,
}: IDataListLayout) => {
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
                {onAddClick && (
                    <Button
                        colorScheme={"primary"}
                        w={"120px"}
                        onClick={onAddClick}
                        width="180px"
                    >
                        {addButtonLabel || "Add"}
                    </Button>
                )}
            </Flex>
            <Box>{children}</Box>
        </Box>
    );
};

export default DataListLayout;

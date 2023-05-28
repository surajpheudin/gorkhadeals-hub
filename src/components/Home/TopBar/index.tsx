import { AddIcon, SearchIcon } from "@assets/svgs";
import {
    Button,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Icon,
} from "@chakra-ui/react";

const TopBar = () => {
    return (
        <Flex gap={4}>
            <InputGroup>
                <InputLeftElement pointerEvents="none" p={2.5} color="gray.400">
                    <SearchIcon />
                </InputLeftElement>
                <Input type="tel" placeholder="Search..." />
            </InputGroup>
            <Button colorScheme={"primary"} leftIcon={<Icon as={AddIcon} />}>
                Add Shop
            </Button>
        </Flex>
    );
};

export default TopBar;

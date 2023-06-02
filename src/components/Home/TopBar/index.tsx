import { AddIcon, SearchIcon } from "@assets/svgs";
import {
    Button,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Icon,
} from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
    const navigate = useNavigate();
    return (
        <Flex gap={4}>
            <InputGroup>
                <InputLeftElement pointerEvents="none" p={2.5} color="gray.400">
                    <SearchIcon />
                </InputLeftElement>
                <Input type="tel" placeholder="Search..." />
            </InputGroup>
            <Button
                colorScheme={"primary"}
                leftIcon={<Icon as={AddIcon} />}
                onClick={() => navigate(NAVIGATION_ROUTES.CREATE_SHOP)}
            >
                Add Shop
            </Button>
        </Flex>
    );
};

export default TopBar;

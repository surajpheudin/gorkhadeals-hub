import { AddIcon, SearchIcon } from "@assets/svgs";
import {
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Icon,
    Flex,
} from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { useNavigate } from "react-router-dom";

const TopBar = ({ setSearch }: ITopBar) => {
    const navigate = useNavigate();
    return (
        <Flex gap={4}>
            <InputGroup>
                <InputLeftElement pointerEvents="none" p={2.5} color="gray.400">
                    <SearchIcon />
                </InputLeftElement>
                <Input
                    type="tel"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                />
            </InputGroup>
            <Button
                colorScheme={"primary"}
                leftIcon={<Icon as={AddIcon} />}
                onClick={() => navigate(NAVIGATION_ROUTES.CREATE_SHOP)}
                minW="fit-content"
            >
                Add Shop
            </Button>
        </Flex>
    );
};

export default TopBar;

export interface ITopBar {
    setSearch: (value: string) => void;
}

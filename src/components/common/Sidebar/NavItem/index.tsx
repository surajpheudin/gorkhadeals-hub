import { As, Flex, Icon, Text } from "@chakra-ui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const NavItem = ({ icon, label, to }: INavItem) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const href = to.replace(":id", params?.id ?? "");
    const isActive = href === location.pathname;
    return (
        <Flex
            alignItems={"center"}
            gap={2}
            as="button"
            pl={2}
            pr={4}
            py={2}
            backgroundColor={isActive ? "gray.300" : "transparent"}
            _hover={{
                backgroundColor: isActive ? "gray.300" : "gray.200",
            }}
            onClick={() => navigate(href)}
        >
            <Icon as={icon} fontSize="lg" />
            <Text textTransform={"capitalize"}>{label}</Text>
        </Flex>
    );
};

export default NavItem;

interface INavItem {
    icon: As;
    label: string;
    to: string;
}

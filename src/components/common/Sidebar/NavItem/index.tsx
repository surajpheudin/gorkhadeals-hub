import { As, Flex, Icon, Text } from "@chakra-ui/react";

const NavItem = ({ icon, label }: INavItem) => {
    return (
        <Flex
            alignItems={"center"}
            gap={2}
            as="button"
            pl={2}
            pr={4}
            py={2}
            _hover={{
                backgroundColor: "gray.200",
            }}
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
}

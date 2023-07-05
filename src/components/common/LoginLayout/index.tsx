import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Switch,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

const LoginLayout = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box>
            <Flex px={4} py={2} position="fixed" left={0} right={0}>
                <FormControl
                    display="flex"
                    alignItems="center"
                    justifyContent={"flex-end"}
                >
                    <FormLabel htmlFor="email-alerts" mb="0">
                        Dark Mode
                    </FormLabel>
                    <Switch
                        isChecked={colorMode === "dark"}
                        id="email-alerts"
                        colorScheme={"facebook"}
                        onChange={toggleColorMode}
                    />
                </FormControl>
            </Flex>
            <Outlet />
            <Flex
                position={"fixed"}
                bottom={4}
                justifyContent={"space-between"}
                w="full"
                p={4}
            >
                <NavLink to={"/"}>
                    <Text>Terms of Service</Text>
                </NavLink>
                <NavLink to={"/"}>
                    <Text>Privacy Policy</Text>
                </NavLink>
            </Flex>
        </Box>
    );
};

export default LoginLayout;

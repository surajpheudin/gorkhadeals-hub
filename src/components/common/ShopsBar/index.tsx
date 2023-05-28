import { AddIcon, LogoutIcon } from "@assets/svgs";
import { Avatar, Box, Divider, Grid, Icon, IconButton } from "@chakra-ui/react";
import useSession from "@src/hooks/session";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { Link } from "react-router-dom";
import ShopButton from "./ShopButton";

const ShopsBar = () => {
    const { handleLogout } = useSession();
    return (
        <Grid
            backgroundColor="gray.200"
            h={"100vh"}
            overflowY="auto"
            alignContent="flex-start"
            gap={5}
            py={3}
            gridTemplateRows="auto 1fr auto"
            zIndex={"dropdown"}
            boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
        >
            <Box mx={"auto"}>
                <Box as={Link} to={NAVIGATION_ROUTES.HOME}>
                    <Avatar
                        name="Dan Abrahmov"
                        src="/logo/square.jpg"
                        borderWidth={"2px"}
                        borderColor="gray.300"
                        mb={5}
                    />
                </Box>
                {divider}
            </Box>
            <Grid gap={3} alignContent="flex-start">
                {new Array(5).fill(0).map((item, i) => (
                    <ShopButton key={i} to={item} />
                ))}
                <IconButton
                    backgroundColor={"gray.300"}
                    rounded="full"
                    icon={<Icon color={"black"} as={AddIcon} />}
                    aria-label={"add shop"}
                    mx="auto"
                />
            </Grid>
            <Box mx={"auto"}>
                {divider}
                <IconButton
                    rounded={"full"}
                    height="48px"
                    width="48px"
                    icon={<Icon as={LogoutIcon} fontSize="2xl" />}
                    aria-label={"logout"}
                    colorScheme="gray"
                    mt={5}
                    onClick={handleLogout}
                />
            </Box>
        </Grid>
    );
};

export default ShopsBar;

const divider = (
    <Divider
        borderColor={"gray.400"}
        borderWidth="2px"
        borderRadius={"full"}
        w="32px"
        mx={"auto"}
    />
);

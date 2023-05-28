import { LogoutIcon } from "@assets/svgs";
import { Avatar, Box, Divider, Grid, Icon, IconButton } from "@chakra-ui/react";
import ShopButton from "./ShopButton";

const ShopsBar = () => {
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
        >
            <Box mx={"auto"}>
                <Avatar name="Dan Abrahmov" src="/logo/square.jpg" mb={5} />
                {divider}
            </Box>
            <Grid gap={3} alignContent="flex-start">
                {new Array(5).fill(0).map((item) => (
                    <ShopButton key={item} />
                ))}
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

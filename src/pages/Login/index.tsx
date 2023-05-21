import { GoogleIcon } from "@assets/svgs";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import {
    DownloadFromAppstore,
    DownloadFromPlaystore,
    LOGO,
} from "@src/constants/images.constants";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <Grid
            placeItems="center"
            alignContent={"center"}
            sx={{
                minH: "100vh",
                "@supports (min-height: 100dvh)": {
                    minH: "100dvh",
                },
            }}
        >
            <Grid
                w={"full"}
                maxW="400px"
                gap={4}
                p={8}
                boxShadow={{ lg: "rgba(0,0,0,0.1) 0 0 10px" }}
            >
                <Image src={LOGO} height="50px" mx={"auto"} mb={6} />

                <Heading
                    fontSize={"md"}
                    fontWeight="medium"
                    textAlign="center"
                    mb={2}
                >
                    Log in to Gorkhadeals Hub
                </Heading>
                <NavLink
                    to="https://google.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Flex
                        justifyContent={"center"}
                        alignItems="center"
                        gap={2}
                        boxShadow="rgba(0,0,0,0.2) 1px 1px 5px 0"
                        p={3}
                        borderRadius="lg"
                    >
                        <GoogleIcon height={"20px"} />
                        <Text fontWeight={"semibold"}>Log in with Google</Text>
                    </Flex>
                </NavLink>
                <Box>
                    <Text py={4} textAlign="center">
                        Get the app
                    </Text>
                    <Flex justifyContent={"center"} flexWrap="wrap" gap={2}>
                        {DOWNLOADS.map(({ image, link, id }) => (
                            <NavLink key={id} to={link}>
                                <Image src={image} height={"40px"} />
                            </NavLink>
                        ))}
                    </Flex>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Login;

const DOWNLOADS = [
    {
        id: 1,
        image: DownloadFromAppstore,
        link: NAVIGATION_ROUTES.HOME,
    },
    {
        id: 2,
        image: DownloadFromPlaystore,
        link: NAVIGATION_ROUTES.HOME,
    },
];

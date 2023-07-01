import { GoogleIcon } from "@assets/svgs";
import {
    Box,
    Flex,
    Grid,
    Heading,
    Image,
    Spinner,
    Text,
} from "@chakra-ui/react";
import {
    DownloadFromAppstore,
    DownloadFromPlaystore,
    LOGO,
} from "@src/constants/images.constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const url = `${import.meta.env.VITE_APP_BACKEND_URL}/google`;

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
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
                    to={url}
                    tabIndex={0}
                    onClick={() => setIsLoading(true)}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems="center"
                        gap={2}
                        boxShadow="rgba(0,0,0,0.2) 1px 1px 5px 0"
                        p={3}
                        borderRadius="lg"
                        height={"45px"}
                    >
                        {isLoading ? (
                            <Spinner size={"sm"} />
                        ) : (
                            <>
                                <GoogleIcon height={"20px"} />
                                <Text fontWeight={"semibold"}>
                                    Log in with Google
                                </Text>
                            </>
                        )}
                    </Box>
                </NavLink>
                <Box>
                    <Text py={4} textAlign="center">
                        Get the app
                    </Text>
                    <Flex justifyContent={"center"} flexWrap="wrap" gap={2}>
                        {DOWNLOADS.map(({ image, link, id }) => (
                            <NavLink key={id} to={link} target={"_blank"}>
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
        link: "https://www.apple.com/app-store",
    },
    {
        id: 2,
        image: DownloadFromPlaystore,
        link: "https://play.google.com",
    },
];

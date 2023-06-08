import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <Box
            position={"fixed"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor="white"
            display={"grid"}
            placeItems="center"
            minH={"100vh"}
            textAlign={"center"}
        >
            <Box display={"grid"} gap={2}>
                <Text fontSize={"2xl"}>Oops!</Text>
                <Text>Sorry, an unexpected error has occurred.</Text>
                <Flex gap={2} mt={2}>
                    <Button
                        size={"sm"}
                        flexBasis={"50%"}
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </Button>
                    <Button
                        size={"sm"}
                        flexBasis={"50%"}
                        onClick={() => navigate(NAVIGATION_ROUTES.HOME)}
                    >
                        Return Home
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
};

export default ErrorPage;

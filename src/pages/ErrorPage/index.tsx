import { Box, Text } from "@chakra-ui/react";

const ErrorPage = () => {
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
            </Box>
        </Box>
    );
};

export default ErrorPage;

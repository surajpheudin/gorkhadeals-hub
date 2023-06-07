import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <Box
            display={"grid"}
            placeItems="center"
            minH={"100vh"}
            textAlign={"center"}
        >
            <Box display={"grid"} gap={5}>
                <Text fontSize={"4xl"}>404</Text>
                <Text fontSize={"2xl"}>Oops! Page Not Found</Text>
                <Text>
                    Sorry, the page you are looking for doesn&apos;t exist.
                </Text>
                <Button onClick={() => navigate(-1)}>Go Back</Button>
            </Box>
        </Box>
    );
}

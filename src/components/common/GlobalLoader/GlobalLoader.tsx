import { Box, Grid, Image, Progress } from "@chakra-ui/react";

const GlobalLoader = () => {
    return (
        <Box
            position={"fixed"}
            top={0}
            bottom={0}
            left={0}
            right={0}
            display="grid"
            placeItems={"center"}
        >
            <Grid gap={4}>
                <Image src="/logo/logo.png" height={"40px"} mx="auto" />
                <Progress
                    width={"200px"}
                    colorScheme={"blue"}
                    size="xs"
                    isIndeterminate
                />
            </Grid>
        </Box>
    );
};

export default GlobalLoader;

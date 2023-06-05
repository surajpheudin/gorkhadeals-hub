import { Box, Grid, Progress } from "@chakra-ui/react";

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
            <Grid gap={2}>
                <Progress colorScheme={"primary"} size="xs" isIndeterminate />
            </Grid>
        </Box>
    );
};

export default GlobalLoader;

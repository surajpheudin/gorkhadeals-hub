import { Box, Grid, GridProps } from "@chakra-ui/react";
import { spin } from "@src/theme/animations";

const ComponentLoader = (props: GridProps) => {
    return (
        <Grid h={"200px"} placeItems={"center"} {...props}>
            <Spinner />
        </Grid>
    );
};
export default ComponentLoader;

const Spinner = () => (
    <Grid
        gridTemplateColumns={"repeat(2,1fr)"}
        gap={2}
        sx={{
            animation: `${spin} 1s infinite linear`,
        }}
    >
        {[1, 2, 3, 4].map((item, i) => (
            <Box
                key={item}
                height={"10px"}
                width={"10px"}
                borderRadius={"full"}
                backgroundColor={i === 0 ? "blue.300" : "blue.200"}
            ></Box>
        ))}
    </Grid>
);

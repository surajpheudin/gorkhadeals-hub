import { Grid, GridProps, Text } from "@chakra-ui/react";

const NoData = (props: GridProps) => {
    return (
        <Grid placeItems={"center"} height="200px" {...props}>
            <Text textAlign={"center"}>No data found</Text>
        </Grid>
    );
};

export default NoData;

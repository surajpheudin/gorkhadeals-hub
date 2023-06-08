import { Box, Grid, Heading } from "@chakra-ui/react";
import InputField from "@components/common/InputField";
import TextArea from "@components/common/TextArea";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { control } = useForm();
    return (
        <Box>
            <Heading fontSize={"2xl"} mb={4}>
                Add Product
            </Heading>
            <Grid
                gap={2}
                boxShadow={
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                }
                p={4}
                borderRadius="md"
            >
                <InputField
                    name="name"
                    control={control}
                    label="Name"
                    placeholder="Nike Men's Basketball Shoe"
                />
                <TextArea
                    name="description"
                    control={control}
                    label="Description"
                    placeholder=""
                />
            </Grid>
        </Box>
    );
};

export default AddProduct;

import { AddIcon } from "@assets/svgs";
import { Box, Button, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import Dropzone from "@components/common/Dropzone/Dropzone";
import InputField from "@components/common/InputField";
import SelectField from "@components/common/SelectField";
import TextArea from "@components/common/TextArea";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { control } = useForm({
        defaultValues,
    });

    return (
        <Box>
            <Heading fontSize={"2xl"} mb={4}>
                Add Product
            </Heading>
            <Grid gap={4}>
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
                <Grid
                    boxShadow={
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                    }
                    p={4}
                    borderRadius="md"
                >
                    <Dropzone
                        name="image"
                        control={control}
                        accept="image/png, image/jpg, image/jpeg"
                        maxSizeInMb={2}
                        label="Featured Image"
                    />
                </Grid>
                <Grid
                    gap={4}
                    boxShadow={
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                    }
                    p={4}
                    borderRadius="md"
                >
                    <SelectField
                        name="category"
                        control={control}
                        options={[]}
                        label="Category"
                        placeholder="Select Category"
                    />
                    <SelectField
                        name="status"
                        control={control}
                        options={PRODUCT_STATUS_OPTIONS}
                        label="Status"
                    />
                </Grid>

                <Grid
                    gap={4}
                    boxShadow={
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                    }
                    p={4}
                    borderRadius="md"
                    justifyContent={"flex-start"}
                >
                    <Text fontWeight={"semibold"}>Variants</Text>
                    <Button
                        variant={"link"}
                        colorScheme={"blue"}
                        leftIcon={<Icon as={AddIcon} color="blue.600" />}
                    >
                        Add options
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AddProduct;

const defaultValues = {
    category: "",
    status: "active",
    name: "",
    description: "",
    image: [],
};

const PRODUCT_STATUS_OPTIONS = [
    {
        label: "Active",
        value: "active",
    },
    {
        label: "Draft",
        value: "draft",
    },
];

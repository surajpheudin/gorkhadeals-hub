import { Box, Button, Flex, Grid, Heading } from "@chakra-ui/react";
import Dropzone from "@components/common/Dropzone/Dropzone";
import InputField from "@components/common/InputField";
import SelectField from "@components/common/SelectField";
import TextArea from "@components/common/TextArea";
import { useForm } from "react-hook-form";
import { IAddProductFormData } from "./interface";
import ProductVariantForm from "./ProductVariantForm";

const AddProduct = () => {
    const methods = useForm<IAddProductFormData>({
        defaultValues,
    });

    const { control } = methods;

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
                >
                    <ProductVariantForm methods={methods} />
                </Grid>
            </Grid>
            <Flex mt={6} justifyContent="flex-end">
                <Button width="200px" colorScheme={"primary"}>
                    Save
                </Button>
            </Flex>
        </Box>
    );
};

export default AddProduct;

const defaultValues: IAddProductFormData = {
    category: "",
    status: "active",
    name: "",
    description: "",
    image: null,
    options: [],
    price: "",
    stock: "",
    sku: "",
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

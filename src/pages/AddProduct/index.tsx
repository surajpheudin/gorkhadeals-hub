import { Button, Flex, Grid, Heading } from "@chakra-ui/react";
import Dropzone from "@components/common/Dropzone/Dropzone";
import InputField from "@components/common/InputField";
import SelectField from "@components/common/SelectField";
import TextArea from "@components/common/TextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddProduct } from "@src/services/product/mutations";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { AddProductSchema, IAddProductFormData } from "./interface";
import ProductVariantForm from "./ProductVariantForm";

const AddProduct = () => {
    const params = useParams();
    const { mutate, isLoading } = useAddProduct();
    const methods = useForm<IAddProductFormData>({
        defaultValues,
        resolver: yupResolver(AddProductSchema),
    });

    const { control, handleSubmit } = methods;

    const onSubmit = (data: IAddProductFormData) => {
        mutate(
            {
                description: data.description,
                name: data.name,
                status: data.status,
                stock: +data.stock,
                price: +data.price,
                sku: data.sku,
                shopId: params?.id ?? "",
                featuredImage: "",
            },
            {
                onSuccess: () => {
                    methods.reset();
                },
            }
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <Button
                    type="submit"
                    width="200px"
                    colorScheme={"primary"}
                    isLoading={isLoading}
                >
                    Save
                </Button>
            </Flex>
        </form>
    );
};

export default AddProduct;

enum ProductStatus {
    ACTIVE = "ACTIVE",
    DRAFT = "DRAFT",
}

const defaultValues: IAddProductFormData = {
    category: "",
    status: ProductStatus.ACTIVE,
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
        value: ProductStatus.ACTIVE,
    },
    {
        label: "Draft",
        value: ProductStatus.DRAFT,
    },
];

import { AddIcon } from "@assets/svgs";
import {
    Box,
    Button,
    Divider,
    Flex,
    Grid,
    Heading,
    Icon,
    Text,
} from "@chakra-ui/react";
import Dropzone from "@components/common/Dropzone/Dropzone";
import InputField from "@components/common/InputField";
import SelectField from "@components/common/SelectField";
import TextArea from "@components/common/TextArea";
import { useFieldArray, useForm } from "react-hook-form";
import { IAddProductFormData } from "./interface";
import VariantTable from "./VariantTable";

const AddProduct = () => {
    const methods = useForm<IAddProductFormData>({
        defaultValues,
    });

    const { control } = methods;

    const { fields: optionFields, append } = useFieldArray({
        control,
        name: "options",
    });

    const showAddOptions = optionFields.length < 2;
    const handleAddOptions = () => {
        if (showAddOptions) {
            append({
                name: "",
                values: [],
            });
        }
    };

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
                    <Text fontWeight={"semibold"}>Variants</Text>

                    {optionFields.map((field, index) => (
                        <Grid key={field.id} gap={4}>
                            <SelectField
                                label="Option Name"
                                name={`options.${index}.name` as const}
                                control={control}
                                options={PRODUCT_VARIANT_OPTIONS?.filter(
                                    (item) =>
                                        !optionFields.some(
                                            (field) => field.name === item.value
                                        )
                                )}
                                placeholder="Choose an option name"
                            />
                            <InputField
                                label="Option Values"
                                name={`options.${index}.values` as const}
                                control={control}
                            />
                            <Divider borderColor={"gray.400"} />
                        </Grid>
                    ))}

                    {showAddOptions && (
                        <Button
                            variant={"link"}
                            colorScheme={"blue"}
                            leftIcon={<Icon as={AddIcon} color="blue.600" />}
                            onClick={handleAddOptions}
                            w="fit-content"
                            mb={2}
                        >
                            {optionFields.length > 0
                                ? "Add more option"
                                : "Add option"}
                        </Button>
                    )}

                    <VariantTable
                        methods={methods}
                        optionFields={optionFields}
                    />
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

const PRODUCT_VARIANT_OPTIONS = [
    {
        label: "Size",
        value: "size",
    },
    {
        label: "Color",
        value: "color",
    },
];

import { AddIcon } from "@assets/svgs";
import {
    Button,
    Divider,
    Grid,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Icon,
    useColorModeValue,
    Flex,
} from "@chakra-ui/react";
import CreatableSelect from "@components/common/CreatableSelect";
import InputField from "@components/common/InputField";
import SelectField from "@components/common/SelectField";
import { useState } from "react";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { IAddProductFormData } from "../interface";
import VariantTable from "../VariantTable";

const ProductVariantForm = ({ methods }: IProductVariantForm) => {
    const colors = useColorModeValue(
        ["white", "purple.50"],
        ["black", "purple.900"]
    );
    const [tabIndex, setTabIndex] = useState(0);
    const bg = colors[tabIndex];
    const { control } = methods;
    const { fields: optionFields, append } = useFieldArray({
        control: methods.control,
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
        <Tabs
            variant="enclosed"
            onChange={(index) => setTabIndex(index)}
            bg={bg}
        >
            <TabList>
                <Tab>
                    <Text fontWeight={"semibold"}>Default Variant</Text>
                </Tab>
                <Tab>
                    <Text fontWeight={"semibold"}>Multiple Variants</Text>
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Grid gap={2}>
                        <Flex gap={4}>
                            <InputField
                                name="price"
                                control={control}
                                label="Price"
                                type="number"
                                placeholder="0"
                            />
                            <InputField
                                name="stock"
                                control={control}
                                label="Stock"
                                type="number"
                                placeholder="0"
                            />
                        </Flex>
                        <InputField
                            name="sku"
                            control={control}
                            label="SKU"
                            placeholder="e.g. XYZ12345"
                        />
                    </Grid>
                </TabPanel>
                <TabPanel>
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
                            <CreatableSelect />
                            <Divider borderColor={"gray.400"} mb={4} />
                        </Grid>
                    ))}

                    {showAddOptions && (
                        <Button
                            variant={"link"}
                            colorScheme={"blue"}
                            leftIcon={<Icon as={AddIcon} color="blue.600" />}
                            onClick={handleAddOptions}
                            w="fit-content"
                            mb={4}
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
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};
export default ProductVariantForm;

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

interface IProductVariantForm {
    methods: UseFormReturn<IAddProductFormData>;
}

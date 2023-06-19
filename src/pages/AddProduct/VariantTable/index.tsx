import { Box, Button } from "@chakra-ui/react";
import DataTable from "@components/common/DataTable";
import InputField from "@components/common/InputField";
import { createColumnHelper } from "@tanstack/react-table";
import { FieldArrayWithId, UseFormReturn } from "react-hook-form";
import { IAddProductFormData } from "../interface";

const VariantTable = ({ methods }: IVariantFieldTable) => {
    const data: IVariantField[] = methods
        .watch("options")
        ?.some((item) => item?.values?.length > 0)
        ? methods.watch("options")?.map((item, i) => ({
              id: i.toString(),
              price: 0,
              quantity: 0,
              sku: "",
          }))
        : [];

    const columnHelper = createColumnHelper<IVariantField>();
    const columns = [
        columnHelper.accessor("id", {
            header: "Variant",
            cell: (info) => +info.row.id + 1,
            maxSize: 10,
        }),
        columnHelper.accessor("price", {
            cell: () => (
                <InputField
                    name="price"
                    control={methods.control}
                    placeholder="0"
                />
            ),
        }),
        columnHelper.accessor("id", {
            header: () => "Stock",
            cell: () => (
                <InputField
                    name="stock"
                    control={methods.control}
                    placeholder="0"
                />
            ),
        }),
        columnHelper.accessor("id", {
            header: () => "SKU",
            cell: () => (
                <InputField
                    name="sku"
                    control={methods.control}
                    placeholder="e.g. XYZ12345"
                />
            ),
            minSize: 300,
        }),
        columnHelper.accessor("id", {
            header: () => "Action",
            cell: () => <Button>Edit</Button>,
        }),
    ];
    return (
        <Box>
            <DataTable
                data={data || []}
                columns={columns}
                primaryKey={"id"}
                hideHeader={data.length === 0}
            />
        </Box>
    );
};

export default VariantTable;

interface IVariantFieldTable {
    methods: UseFormReturn<IAddProductFormData>;
    optionFields: FieldArrayWithId<IAddProductFormData, "options", "id">[];
}

interface IVariantField {
    id: string;
    price: number;
    quantity: number;
    sku: string;
}

import { Box, Button } from "@chakra-ui/react";
import DataTable from "@components/common/DataTable";
import InputField from "@components/common/InputField";
import { createColumnHelper } from "@tanstack/react-table";
import { FieldArrayWithId, UseFormReturn } from "react-hook-form";
import { IAddProductFormData } from "../interface";

const VariantTable = ({ methods }: IVariantFieldTable) => {
    const data: IVariantField[] = [];

    const columnHelper = createColumnHelper<IVariantField>();
    const columns = [
        columnHelper.accessor("id", {
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("price", {
            minSize: 300,
            cell: () => <InputField name="name" control={methods.control} />,
        }),
        columnHelper.accessor("id", {
            header: () => "Stock",
            cell: () => <InputField name="name" control={methods.control} />,
        }),
        columnHelper.accessor("id", {
            header: () => "SKU",
            cell: () => <InputField name="name" control={methods.control} />,
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

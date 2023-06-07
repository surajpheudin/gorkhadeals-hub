import { TableContainerProps, TableProps } from "@chakra-ui/react";
import { ColumnDef, Row } from "@tanstack/react-table";

{
    /**
     * @desc I made "id" required to implement feature for selecting rows. I am assuming all rows in table will have it's unique id. If you find this "more than needed", please feel free to optimize it.
     **/
}
export interface IDataTable<T> extends TableProps {
    data: T[];
    // FIXME: fix any type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: ColumnDef<T, any>[];
    isRowSelectable?: boolean;
    onDeleteAll?: (rowIds: string[]) => void;
    isLoading?: boolean;
    isError?: boolean;
    setSelectedData?: (row: T[]) => void;
    primaryKey: keyof T;
    onRowClick?: (row: Row<T>) => void;
    tableContainerProps?: TableContainerProps;
    noDataText?: string;
    hideHeader?: boolean;
}

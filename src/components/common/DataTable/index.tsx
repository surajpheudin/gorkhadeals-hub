import {
    TableContainer,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Tooltip,
    Box,
    Checkbox,
    Progress,
} from "@chakra-ui/react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    Row,
} from "@tanstack/react-table";
import { useState } from "react";
import NoData from "../NoData";
import { IDataTable } from "./interface";

const DataTable = <T,>(props: IDataTable<T>) => {
    const {
        data,
        columns,
        isRowSelectable,
        primaryKey,
        onRowClick,
        isLoading,
        tableContainerProps,
        ...others
    } = props;
    const [selectedRows, setSelectRows] = useState<string[]>([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const handleChangeSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectRows(
                table
                    .getRowModel()
                    .rows.map(
                        ({ original }) =>
                            original?.[primaryKey]?.toString() || ""
                    )
            );
        } else {
            setSelectRows([]);
        }
    };

    const handleSelectRow = (
        e: React.ChangeEvent<HTMLInputElement>,
        row: Row<T>
    ) => {
        if (e.target.checked) {
            setSelectRows((prev) => [
                ...prev,
                row.original?.[primaryKey]?.toString() || "",
            ]);
        } else {
            setSelectRows((prev) =>
                prev.filter(
                    (item) => item !== row.original?.[primaryKey]?.toString()
                )
            );
        }
    };

    return (
        <TableContainer
            backgroundColor={"white"}
            borderRadius={"md"}
            pb={5}
            sx={{
                "&::-webkit-scrollbar": {
                    borderRadius: "full",
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "white",
                    borderRadius: "full",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "blue.600",
                    height: "12px",
                    border: "5px solid transparent",
                    borderColor: "gray.50",
                    borderRadius: "full",
                },

                fontSize: {
                    base: "sm",
                    md: "md",
                },
            }}
            overflowY="auto"
            position={"relative"}
            {...tableContainerProps}
        >
            {isLoading && <Progress isIndeterminate size={"xs"} />}
            <Table {...others}>
                <Thead backgroundColor={"gray.200"} position="sticky" top={0}>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {isRowSelectable && (
                                <Th>
                                    <Tooltip
                                        hasArrow
                                        label="Select All"
                                        bg="gray.50"
                                        color="black"
                                    >
                                        <Box>
                                            <Checkbox
                                                borderColor={"gray.400"}
                                                isChecked={
                                                    selectedRows.length ===
                                                    table.getRowModel().rows
                                                        .length
                                                }
                                                onChange={handleChangeSelectAll}
                                            />
                                        </Box>
                                    </Tooltip>
                                </Th>
                            )}
                            {headerGroup.headers.map((header) => (
                                <Th
                                    key={header.id}
                                    py={3}
                                    textTransform="capitalize"
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>

                <Tbody>
                    {table.getRowModel().rows.map((row) => (
                        <Tr
                            key={row.id}
                            onClick={() => {
                                onRowClick && onRowClick(row);
                            }}
                            cursor={onRowClick ? "pointer" : "auto"}
                            _hover={{
                                ...(onRowClick && {
                                    backgroundColor: "gray.100",
                                }),
                            }}
                        >
                            {isRowSelectable && (
                                <Td>
                                    <Checkbox
                                        isChecked={selectedRows.includes(
                                            row.original?.[
                                                primaryKey
                                            ]?.toString() || ""
                                        )}
                                        onChange={(e) =>
                                            handleSelectRow(e, row)
                                        }
                                    ></Checkbox>
                                </Td>
                            )}
                            {row.getVisibleCells().map((cell) => (
                                <Td key={cell.id} fontSize="sm">
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            {!isLoading && table.getRowModel().rows.length === 0 && (
                <NoData height={"300px"} />
            )}
        </TableContainer>
    );
};

export default DataTable;

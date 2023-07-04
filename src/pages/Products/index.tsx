import { DeleteIcon, EditIcon } from "@assets/svgs";
import {
    Badge,
    Box,
    Flex,
    Icon,
    IconButton,
    Image,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import ConfirmDeleteForm from "@components/common/ConfirmDeleteForm";
import DataTable from "@components/common/DataTable";
import Modal from "@components/common/Modal";
import DataListLayout from "@components/library/DataListLayout";
import { IProduct } from "@src/@types/modal";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { useDeleteProduct } from "@src/services/product/mutations";
import { useGetProducts } from "@src/services/product/queries";
import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id ?? "";
    const [selectedProduct, setSelectedProduct] = useState<IProduct>();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { data, isFetching } = useGetProducts({
        search: "",
        shopId: id,
    });
    const { mutate: deleteProduct, isLoading: isLoadingDelete } =
        useDeleteProduct();

    const handleDeleteToggler = (product: IProduct) => () => {
        setSelectedProduct(product);
        onOpen();
    };

    const handleDelete = () => {
        deleteProduct(selectedProduct?.id ?? "", {
            onSuccess: () => onClose(),
        });
    };
    const handleEdit = (product: IProduct) => () => {
        navigate(
            `${NAVIGATION_ROUTES.ADD_SHOP_PRODUCT.replace(
                ":id",
                product?.shopId
            )}`,
            {
                state: {
                    edit: true,
                    productId: product?.id,
                },
            }
        );
    };
    const columnHelper = createColumnHelper<IProduct>();
    const columns = [
        columnHelper.accessor("featuredImage", {
            header: "",
            cell: (info) => (
                <Image
                    height={"45px"}
                    minW={"45px"}
                    src={info.getValue()}
                    fallbackSrc="/jpg/noimage.jpg"
                    border={"1px solid"}
                    borderColor="gray.300"
                />
            ),
            maxSize: 1,
        }),
        columnHelper.accessor("name", {
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("status", {
            cell: (info) => (
                <Badge
                    colorScheme={
                        info.getValue() === "ACTIVE" ? "green" : "orange"
                    }
                >
                    {info.getValue()?.toLowerCase()}
                </Badge>
            ),
        }),
        columnHelper.accessor("variants", {
            cell: (info) => {
                const totalStock = info.getValue()?.reduce((acc, curr) => {
                    acc = acc + (curr.stock ?? 0);
                    return acc;
                }, 0);
                const numberOfVariants = info.getValue()?.length;

                return (
                    <Flex gap={1}>
                        <Text
                            color={totalStock === 0 ? "red.500" : "black"}
                            fontSize="sm"
                        >
                            {totalStock} in stock
                        </Text>
                        {numberOfVariants > 1 && (
                            <Text>for {numberOfVariants} variants</Text>
                        )}
                    </Flex>
                );
            },
        }),
        columnHelper.accessor("id", {
            header: () => <Text textAlign={"center"}>Action</Text>,
            cell: (info) => {
                return (
                    <ActionButtons
                        onEdit={handleEdit(info.row.original)}
                        onDelete={handleDeleteToggler(info.row.original)}
                    />
                );
            },
            maxSize: 1,
        }),
    ];

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ConfirmDeleteForm
                    onClose={onClose}
                    onDelete={handleDelete}
                    isLoading={isLoadingDelete}
                >
                    <Text>
                        Do you really want to delete product
                        <b> {selectedProduct?.name}</b> ?
                    </Text>
                </ConfirmDeleteForm>
            </Modal>
            <Box>
                <DataListLayout
                    title="Products"
                    addButtonLabel="Add Product"
                    onAddClick={() =>
                        navigate(
                            NAVIGATION_ROUTES.ADD_SHOP_PRODUCT.replace(
                                ":id",
                                id
                            )
                        )
                    }
                >
                    <DataTable
                        data={data || []}
                        columns={columns}
                        isLoading={isFetching}
                        primaryKey={"id"}
                        noDataText="There are no products now."
                        size={"sm"}
                    />
                </DataListLayout>
            </Box>
        </>
    );
};

export default Products;

function ActionButtons({
    onEdit,
    onDelete,
}: {
    onEdit?: () => void;
    onDelete?: () => void;
}) {
    return (
        <Flex gap={3} justifyContent="center">
            <IconButton
                icon={<Icon as={EditIcon} fontSize="xl" />}
                aria-label={"Edit product"}
                onClick={onEdit}
            />
            <IconButton
                icon={<Icon as={DeleteIcon} fontSize="xl" />}
                aria-label={"Delete product"}
                onClick={onDelete}
            />
        </Flex>
    );
}

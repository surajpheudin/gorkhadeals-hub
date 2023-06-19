import { DeleteIcon, EditIcon } from "@assets/svgs";
import {
    Badge,
    Box,
    Flex,
    Icon,
    IconButton,
    Image,
    Text,
} from "@chakra-ui/react";
import DataTable from "@components/common/DataTable";
import DataListLayout from "@components/library/DataListLayout";
import { IProduct } from "@src/@types/modal";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { useGetProducts } from "@src/services/product/queries";
import { createColumnHelper } from "@tanstack/react-table";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id ?? "";

    const { data, isLoading } = useGetProducts({
        search: "",
    });
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
            cell: () => <ActionButtons productId={id} />,
            maxSize: 1,
        }),
    ];

    return (
        <Box>
            <DataListLayout
                title="Products"
                addButtonLabel="Add Product"
                onAddClick={() =>
                    navigate(
                        NAVIGATION_ROUTES.ADD_SHOP_PRODUCT.replace(":id", id)
                    )
                }
            >
                <DataTable
                    data={data || []}
                    columns={columns}
                    isLoading={isLoading}
                    primaryKey={"id"}
                    noDataText="There are no products now."
                    size={"sm"}
                />
            </DataListLayout>
        </Box>
    );
};

export default Products;

function ActionButtons({ productId }: { productId: string }) {
    console.log(productId);
    return (
        <Flex gap={3} justifyContent="center">
            <IconButton
                icon={<Icon as={EditIcon} fontSize="xl" />}
                aria-label={"Edit product"}
            />
            <IconButton
                icon={<Icon as={DeleteIcon} fontSize="xl" />}
                aria-label={"Delete product"}
            />
        </Flex>
    );
}

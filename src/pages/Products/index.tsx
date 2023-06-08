import { Box } from "@chakra-ui/react";
import DataListLayout from "@components/library/DataListLayout";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id ?? "";

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
                kk
            </DataListLayout>
        </Box>
    );
};

export default Products;

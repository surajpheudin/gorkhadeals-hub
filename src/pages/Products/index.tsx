import { Box } from "@chakra-ui/react";
import DataListLayout from "@components/library/DataListLayout";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <DataListLayout
                title="Products"
                addButtonLabel="Add Product"
                onAddClick={() => navigate(NAVIGATION_ROUTES.ADD_SHOP_PRODUCT)}
            >
                kk
            </DataListLayout>
        </Box>
    );
};

export default Products;

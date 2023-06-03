import { Box, Heading } from "@chakra-ui/react";
import GlobalLoader from "@components/common/GlobalLoader/GlobalLoader";
import { useGetShop } from "@src/services/shop/queries";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";

const Shop = () => {
    const params = useParams();
    const id = params?.id ?? "";

    const { data: shop, isLoading, isError } = useGetShop(id);
    if (isLoading) {
        return <GlobalLoader />;
    }
    if (isError) {
        return <ErrorPage />;
    }
    return (
        <Box>
            <Heading fontSize={"2xl"} mb={4}>
                {shop?.displayName}
            </Heading>
        </Box>
    );
};

export default Shop;

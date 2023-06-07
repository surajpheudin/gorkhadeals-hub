import { Box, Heading } from "@chakra-ui/react";
import ComponentLoader from "@components/library/ComponentLoader";
import { useGetShop } from "@src/services/shop/queries";
import { useParams } from "react-router-dom";

const Shop = () => {
    const params = useParams();
    const id = params?.id ?? "";

    const { isLoading, isError } = useGetShop(id);
    console.log("isError", isError);

    if (isLoading) {
        return <ComponentLoader />;
    }
    if (isError) {
        throw Error();
    }
    return (
        <Box>
            <Heading fontSize={"2xl"} mb={4}>
                {/* {shop?.displayName} */}
            </Heading>
        </Box>
    );
};

export default Shop;

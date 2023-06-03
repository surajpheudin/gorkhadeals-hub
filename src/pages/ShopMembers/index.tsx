import { Box, Heading } from "@chakra-ui/react";
import GlobalLoader from "@components/common/GlobalLoader/GlobalLoader";
import NoMembers from "@components/NoMembers";
import { useGetShop } from "@src/services/shop/queries";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";

const ShopMembers = () => {
    const params = useParams();
    const id = params?.id ?? "";

    // const { isLoading, isError } = useGetShop(id);
    // if (isLoading) {
    //     return <GlobalLoader />;
    // }
    // if (isError) {
    //     return <ErrorPage />;
    // }
    return (
        <Box>
            <Heading fontSize={"2xl"} mb={4}>
                Manage Access
            </Heading>
            <NoMembers />
        </Box>
    );
};

export default ShopMembers;

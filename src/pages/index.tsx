import { Box, Grid } from "@chakra-ui/react";
import TopBar from "@components/Home/TopBar";
import ShopCard from "@components/ShopCard";
import { debounce } from "lodash";
import { useGetShops } from "@src/services/shop/queries";
import { useCallback, useState } from "react";
import ErrorPage from "./ErrorPage";
import NoData from "@components/common/NoData";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const { data, isError } = useGetShops({
        search,
    });

    const handleSearch = useCallback(
        debounce((value) => {
            setSearch(value);
        }, 1000),
        []
    );

    if (isError) {
        return <ErrorPage />;
    }
    return (
        <Box p={4}>
            <TopBar setSearch={handleSearch} />

            {data?.length === 0 ? (
                <NoData
                    mt={8}
                    buttonLabel="Add Shop"
                    onClick={() => navigate(NAVIGATION_ROUTES.CREATE_SHOP)}
                >
                    You haven&apos;t created any shops yet
                </NoData>
            ) : (
                <Grid
                    mt={"12"}
                    gridTemplateColumns={"repeat(auto-fill,minmax(300px,1fr))"}
                    gap={5}
                >
                    {data?.map((item) => (
                        <ShopCard key={item?.id} {...item} />
                    ))}
                </Grid>
            )}
        </Box>
    );
};
export default Home;

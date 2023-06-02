import { Box, Button, Flex } from "@chakra-ui/react";
import withAuth from "@components/hoc/withAuth";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import ShopsBar from "../ShopsBar";
import Sidebar from "../Sidebar";

const DashbaordLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const hideSidebar = HIDE_SIDEBAR_AT.includes(location.pathname);

    const hideBackButton = location.pathname === NAVIGATION_ROUTES.HOME;

    return (
        <Flex>
            <ShopsBar />
            <Flex flexGrow={1}>
                {!hideSidebar && <Sidebar />}
                <Box flexGrow={1} backgroundColor="white">
                    <Header />
                    <Box
                        flexGrow={1}
                        as="main"
                        h={"calc(100vh - 60px)"}
                        overflowY="auto"
                        p={5}
                    >
                        {!hideBackButton && (
                            <Flex mb={5}>
                                <Button
                                    width={"100px"}
                                    onClick={() => navigate(-1)}
                                >
                                    Back
                                </Button>
                            </Flex>
                        )}
                        <Outlet />
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};

export default withAuth(DashbaordLayout);

const HIDE_SIDEBAR_AT: string[] = [];

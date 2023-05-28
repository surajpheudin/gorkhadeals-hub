import { Box, Flex } from "@chakra-ui/react";
import withAuth from "@components/hoc/withAuth";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import ShopsBar from "../ShopsBar";
import Sidebar from "../Sidebar";

const DashbaordLayout = () => {
    const location = useLocation();
    const hideSidebar = HIDE_SIDEBAR_AT.includes(location.pathname);
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
                    >
                        <Outlet />
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};

export default withAuth(DashbaordLayout);

const HIDE_SIDEBAR_AT: string[] = [];

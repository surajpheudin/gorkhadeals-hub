import { Box, Flex } from "@chakra-ui/react";
import withAuth from "@components/hoc/withAuth";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import ShopsBar from "../ShopsBar";
import Sidebar from "../Sidebar";

const DashbaordLayout = () => {
    return (
        <Flex>
            <ShopsBar />
            <Box flexGrow={1}>
                <Header />
                <Flex>
                    <Sidebar />
                    <Box
                        flexGrow={1}
                        as="main"
                        h={"calc(100vh - 60px)"}
                        overflowY="auto"
                    >
                        <Outlet />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default withAuth(DashbaordLayout);

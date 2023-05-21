import { Box } from "@chakra-ui/react";
import withAuth from "@components/hoc/withAuth";
import { Outlet } from "react-router-dom";

const DashbaordLayout = () => {
    return (
        <Box>
            <Outlet />
        </Box>
    );
};

export default withAuth(DashbaordLayout);

import { Box, Button, Flex } from "@chakra-ui/react";
import withAuth from "@components/hoc/withAuth";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { createContext, useCallback, useMemo, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header, { HEADER_HEIGHT } from "../Header";
import ShopsBar from "../ShopsBar";
import Sidebar from "../Sidebar";

export const LayoutContext = createContext({} as ILayoutContext);

const DashbaordLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const ref = useRef<HTMLDivElement | null>(null);
    const hideSidebar = HIDE_SIDEBAR_AT.includes(location.pathname);

    const hideBackButton = [NAVIGATION_ROUTES.HOME].includes(location.pathname);

    const scrollToTop = useCallback(() => {
        ref.current &&
            ref.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
    }, []);

    const value = useMemo(
        () => ({
            scrollToTop,
        }),
        []
    );

    return (
        <Flex>
            <ShopsBar />
            <Flex flexGrow={1}>
                {!hideSidebar && <Sidebar />}
                <Box flexGrow={1} backgroundColor="white">
                    <Header />
                    <Box
                        ref={ref}
                        flexGrow={1}
                        as="main"
                        h={`calc(100vh - ${HEADER_HEIGHT}px)`}
                        overflowY="auto"
                        p={5}
                    >
                        <LayoutContext.Provider value={value}>
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
                        </LayoutContext.Provider>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};

export default withAuth(DashbaordLayout);

const HIDE_SIDEBAR_AT: string[] = [
    NAVIGATION_ROUTES.HOME,
    NAVIGATION_ROUTES.CREATE_SHOP,
    NAVIGATION_ROUTES.SHOP_INVITAIONS,
];

interface ILayoutContext {
    scrollToTop: () => void;
}

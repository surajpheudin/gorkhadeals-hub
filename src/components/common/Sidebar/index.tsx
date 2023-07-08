import {
    AddBusinessIcon,
    BoxesIcon,
    DashboardIcon,
    PeopleIcon,
    SettingsIcon,
    ShoppingCartIcon,
} from "@assets/svgs";
import { Flex, Grid, Text } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { useGetShop } from "@src/services/shop/queries";
import { useParams } from "react-router-dom";
import { HEADER_HEIGHT } from "../Header";
import NavItem from "./NavItem";

const Sidebar = () => {
    const params = useParams();
    const id = params.id ?? "";

    const { data: shop } = useGetShop(id);
    return (
        <Grid
            alignContent={"flex-start"}
            pb={2}
            boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
            gap={1}
            h={"100vh"}
            backgroundColor="gray.50"
            zIndex={"dropdown"}
            minW={"250px"}
            maxW={"250px"}
        >
            <Flex
                px={2}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                height={`${HEADER_HEIGHT}px`}
                alignItems="center"
                justifyContent={"center"}
            >
                <Text
                    fontSize={"xl"}
                    textAlign={"center"}
                    fontWeight="medium"
                    noOfLines={1}
                >
                    {shop?.displayName}
                </Text>
            </Flex>
            {SHOP_MENUS.map(({ icon, label, to }) => (
                <NavItem key={label} icon={icon} label={label} to={to} />
            ))}
        </Grid>
    );
};

export default Sidebar;

const SHOP_MENUS = [
    {
        icon: DashboardIcon,
        label: "Dashboard",
        to: NAVIGATION_ROUTES.SHOP,
    },
    {
        icon: PeopleIcon,
        label: "Members",
        to: NAVIGATION_ROUTES.SHOP_MEMBERS,
    },
    {
        icon: BoxesIcon,
        label: "Products",
        to: NAVIGATION_ROUTES.SHOP_PRODUCTS,
    },
    {
        icon: ShoppingCartIcon,
        label: "Orders",
        to: NAVIGATION_ROUTES.HOME,
    },
    {
        icon: AddBusinessIcon,
        label: "Integration (Addons)",
        to: "",
    },
    {
        icon: SettingsIcon,
        label: "Preference",
        to: "",
    },
];

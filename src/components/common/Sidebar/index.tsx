import {
    AddBusinessIcon,
    InviteIcon,
    PeopleIcon,
    SettingsIcon,
} from "@assets/svgs";
import { Flex, Grid, Text } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { useLocation } from "react-router-dom";
import { HEADER_HEIGHT } from "../Header";
import NavItem from "./NavItem";

const Sidebar = () => {
    const location = useLocation();
    const isUserSidebar = [
        NAVIGATION_ROUTES.HOME,
        NAVIGATION_ROUTES.CREATE_SHOP,
    ].includes(location.pathname);

    const menu = isUserSidebar ? MENUS : SHOP_MENUS;
    return (
        <Grid
            alignContent={"flex-start"}
            pb={2}
            boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
            gap={1}
            h={"100vh"}
            backgroundColor="gray.50"
            zIndex={"dropdown"}
            w="250px"
        >
            <Flex
                px={2}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                height={`${HEADER_HEIGHT}px`}
                alignItems="center"
                justifyContent={"center"}
            >
                <Text textAlign={"center"}>Dashboard</Text>
            </Flex>
            {menu.map(({ icon, label, to }) => (
                <NavItem key={label} icon={icon} label={label} to={to} />
            ))}
        </Grid>
    );
};

export default Sidebar;

const SHOP_MENUS = [
    {
        icon: SettingsIcon,
        label: "Preference",
        to: "",
    },
    {
        icon: PeopleIcon,
        label: "Members",
        to: NAVIGATION_ROUTES.SHOP_MEMBERS,
    },
    {
        icon: AddBusinessIcon,
        label: "Integration (Addons)",
        to: "",
    },
];

const MENUS = [
    {
        icon: SettingsIcon,
        label: "Preference",
        to: "",
    },
    {
        icon: InviteIcon,
        label: "Invitation",
        to: "",
    },
];

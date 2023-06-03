import { InviteIcon, SettingsIcon } from "@assets/svgs";
import { Flex, Grid, Text } from "@chakra-ui/react";
import { HEADER_HEIGHT } from "../Header";
import NavItem from "./NavItem";

const Sidebar = () => {
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
            {MENUS.map(({ icon, label }) => (
                <NavItem key={label} icon={icon} label={label} />
            ))}
        </Grid>
    );
};

export default Sidebar;

// const SHOP_MENUS = [
//     {
//         icon: SettingsIcon,
//         label: "Preference",
//     },
//     {
//         icon: PeopleIcon,
//         label: "Members",
//     },
//     {
//         icon: AddBusinessIcon,
//         label: "Integration (Addons)",
//     },
// ];

const MENUS = [
    {
        icon: SettingsIcon,
        label: "Preference",
    },
    {
        icon: InviteIcon,
        label: "Invitation",
    },
];

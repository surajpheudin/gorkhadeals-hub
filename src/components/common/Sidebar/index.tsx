import { AddBusinessIcon, PeopleIcon, SettingsIcon } from "@assets/svgs";
import { Box, Grid, Text } from "@chakra-ui/react";
import NavItem from "./NavItem";

const Sidebar = () => {
    return (
        <Grid
            alignContent={"flex-start"}
            py={2}
            boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
            gap={1}
            h={"100vh"}
            backgroundColor="gray.50"
            zIndex={"dropdown"}
            w="250px"
        >
            <Box
                px={2}
                py={3.5}
                borderBottomWidth="1px"
                borderColor={"gray.300"}
            >
                <Text textAlign={"center"}>Dashboard</Text>
            </Box>
            {MENUS.map(({ icon, label }) => (
                <NavItem key={label} icon={icon} label={label} />
            ))}
        </Grid>
    );
};

export default Sidebar;

const MENUS = [
    {
        icon: SettingsIcon,
        label: "Preference",
    },
    {
        icon: PeopleIcon,
        label: "Members",
    },
    {
        icon: AddBusinessIcon,
        label: "Integration (Addons)",
    },
];

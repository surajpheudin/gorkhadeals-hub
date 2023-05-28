import { AddBusinessIcon, PeopleIcon, SettingsIcon } from "@assets/svgs";
import { Grid } from "@chakra-ui/react";
import NavItem from "./NavItem";

const Sidebar = () => {
    return (
        <Grid
            alignContent={"flex-start"}
            py={2}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            gap={1}
            h={"calc(100vh - 60px)"}
        >
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

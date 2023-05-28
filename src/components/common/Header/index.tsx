import { AddBusinessIcon, LogoutIcon, MenuUnfoldIcon } from "@assets/svgs";
import {
    Avatar,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Icon,
} from "@chakra-ui/react";
import useSession from "@src/hooks/session";

const Header = () => {
    const { handleLogout } = useSession();
    return (
        <Flex
            alignItems={"center"}
            justifyContent={{ base: "space-between", lg: "flex-end" }}
            py={2}
            px={4}
            boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
        >
            <IconButton
                variant={"ghost"}
                icon={<Icon as={MenuUnfoldIcon} />}
                aria-label={"menu"}
                display={{
                    lg: "none",
                }}
            />
            <Flex>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<Avatar size={"sm"} />}
                        variant="unstyled"
                    />
                    <MenuList>
                        <MenuItem
                            icon={
                                <Icon
                                    fontSize={"md"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    as={AddBusinessIcon}
                                />
                            }
                        >
                            New Tab
                        </MenuItem>
                        <MenuItem
                            icon={
                                <Icon
                                    fontSize={"md"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    as={AddBusinessIcon}
                                />
                            }
                        >
                            New Window
                        </MenuItem>
                        <MenuItem
                            icon={
                                <Icon
                                    fontSize={"md"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    as={AddBusinessIcon}
                                />
                            }
                        >
                            Open Closed Tab
                        </MenuItem>
                        <MenuItem
                            onClick={handleLogout}
                            icon={
                                <Icon
                                    fontSize={"md"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    as={LogoutIcon}
                                />
                            }
                        >
                            Logout
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    );
};

export default Header;

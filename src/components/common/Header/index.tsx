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
import { useGetLoggedInUser } from "@src/services/user/queries";

export const HEADER_HEIGHT = 60;
const Header = () => {
    const { data } = useGetLoggedInUser();
    const { handleLogout } = useSession();

    return (
        <Flex
            alignItems={"center"}
            justifyContent={{ base: "space-between", lg: "flex-end" }}
            py={2}
            px={4}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
            height={`${HEADER_HEIGHT}px`}
        >
            <IconButton
                variant={"ghost"}
                icon={<Icon as={MenuUnfoldIcon} />}
                aria-label={"menu"}
                display={{
                    lg: "none",
                }}
            />
            <Flex pr={4}>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={
                            <Avatar
                                size={"sm"}
                                src={data?.picture}
                                referrerPolicy="no-referrer"
                            />
                        }
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

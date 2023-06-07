import { InviteIcon, LogoutIcon, MenuUnfoldIcon } from "@assets/svgs";
import {
    Avatar,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Icon,
    Button,
} from "@chakra-ui/react";
import useSession from "@src/hooks/session";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { useGetLoggedInUser } from "@src/services/user/queries";
import { useNavigate } from "react-router-dom";

export const HEADER_HEIGHT = 65;
const Header = () => {
    const navigate = useNavigate();
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
                        as={Button}
                        aria-label="Options"
                        leftIcon={
                            <Avatar
                                size={"sm"}
                                src={data?.picture}
                                referrerPolicy="no-referrer"
                            />
                        }
                        variant="ghost"
                        display="flex"
                        alignItems="center"
                    >
                        {data?.fullname}
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            onClick={() =>
                                navigate(NAVIGATION_ROUTES.SHOP_INVITAIONS)
                            }
                            icon={
                                <Icon
                                    fontSize={"md"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    as={InviteIcon}
                                />
                            }
                        >
                            Invitations
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

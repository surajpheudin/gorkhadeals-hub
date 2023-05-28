import { AddBusinessIcon } from "@assets/svgs";
import {
    Avatar,
    Flex,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Icon,
} from "@chakra-ui/react";
import { LOGO } from "@src/constants/images.constants";

const Header = () => {
    return (
        <Flex
            alignItems={"center"}
            justifyContent="space-between"
            py={2}
            px={4}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        >
            <Image src={LOGO} height="42px" />

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
                            icon={
                                <Icon
                                    fontSize={"md"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    as={AddBusinessIcon}
                                />
                            }
                        >
                            Open File...
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    );
};

export default Header;

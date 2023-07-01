import { ClipboardIcon, EyeIcon, EyeSlashIcon } from "@assets/svgs";
import {
    As,
    Box,
    Flex,
    Icon,
    IconButton,
    Text,
    Tooltip,
    useDisclosure,
} from "@chakra-ui/react";
import { copyText } from "@src/utils/helperFunc";
import { useState } from "react";

const CredentialsCard = ({ title, value, icon }: ICredentialsCard) => {
    const [show, setShow] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const passwordText = new Array(value.length).fill("*").join("");
    const handleClickCopy = () => {
        copyText(value);
        onOpen();

        setTimeout(() => {
            onClose();
        }, 1500);
    };
    return (
        <Flex
            gap={4}
            alignItems="center"
            boxShadow={
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            }
            padding={8}
            borderRadius="md"
            cursor={"pointer"}
            height="150px"
            sx={{
                "&:hover": {
                    "& > div:last-child": {
                        visibility: "visible",
                    },
                },
            }}
        >
            <Icon as={icon} mr={4} />
            <Box flexGrow={1}>
                <Text>{title}</Text>
                <Text fontSize={"xs"} wordBreak={"break-word"}>
                    {show ? value : passwordText}
                </Text>
            </Box>
            <Flex gap={2} visibility="hidden">
                <Tooltip label="copied" isOpen={isOpen}>
                    <IconButton
                        size={"sm"}
                        variant={"outline"}
                        icon={<Icon as={ClipboardIcon} />}
                        aria-label={"copy"}
                        onClick={handleClickCopy}
                    />
                </Tooltip>

                <IconButton
                    size={"sm"}
                    variant={"outline"}
                    icon={<Icon as={show ? EyeSlashIcon : EyeIcon} />}
                    aria-label={"hide/show"}
                    onClick={() => setShow((prev) => !prev)}
                />
            </Flex>
        </Flex>
    );
};

export default CredentialsCard;

interface ICredentialsCard {
    title: string;
    value: string;
    icon: As;
}

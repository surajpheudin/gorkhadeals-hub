import { Box, Button, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const ConfirmDeleteForm = ({
    children,
    onDelete,
    onClose,
    isLoading,
}: IConfirmDeleteForm) => {
    return (
        <Box py={4}>
            <Box my={4}>{children}</Box>
            <Flex justifyContent={"flex-end"} gap={2}>
                <Button onClick={onDelete} isLoading={isLoading}>
                    Delete
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </Flex>
        </Box>
    );
};

export default ConfirmDeleteForm;

interface IConfirmDeleteForm extends PropsWithChildren {
    onDelete?: () => void;
    onClose?: () => void;
    isLoading?: boolean;
}

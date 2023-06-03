import {
    Modal as CModal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalProps,
} from "@chakra-ui/react";

const Modal = ({ title, children, ...props }: IModal) => {
    return (
        <>
            <CModal {...props}>
                <ModalOverlay />
                <ModalContent>
                    {title && <ModalHeader>{title}</ModalHeader>}
                    <ModalCloseButton />
                    <ModalBody>{children}</ModalBody>
                </ModalContent>
            </CModal>
        </>
    );
};

export default Modal;

export interface IModal extends ModalProps {
    // children: React.ReactNode;
    title?: string;
}

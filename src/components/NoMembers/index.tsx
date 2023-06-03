import { PeopleRoofIcon } from "@assets/svgs";
import { Button, Grid, Text, Icon, useDisclosure } from "@chakra-ui/react";
import AddMemberForm from "@components/AddMemberForm";
import Modal from "@components/common/Modal";

const NoMembers = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <AddMemberForm />
            </Modal>
            <Grid
                borderWidth={"1px"}
                borderColor="gray.200"
                py={"50px"}
                alignContent="center"
                justifyContent={"center"}
                gap={5}
                borderRadius="md"
            >
                <Icon
                    as={PeopleRoofIcon}
                    mx="auto"
                    fontSize={"4xl"}
                    color="gray.600"
                />
                <Text fontWeight={"medium"} fontSize="xl">
                    You haven&apos;t invited any members yet
                </Text>
                <Button
                    colorScheme={"primary"}
                    size="sm"
                    w={"120px"}
                    mx="auto"
                    onClick={onOpen}
                >
                    Add Member
                </Button>
            </Grid>
        </>
    );
};

export default NoMembers;

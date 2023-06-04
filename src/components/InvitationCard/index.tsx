import { Button, Flex } from "@chakra-ui/react";
import Card from "@components/library/Card";
import { useAcceptMemberInvitation } from "@src/services/shop/mutations";

const InvitationCard = ({
    id,
    image,
    displayName,
    registeredName,
    hideBorder,
}: IInvitationCard) => {
    const { mutate, isLoading } = useAcceptMemberInvitation();

    const handleJoin = () => {
        mutate({ shopId: id });
    };
    return (
        <Flex
            justifyContent={"space-between"}
            alignItems="center"
            py={5}
            borderBottomWidth={hideBorder ? "0px" : "1px"}
        >
            <Card
                variant="one"
                image={image}
                title={displayName}
                description={registeredName}
            />
            <Flex gap={3}>
                <Button w={"100px"} onClick={handleJoin} isLoading={isLoading}>
                    Join
                </Button>
                <Button w={"100px"}>Decline</Button>
            </Flex>
        </Flex>
    );
};

export default InvitationCard;

interface IInvitationCard {
    id: string;
    image: string;
    displayName: string;
    registeredName: string;
    hideBorder?: boolean;
}

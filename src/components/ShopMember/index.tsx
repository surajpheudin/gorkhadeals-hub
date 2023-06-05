import { Avatar, Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { IRole, IUser, MemberStatus } from "@src/@types/modal";
import { useRemoveShopMember } from "@src/services/shop/mutations";
import { useGetLoggedInUser } from "@src/services/user/queries";

const ShopMember = ({
    status,
    user,
    role,
    hideBorder,
    userShopId,
    shopId,
}: IShopMember) => {
    const { data } = useGetLoggedInUser();
    const { mutate, isLoading } = useRemoveShopMember();
    const handleRemoveMember = () => {
        mutate({
            id: shopId,
            userShopId: userShopId,
        });
    };

    const self = data?.id === user?.id;
    return (
        <Grid
            gridTemplateColumns={{ lg: "repeat(4, 1fr)" }}
            justifyContent={"space-between"}
            alignItems="center"
            borderBottomWidth={hideBorder ? "0px" : "1px"}
            borderColor="gray.300"
            py={5}
        >
            <Flex gap={2}>
                <Avatar name={user?.fullname} />
                <Box>
                    <Text fontWeight={"medium"}>{user?.fullname}</Text>
                    <Text fontSize={"sm"}>{user?.email}</Text>
                </Box>
            </Flex>

            <Text textAlign={"center"} textTransform={"capitalize"}>
                {role?.name?.toLowerCase()}
            </Text>
            <Text textAlign={"center"} textTransform={"capitalize"}>
                {status?.toLowerCase()}
            </Text>
            <Flex justifyContent={"flex-end"}>
                <Button
                    variant={"link"}
                    onClick={handleRemoveMember}
                    isLoading={isLoading}
                >
                    {self ? "Leave" : "Remove"}{" "}
                </Button>
            </Flex>
        </Grid>
    );
};

export default ShopMember;

interface IShopMember {
    userShopId: string;
    shopId: string;
    status: MemberStatus;
    user: IUser;
    role: IRole;
    hideBorder?: boolean;
}

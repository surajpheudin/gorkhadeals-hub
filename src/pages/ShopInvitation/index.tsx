import { Box, Button, Flex } from "@chakra-ui/react";
import DataTable from "@components/common/DataTable";
import Card from "@components/library/Card";
import DataListLayout from "@components/library/DataListLayout";
import { IShop } from "@src/@types/modal";
import { useAcceptMemberInvitation } from "@src/services/shop/mutations";

import { useGetShopInvitations } from "@src/services/shop/queries";
import { createColumnHelper } from "@tanstack/react-table";

const ShopInvitation = () => {
    const { data, isLoading } = useGetShopInvitations();

    const columnHelper = createColumnHelper<IShop>();
    const columns = [
        columnHelper.accessor("registeredName", {
            cell: ({ row: { original } }) => (
                <Card
                    variant="one"
                    image={original?.image}
                    title={original?.displayName}
                    description={original?.registeredName}
                />
            ),
            minSize: 300,
        }),
        columnHelper.accessor("id", {
            cell: (info) => <ActionButtons shopId={info.getValue()} />,
        }),
    ];
    return (
        <>
            <Box>
                <DataListLayout title="Invitations">
                    <DataTable
                        data={data || []}
                        columns={columns}
                        isLoading={isLoading}
                        primaryKey={"id"}
                        noDataText="There are no invitations right now."
                        hideHeader
                    />
                </DataListLayout>
            </Box>
        </>
    );
};

export default ShopInvitation;

function ActionButtons({ shopId }: { shopId: string }) {
    const { mutate, isLoading: isLoadingAcceptInvitation } =
        useAcceptMemberInvitation();

    const handleJoin = () => {
        mutate({ shopId });
    };
    return (
        <Flex gap={3} justifyContent="flex-end">
            <Button
                w={"100px"}
                onClick={handleJoin}
                isLoading={isLoadingAcceptInvitation}
            >
                Join
            </Button>
            <Button w={"100px"}>Decline</Button>
        </Flex>
    );
}

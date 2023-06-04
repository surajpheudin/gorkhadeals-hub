import { Box } from "@chakra-ui/react";
import NoData from "@components/common/NoData";
import InvitationCard from "@components/InvitationCard";
import ComponentLoader from "@components/library/ComponentLoader";
import DataListLayout from "@components/library/DataListLayout";

import { useGetShopInvitations } from "@src/services/shop/queries";

const ShopInvitation = () => {
    const { data, isLoading } = useGetShopInvitations();

    if (isLoading) {
        return <ComponentLoader />;
    }

    return (
        <>
            <Box>
                <DataListLayout title="Invitations">
                    {data && data.length > 0 ? (
                        data?.map(
                            ({ id, displayName, registeredName, image }, i) => (
                                <InvitationCard
                                    key={id}
                                    id={id}
                                    displayName={displayName}
                                    registeredName={registeredName}
                                    image={image}
                                    hideBorder={data.length - 1 === i}
                                />
                            )
                        )
                    ) : (
                        <NoData>There are no invitations right now.</NoData>
                    )}
                </DataListLayout>
            </Box>
        </>
    );
};

export default ShopInvitation;

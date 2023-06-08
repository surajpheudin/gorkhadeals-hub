import { PeopleRoofIcon } from "@assets/svgs";
import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    useDisclosure,
} from "@chakra-ui/react";
import AddMemberForm from "@components/AddMemberForm";
import Modal from "@components/common/Modal";
import NoData from "@components/common/NoData";
import SelectField from "@components/common/SelectField";
import { ISelectOption } from "@components/common/SelectField/interface";
import ComponentLoader from "@components/library/ComponentLoader";
import ShopMember from "@components/ShopMember";
import { IShopMember, MemberStatus } from "@src/@types/modal";
import { useGetShopMembers } from "@src/services/shop/queries";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ShopMembers = () => {
    const params = useParams();
    const id = params.id ?? "";
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [filteredData, setFilteredData] = useState<IShopMember[]>([]);
    const { control } = useForm({
        defaultValues,
    });

    const { data, isSuccess, isLoading } = useGetShopMembers({
        id,
        search: "",
    });

    const onStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const status = e.target.value as MemberStatus;
        if (status) {
            setFilteredData(
                data?.filter((item) => item.status === status) || []
            );
        } else {
            setFilteredData(data || []);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            setFilteredData(data);
        }
    }, [data, isSuccess]);

    if (isLoading) {
        return <ComponentLoader />;
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <AddMemberForm onSuccess={onClose} />
            </Modal>
            <Box
                borderWidth={"1px"}
                borderColor="gray.400"
                borderRadius="md"
                overflow={"hidden"}
            >
                <Flex
                    justifyContent={"space-between"}
                    backgroundColor="gray.100"
                    borderBottomWidth="1px"
                    borderBottomColor={"gray.400"}
                    py={4}
                    px={6}
                >
                    <Heading fontSize={"2xl"}>Manage Access</Heading>
                    {data && data?.length > 1 && (
                        <Flex gap={4}>
                            <SelectField
                                name="status"
                                backgroundColor={"whiteAlpha.700"}
                                control={control}
                                options={options}
                                onCustomChange={onStatusChange}
                                placeholder="All"
                            />
                            <Button
                                colorScheme={"primary"}
                                w={"120px"}
                                onClick={onOpen}
                                width="180px"
                            >
                                Add Member
                            </Button>
                        </Flex>
                    )}
                </Flex>
                {data && data.length > 1 ? (
                    <Grid py={4} px={6}>
                        {filteredData.map(
                            ({ id, businessUser, status, role, shopId }, i) => (
                                <ShopMember
                                    key={id}
                                    userShopId={id}
                                    shopId={shopId}
                                    status={status}
                                    user={businessUser}
                                    role={role}
                                    hideBorder={filteredData.length - 1 === i}
                                />
                            )
                        )}
                    </Grid>
                ) : (
                    <NoData
                        buttonLabel="Add Member"
                        icon={PeopleRoofIcon}
                        onClick={onOpen}
                    >
                        You haven&apos;t invited any members yet
                    </NoData>
                )}
            </Box>
        </>
    );
};

export default ShopMembers;

const defaultValues: {
    status: MemberStatus | "";
} = {
    status: "",
};

const options: ISelectOption<MemberStatus>[] = [
    {
        label: "Joined",
        value: "JOINED",
    },
    {
        label: "Invited",
        value: "INVITED",
    },
];

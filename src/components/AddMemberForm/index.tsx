import { PeopleRoofIcon } from "@assets/svgs";
import { Box, Button, Text, Icon, Flex } from "@chakra-ui/react";
import InputField from "@components/common/InputField";
import { useGetShop } from "@src/services/shop/queries";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useInviteMember } from "@src/services/shop/mutations";

const AddMemberForm = ({ onSuccess }: { onSuccess: () => void }) => {
    const params = useParams();
    const id = params.id ?? "";
    const {
        control,
        handleSubmit,
        watch,
        formState: { isValid },
    } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    });
    const { data: shop } = useGetShop(id);
    const { mutate, isLoading } = useInviteMember();

    const onSubmit = (data: typeof defaultValues) => {
        mutate(
            {
                id,
                ...data,
            },
            {
                onSuccess,
            }
        );
    };

    return (
        <Box py={4}>
            <Flex justifyContent={"center"} mb={2}>
                <Icon as={PeopleRoofIcon} fontSize={"4xl"} color="gray.600" />
            </Flex>
            <Text textAlign={"center"} fontSize="lg" mb={6}>
                Add a member to <b> {shop?.displayName}</b>
            </Text>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField
                    name="email"
                    control={control}
                    placeholder="Enter email address"
                    autoComplete="off"
                    autoFocus
                />
                <Button
                    mt={2}
                    width={"full"}
                    colorScheme="primary"
                    isDisabled={!isValid}
                    type="submit"
                    isLoading={isLoading}
                >
                    Invite {isValid ? watch("email") : "member"} to this shop
                </Button>
            </form>
        </Box>
    );
};

export default AddMemberForm;

const defaultValues = {
    email: "",
};

const schema = Yup.object({
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required")
        .matches(
            new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"),
            "Please enter a valid email"
        ),
});

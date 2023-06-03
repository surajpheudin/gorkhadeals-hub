import { Box, Button, Grid, GridItem, Heading } from "@chakra-ui/react";
import Dropzone from "@components/common/Dropzone/Dropzone";
import InputField from "@components/common/InputField";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { useCreateShop } from "@src/services/shop/mutations";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ICreateShopForm } from "./interface";

const defaultValues: ICreateShopForm = {
    displayName: "",
    registeredName: "",
    email: "",
    image: null,
};

const CreateShop = () => {
    const navigate = useNavigate();
    const [, setFiles] = useState<File[] | null>(null);

    const { control, handleSubmit } = useForm<ICreateShopForm>({
        defaultValues,
    });
    const { mutate, isLoading } = useCreateShop();

    const onSubmit = (data: ICreateShopForm) => {
        mutate(
            {
                ...data,
            },
            {
                onSuccess: () => navigate(NAVIGATION_ROUTES.HOME),
            }
        );
    };

    return (
        <Box>
            <Heading fontSize={"2xl"} mb={4}>
                Create Shop
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid gridTemplateColumns={{ lg: "repeat(2, 1fr)" }} gap={4}>
                    <InputField
                        control={control}
                        name="registeredName"
                        label="Registered Name"
                    />
                    <InputField
                        control={control}
                        name="displayName"
                        label="Display Name"
                    />

                    <InputField control={control} name="email" label="Email" />
                    <GridItem colSpan={2}>
                        <Dropzone
                            name="image"
                            control={control}
                            accept="image/png, image/jpg, image/jpeg"
                            maxSizeInMb={2}
                            setFiles={setFiles}
                        />
                    </GridItem>
                </Grid>

                <Button
                    mt={6}
                    w={"240px"}
                    type="submit"
                    colorScheme={"primary"}
                    isLoading={isLoading}
                >
                    Create
                </Button>
            </form>
        </Box>
    );
};

export default CreateShop;

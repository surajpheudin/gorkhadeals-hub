import { Box, Button, Grid, Heading } from "@chakra-ui/react";
import InputField from "@components/common/InputField";
import { useForm } from "react-hook-form";
import { ICreateShopForm } from "./interface";

const defaultValues: ICreateShopForm = {
    displayName: "",
    registeredName: "",
    email: "",
};

const CreateShop = () => {
    const { control } = useForm<ICreateShopForm>({
        defaultValues,
    });

    return (
        <Box>
            <Heading fontSize={"2xl"} mb={4}>
                Create Shop
            </Heading>
            <form>
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
                </Grid>
                <Button
                    mt={6}
                    w={"240px"}
                    type="submit"
                    colorScheme={"primary"}
                >
                    Create
                </Button>
            </form>
        </Box>
    );
};

export default CreateShop;

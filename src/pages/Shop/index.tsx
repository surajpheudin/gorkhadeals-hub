import { AddIcon } from "@assets/svgs";
import { As, Box, Grid, Heading } from "@chakra-ui/react";
import ComponentLoader from "@components/library/ComponentLoader";
import { useGetShop } from "@src/services/shop/queries";
import { useParams } from "react-router-dom";
import CredentialsCard from "./CredentialsCard";

const Shop = () => {
    const params = useParams();
    const id = params.id ?? "";

    const { isLoading, isError } = useGetShop(id);

    const CREDENTIALS: {
        label: string;
        value: string;
        icon: As;
    }[] = [
        {
            label: "Shop Id",
            value: id,
            icon: AddIcon,
        },
        {
            label: "User Secret Key",
            value: id,
            icon: AddIcon,
        },
        {
            label: "Shop Access Token",
            value: id,
            icon: AddIcon,
        },
    ];

    if (isLoading) {
        return <ComponentLoader />;
    }
    if (isError) {
        throw Error();
    }
    return (
        <Box>
            <Heading fontSize={"xl"} fontWeight="medium" mb={4}>
                Environment Credentials
            </Heading>

            <Grid
                gap={5}
                gridTemplateColumns={{
                    lg: "repeat(2, 1fr)",
                    xl: "repeat(3, 1fr)",
                }}
            >
                {CREDENTIALS.map(({ label, value, icon }) => (
                    <CredentialsCard
                        key={label}
                        icon={icon}
                        title={label}
                        value={value}
                    />
                ))}
            </Grid>
        </Box>
    );
};

export default Shop;

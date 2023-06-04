import { MoodEmptyIcon } from "@assets/svgs";
import { As, Button, Grid, GridProps, Icon, Text } from "@chakra-ui/react";

const NoData = ({
    onClick,
    icon,
    children,
    buttonLabel,
    ...props
}: INoData) => {
    return (
        <Grid
            borderWidth={"1px"}
            borderColor="gray.200"
            py={"50px"}
            alignContent="center"
            justifyContent={"center"}
            gap={5}
            borderRadius="md"
            {...props}
        >
            <Icon
                as={icon || MoodEmptyIcon}
                mx="auto"
                fontSize={"4xl"}
                color="gray.600"
            />
            <Text fontWeight={"medium"} fontSize="xl">
                {children}
            </Text>
            {onClick && (
                <Button
                    colorScheme={"primary"}
                    size="sm"
                    minW={"fit-content"}
                    w={"120px"}
                    mx="auto"
                    onClick={onClick}
                >
                    {buttonLabel ?? "Add Member"}
                </Button>
            )}
        </Grid>
    );
};

export default NoData;

interface INoData extends GridProps {
    icon?: As;
    children?: React.ReactNode;
    buttonLabel?: string;
    onClick?: () => void;
}

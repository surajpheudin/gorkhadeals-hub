import { useToast, UseToastOptions } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useCallback } from "react";

const useHandleResponse = () => {
    const toast = useToast({
        position: "bottom-right",
        isClosable: true,
    });

    const onSuccess = useCallback((props: Omit<UseToastOptions, "status">) => {
        const { title, description, ...others } = props;
        toast({
            status: "success",
            title: typeof title === "string" ? title : "",
            description: typeof description === "string" ? description : "",
            ...others,
        });
    }, []);

    const onError = useCallback((error: unknown) => {
        let message: string | string[] = "Network Error";

        if (error instanceof AxiosError) {
            message = error?.response?.data?.message || error?.message;
        }

        if (Array.isArray(message)) {
            message.forEach((msg) => {
                toast({
                    title: msg,
                    status: "error",
                });
            });
        } else {
            toast({
                title: message,
                status: "error",
            });
        }
    }, []);

    return { onSuccess, onError };
};

export { useHandleResponse };

export const extractErrorMessage = (msg?: string | Array<string>) => {
    if (Array.isArray(msg)) {
        return msg?.join(", ");
    }

    if (typeof msg === "string") {
        return msg;
    }

    return "Network Error";
};

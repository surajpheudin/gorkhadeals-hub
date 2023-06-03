import { useHandleResponse } from "@src/hooks/response";
import { useMutation } from "@tanstack/react-query";
import { createShop } from "./apis";

const useCreateShop = () => {
    const { onError, onSuccess } = useHandleResponse();
    return useMutation({
        mutationFn: createShop,
        onError,
        onSuccess: () =>
            onSuccess({
                description: "Congratulations! New shop created successfully.",
            }),
    });
};
export { useCreateShop };

import { useMutation } from "@tanstack/react-query";
import { createShop } from "./apis";

const useCreateShop = () => {
    return useMutation({
        mutationFn: createShop,
    });
};
export { useCreateShop };

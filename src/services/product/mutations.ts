import { useHandleResponse } from "@src/hooks/response";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../axios.constants";
import { addProduct, deleteProduct, editProduct } from "./apis";

const useAddProduct = () => {
    const queryClient = useQueryClient();
    const { onError, onSuccess } = useHandleResponse();
    return useMutation({
        mutationFn: addProduct,
        onError,
        onSuccess: () => {
            queryClient.invalidateQueries([api.getShops]);
            onSuccess({
                description: "Congratulations! New product added successfully.",
            });
        },
    });
};

const useEditProduct = () => {
    const { onError, onSuccess } = useHandleResponse();
    return useMutation({
        mutationFn: editProduct,
        onError,
        onSuccess: () => {
            onSuccess({
                description: "Congratulations! New product added successfully.",
            });
        },
    });
};

const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    const { onError, onSuccess } = useHandleResponse();
    return useMutation({
        mutationFn: deleteProduct,
        onError,
        onSuccess: () => {
            queryClient.invalidateQueries([api.getProducts]);
            onSuccess({
                description: "Product deleted successfully.",
            });
        },
    });
};

export { useAddProduct, useEditProduct, useDeleteProduct };

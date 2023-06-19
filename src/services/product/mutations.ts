import { useHandleResponse } from "@src/hooks/response";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../axios.constants";
import { acceptMemberInvitation, addProduct, inviteMember } from "./apis";

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

const useInviteMember = () => {
    const queryClient = useQueryClient();
    const { onError, onSuccess } = useHandleResponse();
    return useMutation({
        mutationFn: inviteMember,
        onError,
        onSuccess: () => {
            queryClient.invalidateQueries([api.getShopMembers]);
            onSuccess({
                description: "Invitation sent successfully.",
            });
        },
    });
};

const useAcceptMemberInvitation = () => {
    const queryClient = useQueryClient();
    const { onError, onSuccess } = useHandleResponse();
    return useMutation({
        mutationFn: acceptMemberInvitation,
        onError,
        onSuccess: () => {
            queryClient.invalidateQueries([api.getShopInvitations]);
            onSuccess({
                description: "Shop joined successfully.",
            });
        },
    });
};

export { useAddProduct, useInviteMember, useAcceptMemberInvitation };

import { useHandleResponse } from "@src/hooks/response";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../axios.constants";
import {
    acceptMemberInvitation,
    createShop,
    inviteMember,
    removeShopMember,
} from "./apis";

const useCreateShop = () => {
    const queryClient = useQueryClient();
    const { onError, onSuccess } = useHandleResponse();
    return useMutation({
        mutationFn: createShop,
        onError,
        onSuccess: () => {
            queryClient.invalidateQueries([api.getShops]);
            onSuccess({
                description: "Congratulations! New shop created successfully.",
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

const useRemoveShopMember = () => {
    const queryClient = useQueryClient();
    const { onError, onSuccess } = useHandleResponse();
    return useMutation({
        mutationFn: removeShopMember,
        onError,
        onSuccess: () => {
            queryClient.invalidateQueries([api.getShopMembers]);
            onSuccess({
                description: "Member removed successfully.",
            });
        },
    });
};
export {
    useCreateShop,
    useInviteMember,
    useRemoveShopMember,
    useAcceptMemberInvitation,
};

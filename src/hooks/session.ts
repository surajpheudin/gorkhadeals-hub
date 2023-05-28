import { useToast } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { AxiosAuthInstance } from "@src/services/axios.config";
import { api } from "@src/services/axios.constants";
import { AxiosError } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useSession = () => {
    const toast = useToast();
    const navigate = useNavigate();

    const handleLogout = useCallback(async () => {
        try {
            await AxiosAuthInstance.post(api.logout);
            navigate(NAVIGATION_ROUTES.LOGIN);
        } catch (error) {
            if (error instanceof AxiosError)
                toast({
                    status: "error",
                    description: error.message,
                });
        }
    }, []);

    return { handleLogout };
};

export default useSession;

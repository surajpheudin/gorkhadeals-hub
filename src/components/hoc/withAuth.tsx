import GlobalLoader from "@components/common/GlobalLoader/GlobalLoader";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { AxiosAuthInstance } from "@src/services/axios.config";
import { api } from "@src/services/axios.constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const withAuth = (OldComponent: React.FC) => {
    const NewComponent = () => {
        const navigate = useNavigate();
        const [isLoading, setIsLoading] = useState(true);
        const isAuthenticated = async () => {
            try {
                setIsLoading(true);
                await AxiosAuthInstance.get(api.isLogin);
                setIsLoading(false);
            } catch {
                navigate(NAVIGATION_ROUTES.LOGIN);
            }
        };

        useEffect(() => {
            isAuthenticated();
        }, []);

        if (isLoading) {
            return <GlobalLoader />;
        }
        return <OldComponent />;
    };

    return NewComponent;
};

export default withAuth;

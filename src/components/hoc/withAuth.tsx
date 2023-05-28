import GlobalLoader from "@components/common/GlobalLoader/GlobalLoader";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { AxiosAuthInstance } from "@src/services/axios.config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const isLoginUrl = "http://localhost:8000/is-login";
const withAuth = (OldComponent: React.FC) => {
    const NewComponent = () => {
        const navigate = useNavigate();
        const [isLoading, setIsLoading] = useState(true);
        const isAuthenticated = async () => {
            try {
                setIsLoading(true);
                const res = await AxiosAuthInstance.get(isLoginUrl);

                if (!res) navigate(NAVIGATION_ROUTES.LOGIN);
                else setIsLoading(false);
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

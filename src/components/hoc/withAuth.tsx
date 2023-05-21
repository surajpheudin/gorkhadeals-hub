import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (OldComponent: React.FC) => {
    const NewComponent = () => {
        const navigate = useNavigate();
        useEffect(() => {
            navigate(NAVIGATION_ROUTES.LOGIN);
        }, []);
        return <OldComponent />;
    };

    return NewComponent;
};

export default withAuth;

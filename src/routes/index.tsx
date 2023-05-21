import DashbaordLayout from "@components/common/DashboardLayout";
import GlobalLoader from "@components/common/GlobalLoader/GlobalLoader";
import Layout from "@components/common/Layout";
import Home from "@src/pages";
import ErrorPage from "@src/pages/ErrorPage";
import Login from "@src/pages/Login";
import NotFoundPage from "@src/pages/NotFoundPage";
import { createBrowserRouter } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./constants";

export const router = createBrowserRouter([
    {
        path: NAVIGATION_ROUTES.AUTH,
        element: <Layout />,
        children: [
            {
                path: NAVIGATION_ROUTES.LOGIN,
                element: <Login />,
            },
        ],
    },
    {
        path: NAVIGATION_ROUTES.HOME,
        element: <DashbaordLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: NAVIGATION_ROUTES.LOGIN,
        element: <GlobalLoader />,
    },
    {
        path: NAVIGATION_ROUTES.REST,
        errorElement: <ErrorPage></ErrorPage>,
        element: <NotFoundPage></NotFoundPage>,
    },
]);

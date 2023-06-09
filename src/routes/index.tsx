import DashbaordLayout from "@components/common/DashboardLayout";
import LoginLayout from "@components/common/LoginLayout";
import Home from "@src/pages";
import AddProduct from "@src/pages/AddProduct";
import CreateShop from "@src/pages/CreateShop";
import ErrorPage from "@src/pages/ErrorPage";
import Login from "@src/pages/Login";
import NotFoundPage from "@src/pages/NotFoundPage";
import Products from "@src/pages/Products";
import Shop from "@src/pages/Shop";
import ShopInvitation from "@src/pages/ShopInvitation";
import ShopMembers from "@src/pages/ShopMembers";
import { createBrowserRouter } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./constants";

export const router = createBrowserRouter([
    {
        path: NAVIGATION_ROUTES.AUTH,
        element: <LoginLayout />,
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
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: NAVIGATION_ROUTES.CREATE_SHOP,
                element: <CreateShop />,
            },
            {
                path: NAVIGATION_ROUTES.SHOP_INVITAIONS,
                element: <ShopInvitation />,
            },
            {
                path: NAVIGATION_ROUTES.SHOP,
                element: <Shop />,
            },
            {
                path: NAVIGATION_ROUTES.SHOP_MEMBERS,
                element: <ShopMembers />,
            },

            {
                path: NAVIGATION_ROUTES.SHOP_PRODUCTS,
                element: <Products />,
            },
            {
                path: NAVIGATION_ROUTES.ADD_SHOP_PRODUCT,
                element: <AddProduct />,
            },
        ],
    },
    {
        path: NAVIGATION_ROUTES.REST,
        errorElement: <ErrorPage></ErrorPage>,
        element: <NotFoundPage></NotFoundPage>,
    },
]);

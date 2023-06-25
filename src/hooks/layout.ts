import { LayoutContext } from "@components/common/DashboardLayout";
import { useContext } from "react";

const useLayout = () => {
    const { scrollToTop } = useContext(LayoutContext);
    return { scrollToTop };
};

export default useLayout;

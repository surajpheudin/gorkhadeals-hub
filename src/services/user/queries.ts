import { useQuery } from "@tanstack/react-query";
import { api } from "../axios.constants";
import { getLoggedInUser } from "./apis";

const useGetLoggedInUser = () => {
    return useQuery({
        queryKey: [api.isLogin],
        queryFn: getLoggedInUser,
    });
};

export { useGetLoggedInUser };

import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BACKEND_URL;
const THREE_MINUTES = 1000 * 60 * 3;
const AxiosAuthInstance = axios.create({
    baseURL,
    timeout: THREE_MINUTES,
    withCredentials: true,
});

AxiosAuthInstance.interceptors.request.use(function (config) {
    return config;
});

// AxiosAuthInstance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error: unknown) => {
//         if (error instanceof AxiosError && error.response?.status === 401) {
//             location.replace(NAVIGATION_ROUTES.LOGIN);
//         }
//         return Promise.reject(error);
//     }
// );
export { AxiosAuthInstance };

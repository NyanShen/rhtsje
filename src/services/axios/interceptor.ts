import axios from "axios";
// import toastr from "config/toastr";
const axios_instance = axios.create();

axios_instance.defaults.timeout = 20000;
axios_instance.defaults.headers.common["X-Request-With"] = "XMLHttpRequest";

axios_instance.interceptors.request.use(
    (config: any) => {
        if (config.data && config.data.$skipAuthHandler) {
            config.$skipAuthHandler = true; // why add this
            delete config.data.$skipAuthHandler;
        }
        if (config.params && config.params.$skipAuthHandler) {
            config.$skipAuthHandler = true;
            delete config.params.$skipAuthHandler;
        }
        config.headers.Authorization = "token";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
axios_instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const err = error.response;
        if (err.status === 401 && !!err.config && !err.config.$skipAuthHandler) {
            // go to unAuthorized page, clear login user
        }
        // toastr.error(err.data.message)
        return Promise.reject(error);
    }
)
export default axios_instance;
import axios_instance from "./interceptor";

const request = (config: any) => {
    return new Promise((resolve, reject) => {
        axios_instance.request({
            url: config.url,
            method: config.method || "GET",
            responseType: config.responseType || "json",
            data: config.data,
            params: config.params,
            headers: {
                "Content-Type": config.contentType || "application/json;charset=UTF-8"
            }
        }).then((res: any) => {
            typeof resolve === "function" && resolve(res.data);
        }).catch(err => {
            typeof reject === "function" && reject(err)
        })
    })
}
export default request;
import { encodeParam } from "./encript-param";

export const toUrlParam = (param: any): string => {
    if (typeof param !== "object") return;
    let urlParam = "";
    for (const key in param) {
        if (param.hasOwnProperty(key)) {
            urlParam = urlParam + `&${key}=${encodeParam(param[key])}`
        }
    }
    return;
}

export const transferUrlParam = (urlParam: string) => {
    if (urlParam.indexOf("?") !== -1) {
        urlParam = urlParam.substring(1);
    }
    let param = {};
    const urlParams = urlParam.split("&");
    urlParams.forEach(item => {
        const itemArr = item.split("=");
        param[itemArr[0]] = itemArr[1];
    });
    return param
}
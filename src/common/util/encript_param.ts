export const encodeParam = (param: any) => {
    return btoa(encodeURIComponent(JSON.stringify(param)));
}

export const decodeParam = (encodeParam: any) => {
    return JSON.parse(decodeURIComponent(atob(encodeParam)));
}
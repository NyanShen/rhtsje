export const encodeParam = <T>(param: T): string => {
    return btoa(encodeURIComponent(JSON.stringify(param)));
}

export const decodeParam = <T>(encodeParam: string): T => {
    return JSON.parse(decodeURIComponent(atob(encodeParam)));
}
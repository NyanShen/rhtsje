import { simpleLocalStorage } from "simple-storage";
import authorization from "./authorization";
interface IUser {
    tokenId: string;
    id: string;
    username: string;
    fullName: string;
}
let user: IUser;
const persistUser = (response: any) => {
    user = {
        tokenId: response.id,
        id: response.user.id,
        username: response.user.username,
        fullName: response.user.fullName
    };
    user.fullName = encodeURIComponent(user.fullName || "");
    const encodeUser = btoa(JSON.stringify(user));
    simpleLocalStorage.setItem("current-user", encodeUser);
}
const getUser = (): IUser => {
    const storageUser = localStorage.getItem("current-user");
    if (storageUser) {
        user = JSON.parse(atob(storageUser));
        user.fullName = decodeURIComponent(user.fullName);
    }
    return user
}
const getAuthorization = (): string | undefined => {
    if (authorization.get()) {
        return authorization.get();
    }
    const currentUser = getUser();

    if (!currentUser) {
        return undefined;
    }
    if (currentUser.tokenId) {
        return authorization.token(currentUser.tokenId)
    }
    return undefined;
}
const hasLogin = (): boolean => !!getUser();

const clear = (): void => {
    user = {
        tokenId: "",
        id: "",
        username: "",
        fullName: ""
    };
    simpleLocalStorage.clear();
    authorization.clear();
}
export default { hasLogin, getUser, getAuthorization, persistUser, clear }
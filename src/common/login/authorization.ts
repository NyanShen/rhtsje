/**
 * import JSEncrypt from "jsencript";
 * const encript = new JSEncript();
 * encript.setPublicKey("public key from backend")
 **/

let authorization: string | undefined;

const encodeNonASC = (str: string) => {
    return /^[\x00-\x7F]*$/.test(str) ? str : encodeURIComponent(str);
}

function basic(username: string, password: string) {
    if (arguments.length === 2) {
        authorization = "Basic " + btoa(`${encodeNonASC(username)}:${encodeNonASC(password)}`);
        // encript.encript(authorization)
    }
    return authorization;
}

function token(tokenId: string) {
    if (arguments.length === 1) {
        authorization = `Token ${tokenId}`;
    }
    return authorization;
}

const get = () => authorization;

const clear = () => {
    authorization = undefined;
}

export default { get, clear, token, basic };

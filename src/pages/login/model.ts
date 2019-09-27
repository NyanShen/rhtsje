export interface ILoginData {
    account?: string;
    password?: string;
    mobile?: string;
    verifyCode?: string;
}

export interface ILoginValidation {
    mobilePattern?: boolean;
    mobileRequired?: boolean;
    accountRequired?: boolean;
    verifyCodeRequired?: boolean;
    passwordRequired?: boolean;
}

export interface IShowElement {
    showSMS: boolean;
    showPass: boolean;
    showMobile: boolean;
}
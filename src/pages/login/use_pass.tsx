import * as React from "react";
import { useState, useEffect } from "react";

import SVGIcon from "../../components/svg-icon";
import CountiesSelectPopover from "../../components/popover/counties_select";

interface ILoginPass {
    account?: string;
    password?: string;
}
interface ILoginPassValidation {
    accountPattern?: boolean;
    accountRequired?: boolean;
    passwordRequired?: boolean;
}

const usePass = (loginWay: String) => {
    const [loginData, setLoginData] = useState<ILoginPass>({account: ""});
    const [showPass, setShowPassword] = useState<Boolean>(false);
    const [showMobile, setShowMobile] = useState<Boolean>(false);
    const [validation, setValidation] = useState<ILoginPassValidation>({});

    const accountRef = React.createRef<HTMLInputElement>();
    const passRef = React.createRef<HTMLInputElement>();

    useEffect(() => {
        setValidation({});
    }, [loginWay]);

    const switchShowPassword = () => {
        setShowPassword(showPass => !showPass);
    }

    const switchShowMobile = () => {
        setShowMobile(showMobile => !showMobile);
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const onInputBlur = (name: string) => {
        if (!loginData[name]) {
            setValidation({
                ...validation,
                [`${name}Required`]: true
            });
        }
    }

    const onInputAccount = () => {
        setValidation({
            ...validation,
            accountRequired: false
        });
        accountRef.current.focus();
    }

    const onInputPass = () => {
        setValidation({
            ...validation,
            passwordRequired: false
        });
        passRef.current.focus();
    }

    const getAcountErrorClass = () => {
        let basicClass = "sym-input-error-mask error-account";
        const mobileClass = showMobile && "error-mobile";
        const requiredErrorClass = validation.accountRequired && "error-show";
        return `${basicClass} ${mobileClass} ${requiredErrorClass}`;
    }

    const getPassErrorClass = () => {
        let basicClass = "sym-input-error-mask";
        const requiredErrorClass = validation.passwordRequired && "error-show";
        return `${basicClass} ${requiredErrorClass}`;
    }

    const renderer = (
        <>
            <div className="sym-form-item sym-account">
                {showMobile && <div className="sym-countries-select-wrapper"><CountiesSelectPopover /></div>}
                {showMobile && <span className="sym-account-seprator">&nbsp;</span>}
                <div className="sym-input-wrapper">
                    <input
                        type="text"
                        name="account"
                        placeholder="手机号或邮箱"
                        ref={accountRef}
                        value={loginData.account}
                        onChange={onInputChange}
                        onBlur={() => onInputBlur("account")}
                    />
                    <div className={getAcountErrorClass()} onClick={onInputAccount}>请输入手机号或邮箱</div>
                </div>
            </div>
            <div className="sym-form-item sym-password">
                <div className="sym-input-wrapper">
                    <input
                        type={showPass ? "text" : "password"}
                        name="password"
                        placeholder="密码"
                        ref={passRef}
                        onChange={onInputChange}
                        onBlur={() => onInputBlur("password")}
                    />
                    <div className={getPassErrorClass()} onClick={onInputPass}>请输入密码</div>
                </div>
                <button
                    type="button"
                    className="sym-btn sym-btn-plain sym-btn-password-switch"
                    onClick={switchShowPassword}
                >
                    <SVGIcon viewBox="0 0 24 24" name={showPass ? "showPass" : "hiddenPass"} />
                </button>
            </div>
            <div className="sym-form-options">
                <button type="button" className="sym-btn sym-btn-plain sym-form-option-switch" onClick={switchShowMobile}>
                    {showMobile ? "邮箱账号登录" : "海外手机号登录"}
                </button>
                <button type="button" className="sym-btn sym-btn-plain sym-form-forget-pass">忘记密码？</button>
            </div>
        </>
    )
    return [loginData, renderer]
}

export default usePass;
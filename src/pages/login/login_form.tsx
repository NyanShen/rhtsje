import * as React from "react";
import { useState, useEffect } from "react";

import LoginFormTip from "./login_form_tip";
import SVGIcon from "../../components/svg-icon";
import CountiesSelectPopover from "../../components/popover/counties_select";
import { ILoginData, ILoginValidation, IShowElement } from "./model";

const initShowElement = { showSMS: true, showPass: false, showMobile: false };
const initLoginData = { mobile: "", account: "", password: "", verifyCode: "" };

const LoginForm = () => {
    const [loginWay, setloginWay] = useState<String>("pass");
    const [loginData, setLoginData] = useState<ILoginData>(initLoginData);
    const [showElement, setShowElement] = useState<IShowElement>(initShowElement);
    const [validation, setValidation] = useState<ILoginValidation>({});

    const accountRef = React.createRef<HTMLInputElement>();
    const passwordRef = React.createRef<HTMLInputElement>();
    const mobileRef = React.createRef<HTMLInputElement>();
    const verifyCodeRef = React.createRef<HTMLInputElement>();

    const LoginRefs = { accountRef, mobileRef, passwordRef, verifyCodeRef };

    useEffect(() => {
        setValidation({});
    }, [loginWay]);

    const switchLoginWay = (way: String) => {
        setloginWay(way);
    }

    const switchShowElement = (name: string) => {
        setShowElement({
            ...showElement,
            [name]: !showElement[name]
        });
    }

    const fetchVerifyCode = () => { }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    }

    const onInputBlur = (name: string) => {
        if (!loginData[name]) {
            setValidation({
                ...validation,
                [`${name}Required`]: true
            });
        }
    }

    const onInputClick = (name: string) => {
        setValidation({
            ...validation,
            [`${name}Required`]: false
        });
        LoginRefs[`${name}Ref`].current.focus();
    }

    const getTabClass = (way: String) => {
        let basicClass = "sym-form-tab";
        return loginWay === way ? basicClass : `${basicClass} sym-form-tab-active`
    }

    const getErrorClass = (name: string) => {
        let basicClass = "sym-input-error-mask";
        let requiredErrorClass = "";
        switch (name) {
            case "mobile":
                basicClass = `${basicClass} error-account error-mobile`;
                requiredErrorClass = validation.mobileRequired && "error-show";
                return `${basicClass} ${requiredErrorClass}`;
            case "account":
                basicClass = "sym-input-error-mask error-account";
                const mobileClass = showElement.showMobile && "error-mobile";
                requiredErrorClass = validation.accountRequired && "error-show";
                return `${basicClass} ${mobileClass} ${requiredErrorClass}`;
            case "password":
            case "verifyCode":
                requiredErrorClass = validation[`${name}Required`] && "error-show";
                return `${basicClass} ${requiredErrorClass}`;
            default:
                return basicClass;
        }
    }

    const getShowText = () => {
        return showElement.showSMS ? "短信" : "语音";
    }

    const renderInputElement = (name: string, placeholder: string) => {
        return (
            <div className="sym-input-wrapper">
                <input
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    ref={LoginRefs[`${name}Ref`]}
                    value={loginData[name]}
                    onChange={onInputChange}
                    onBlur={() => onInputBlur(name)}
                />
                <div className={getErrorClass(name)} onClick={() => onInputClick(name)}>{`请输入${placeholder}`}</div>
            </div>
        );
    }

    const renderMobileElement =
        <>
            <div className="sym-form-item sym-account">
                <div className="sym-countries-select-wrapper"><CountiesSelectPopover /></div>
                <span className="sym-account-seprator">&nbsp;</span>
                {renderInputElement("mobile", "手机号")}
            </div>
            <div className="sym-form-item sym-password">
                {renderInputElement("verifyCode", `输入 6 位${getShowText()}验证码`)}
                <button
                    type="button"
                    className="sym-btn sym-btn-plain sym-btn-sms-input"
                    onClick={fetchVerifyCode}
                >
                    {`获取${getShowText()}验证码`}
                </button>
            </div>
            <div className="sym-form-options">
                <button type="button" className="sym-btn sym-btn-plain sym-form-option-switch"></button>
                <button type="button" className="sym-btn sym-btn-plain sym-form-forget-pass" onClick={() => switchShowElement("showSMS")}>
                    {showElement.showSMS ? "接收语音验证码" : "接收短信验证码"}
                </button>
            </div>
        </>

    const renderAccountElement =
        <>
            <div className="sym-form-item sym-account">
                {showElement.showMobile && <div className="sym-countries-select-wrapper"><CountiesSelectPopover /></div>}
                {showElement.showMobile && <span className="sym-account-seprator">&nbsp;</span>}
                {renderInputElement("account", "手机号或邮箱")}
            </div>
            <div className="sym-form-item sym-password">
                {renderInputElement("password", "密码")}
                <button
                    type="button"
                    className="sym-btn sym-btn-plain sym-btn-password-switch"
                    onClick={() => switchShowElement("showPass")}
                >
                    <SVGIcon viewBox="0 0 24 24" name={showElement.showPass ? "showPass" : "hiddenPass"} />
                </button>
            </div>
            <div className="sym-form-options">
                <button type="button" className="sym-btn sym-btn-plain sym-form-option-switch" onClick={() => switchShowElement("showMobile")}>
                    {showElement.showMobile ? "邮箱账号登录" : "海外手机号登录"}
                </button>
                <button type="button" className="sym-btn sym-btn-plain sym-form-forget-pass">忘记密码？</button>
            </div>
        </>

    return (
        <div className="sym-login-content">
            <div className="sym-login-inner">
                <form className="sym-login-form" noValidate>
                    <div className="sym-form-tabs">
                        <div className={getTabClass("code")} onClick={() => switchLoginWay("pass")}>免密码登录</div>
                        <div className={getTabClass("pass")} onClick={() => switchLoginWay("code")}>密码登录</div>
                    </div>
                    {loginWay === "pass" ? renderAccountElement : renderMobileElement}
                    <button type="button" className="sym-btn sym-btn-primary sym-btn-submit">注册/登录</button>
                    <LoginFormTip />
                </form>
            </div>
        </div>
    );
}
export default LoginForm;
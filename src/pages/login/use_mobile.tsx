import * as React from "react";
import { useState, useEffect } from "react";

import CountiesSelectPopover from "../../components/popover/counties_select";

interface ILoginMobile {
    mobile?: string;
    verifyCode?: string;
}
interface ILoginMobileValidation {
    mobilePattern?: boolean;
    mobileRequired?: boolean;
    verifyCodeRequired?: boolean;
}

const useMobile = (loginWay: String) => {
    const [showSMS, setShowSMS] = useState<Boolean>(true);
    const [loginData, setLoginData] = useState<ILoginMobile>({mobile: ""});
    const [validation, setValidation] = useState<ILoginMobileValidation>({});
    const mobileRef = React.createRef<HTMLInputElement>();
    const verifyCodeRef = React.createRef<HTMLInputElement>();

    useEffect(() => {
        setValidation({});
    }, [loginWay]);

    const switchShowSMS = () => {
        setShowSMS(showSMS => !showSMS);
    }

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

    const onInputMobile = () => {
        setValidation({
            ...validation,
            mobileRequired: false
        });
        mobileRef.current.focus();
    }

    const onInputVerifyCode = () => {
        setValidation({
            ...validation,
            verifyCodeRequired: false
        });
        verifyCodeRef.current.focus();
    }

    const fetchVerifyCode = () => { }

    const getMobileErrorClass = () => {
        let basicClass = "sym-input-error-mask error-account error-mobile";
        const requiredErrorClass = validation.mobileRequired && "error-show";
        return `${basicClass} ${requiredErrorClass}`;
    }

    const getVerifyCodeErrorClass = () => {
        let basicClass = "sym-input-error-mask";
        const requiredErrorClass = validation.verifyCodeRequired && "error-show";
        return `${basicClass} ${requiredErrorClass}`;
    }

    const getShowText = () => {
        return showSMS ? "短信" : "语音";
    }

    const renderer = (
        <>
            <div className="sym-form-item sym-account">
                <div className="sym-countries-select-wrapper"><CountiesSelectPopover /></div>
                <span className="sym-account-seprator">&nbsp;</span>
                <div className="sym-input-wrapper">
                    <input
                        type="text"
                        name="mobile"
                        placeholder="手机号"
                        ref={mobileRef}
                        value={loginData.mobile}
                        onChange={onInputChange}
                        onBlur={() => onInputBlur("mobile")}
                    />
                    <div className={getMobileErrorClass()} onClick={onInputMobile}>请输入手机号</div>
                </div>
            </div>
            <div className="sym-form-item sym-password">
                <div className="sym-input-wrapper">
                    <input
                        type="text"
                        name="verifyCode"
                        placeholder={`输入 6 位${getShowText()}验证码`}
                        ref={verifyCodeRef}
                        onChange={onInputChange}
                        onBlur={() => onInputBlur("verifyCode")}
                    />
                    <div className={getVerifyCodeErrorClass()} onClick={onInputVerifyCode}>请输入 6 位短信验证码</div>
                </div>
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
                <button type="button" className="sym-btn sym-btn-plain sym-form-forget-pass" onClick={switchShowSMS}>
                    {showSMS ? "接收语音验证码" : "接收短信验证码"}
                </button>
            </div>
        </>
    )
    return [loginData, renderer]
}

export default useMobile;
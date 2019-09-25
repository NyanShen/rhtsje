import * as React from "react";
import { useState } from "react";

import SVGIcon from "../../components/svg-icon";
import CountiesSelectPopover from "../../components/popover/counties_select";

interface ILoginPass {
    account?: string;
    password?: string;
}

const usePass = () => {
    const [loginData, setLoginData] = useState<ILoginPass>({});
    const [showPass, setShowPassword] = useState<Boolean>(false);
    const [showMobile, setShowMobile] = useState<Boolean>(false);

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

    const renderer = (
        <>
            <div className="sym-form-item sym-account">
                {showMobile && <div className="sym-countries-select-wrapper"><CountiesSelectPopover /></div>}
                {showMobile && <span className="sym-account-seprator">&nbsp;</span>}
                <div className="sym-input-wrapper">
                    <input type="text" name="account" placeholder="手机号或邮箱" value={loginData.account} onChange={onInputChange} />
                </div>
                <div className="sym-input-error-mask">请输入手机号或邮箱</div>
            </div>
            <div className="sym-form-item sym-password">
                <div className="sym-input-wrapper">
                    <input type={showPass ? "text" : "password"} name="password" placeholder="密码" onChange={onInputChange} />
                </div>
                <div className="sym-input-error-mask">请输入密码</div>
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
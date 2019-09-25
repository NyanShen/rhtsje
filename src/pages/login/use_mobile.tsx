import * as React from "react";
import { useState } from "react";

import CountiesSelectPopover from "../../components/popover/counties_select";

interface ILoginMobile {
    mobile?: string;
    verifyCode?: string;
}

const useMobile = () => {
    const [loginData, setLoginData] = useState<ILoginMobile>({});
    const [showSMS, setShowSMS] = useState<Boolean>(true);

    const switchShowSMS = () => {
        setShowSMS(showSMS => !showSMS);
    }

    const getShowText = () => {
        return showSMS ? "短信": "语音";
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const fetchVerifyCode = () => {}

    const renderer = (
        <>
            <div className="sym-form-item sym-account">
                <div className="sym-countries-select-wrapper"><CountiesSelectPopover /></div>
                <span className="sym-account-seprator">&nbsp;</span>
                <div className="sym-input-wrapper">
                    <input type="text" name="mobile" placeholder="手机号" value={loginData.mobile} onChange={onInputChange} />
                </div>
                <div className="sym-input-error-mask">请输入手机号</div>
            </div>
            <div className="sym-form-item sym-password">
                <div className="sym-input-wrapper">
                    <input type="text" name="verifyCode" placeholder={`输入 6 位${getShowText()}验证码`} onChange={onInputChange} />
                </div>
                <div className="sym-input-error-mask">输入 6 位短信验证码</div>
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
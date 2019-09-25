import * as React from "react";
import { useState } from "react";

import SVGIcon from "../../components/svg-icon";
import CountiesSelectPopover from "../../components/popover/counties_select";

const LoginForm = () => {
    const [loginWay, setloginWay] = useState<String>("pass");
    const [showPass, setShowPassword] = useState<Boolean>(false);

    const switchLoginWay = (way: String) => {
        setloginWay(way);
    }
    const getTabClass = (way: String) => {
        let basicClass = "sym-form-tab";
        return loginWay === way ? basicClass : basicClass + " sym-form-tab-active"
    }
    const switchShowPassword = () => {
        setShowPassword(showPass => !showPass);
    }
    return (
        <div className="sym-login-content">
            <div className="sym-login-inner">
                <form className="sym-login-form">
                    <div className="sym-form-tabs">
                        <div className={getTabClass("code")} onClick={() => switchLoginWay("pass")}>免密码登录</div>
                        <div className={getTabClass("pass")} onClick={() => switchLoginWay("code")}>密码登录</div>
                    </div>
                    <div className="sym-form-item sym-account">
                        <div className="sym-countries-select-wrapper">
                            <CountiesSelectPopover />
                        </div>
                        <span className="sym-account-seprator">&nbsp;</span>
                        <div className="sym-input-wrapper">
                            <input type="text" placeholder="手机号或邮箱" />
                        </div>
                        <div className="sym-input-error-mask">请输入手机号或邮箱</div>
                    </div>
                    <div className="sym-form-item sym-password">
                        <div className="sym-input-wrapper">
                            <input type={showPass ? "text" : "password"} placeholder="密码" />
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
                        <button type="button" className="sym-btn sym-btn-plain sym-form-option-switch">海外手机号登录</button>
                        <button type="button" className="sym-btn sym-btn-plain sym-form-forget-pass">忘记密码？</button>
                    </div>
                    <button type="submit" className="sym-btn sym-btn-primary sym-btn-submit">注册/登录</button>
                    <div className="sym-form-tip">
                        <div>
                            <div>未注册手机验证后自动登录</div>
                            <div>
                                注册即代表同意
                                <a href="https://www.zhihu.com/terms">《知乎协议》</a>
                                <a href="https://www.zhihu.com/term/privacy">《隐私保护指引》</a>
                            </div>
                        </div>
                        <a href="https://www.zhihu.com/org/signup">注册机构号</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;
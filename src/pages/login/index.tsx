import * as React from "react";
import { useState } from "react";
import "./index.scss";
import SVGIcon from "../../components/svg-icon";

const Login = () => {
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
                    <div className="sym-account">
                        <div className="sym-input-wrapper">
                            <input type="text" placeholder="手机号或邮箱" />
                        </div>
                        <div className="sym-input-error-mask">请输入手机号或邮箱</div>
                    </div>
                    <div className="sym-password">
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
                    <div className="sym-verify-code">

                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;
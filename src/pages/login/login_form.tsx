import * as React from "react";
import { useState } from "react";
import usePass from "./use_pass";
import useMobile from "./use_mobile";

import LoginFormTip from "./login_form_tip";

const LoginForm = () => {
    const [loginWay, setloginWay] = useState<String>("pass");
    const [loginPass, passRenderer] = usePass();
    const [loginMobile, mobileRenderer] = useMobile();

    const switchLoginWay = (way: String) => {
        setloginWay(way);
    }
    const getTabClass = (way: String) => {
        let basicClass = "sym-form-tab";
        return loginWay === way ? basicClass : basicClass + " sym-form-tab-active"
    }
    return (
        <div className="sym-login-content">
            <div className="sym-login-inner">
                <form className="sym-login-form">
                    <div className="sym-form-tabs">
                        <div className={getTabClass("code")} onClick={() => switchLoginWay("pass")}>免密码登录</div>
                        <div className={getTabClass("pass")} onClick={() => switchLoginWay("code")}>密码登录</div>
                    </div>
                    {loginWay === "code" ? passRenderer : mobileRenderer}
                    <button type="submit" className="sym-btn sym-btn-primary sym-btn-submit">注册/登录</button>
                    <LoginFormTip />
                </form>
            </div>
        </div>
    );
}
export default LoginForm;
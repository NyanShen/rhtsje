import * as React from "react";
import { useState } from "react";
import "./index.scss";
import SVGIcon from "../../components/svg-icon";

const Login = () => {
    const [showPass, setShowPassword] = useState<Boolean>(false);
    const switchShowPassword = () => {
        setShowPassword(showPass => !showPass);
    }
    return (
        <div className="sym-login-content">
            <div className="sym-login-inner">
                <form className="sym-login-form">
                    <div className="sym-account">
                        login form
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
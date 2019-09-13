import * as React from "react";
import "./index.scss";

const Login = () => {
    return (
        <div className="sym-login-content">
            <div className="sym-login-inner">
                <form className="sym-login-form">
                    <div className="sym-account">
                        login form
                    </div>
                    <div className="sym-password">
                        <div className="sym-input-wrapper">
                            <input type="password" placeholder="密码"/>
                        </div>
                        <div className="sym-input-error-mask">请输入密码</div>
                        <button type="button" className="sym-btn sym-btn-plain sym-btn-password-switch">asss</button>
                    </div>
                    <div className="sym-verify-code">

                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;
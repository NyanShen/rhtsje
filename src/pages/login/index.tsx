import * as React from "react";
import LoginForm from "./login_form";
import LoginSocial from "./login_social";
import ZhihuLogo from "../../assets/zhihu_logo.png";
import "./index.scss";

const Login = () => {
    return (
        <div className="signFlowLoginPage">
            <div className="signFlowLoginPage-content">
                <img className="signFlowLoginPage-logo" src={ZhihuLogo} alt="有问题找知乎"/>
                <LoginForm />
                <LoginSocial />
            </div>
        </div>
    );
}

export default Login;
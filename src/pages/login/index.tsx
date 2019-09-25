import * as React from "react";
import ZhihuSVG from "../../components/svg-icon/zhihu_svg";
import LoginForm from "./login_form";
import LoginFooter from "./login_footer";
import LoginSocial from "./login_social";
import ZhihuLogo from "../../assets/zhihu_logo.png";
import "./index.scss";

const Login = () => {
    return (
        <div className="signFlowLoginPage">
            <div className="signFlowLoginPage-content">
                <img className="signFlowLoginPage-logo" src={ZhihuLogo} alt="有问题找知乎" />
                <LoginForm />
                <LoginSocial />
                <button type="button" className="sym-btn signFlowLoginPage-download">
                    <div>
                        <ZhihuSVG />
                        下载知乎 App
                    </div>
                </button>
                <LoginFooter />
            </div>
        </div>
    );
}

export default Login;
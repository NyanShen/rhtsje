import * as React from "react";
import SVGIcon from "../../components/svg-icon";

const LoginSocial = () => {
    return (
        <div className="loginSocial">
            <span>社交帐号登录</span>
            <span className="loginSocial-btnGroup">
                <div className="loginSocial-btn">
                    <SVGIcon
                        name="wechat"
                        fill="#60c84d"
                        viewBox="0 0 20 19"
                        className="loginSocial-svg"
                    />
                    微信</div>
                <div className="loginSocial-btn">
                <SVGIcon
                        name="QQ"
                        fill="#50c8fd"
                        viewBox="0 0 20 19"
                        className="loginSocial-svg"
                    />
                    QQ</div>
                <div className="loginSocial-btn">
                <SVGIcon
                        name="weibo"
                        fill="#fb6622"
                        viewBox="0 0 20 19"
                        className="loginSocial-svg"
                    />
                    微博</div>
            </span>
        </div>
    );
}

export default LoginSocial;
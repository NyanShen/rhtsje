import * as React from "react";

const LoginFormTip = () => {
    return (
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
    );
};

export default LoginFormTip;
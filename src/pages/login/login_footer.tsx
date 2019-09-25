import * as React from "react";
import Org from "../../assets/org.png";

const LoginFooter = () => {
    return (
        <footer className="signFlowLoginPage-footer">
            <div className="zhihu-links">
                <a target="_blank" rel="noopener noreferrer" href="https://zhuanlan.zhihu.com/">知乎专栏</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.zhihu.com/roundtable">圆桌</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.zhihu.com/explore">发现</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.zhihu.com/app/">移动应用</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.zhihu.com/contact">联系我们</a>
                <a target="_blank" rel="noopener noreferrer" href="https://app.mokahr.com/apply/zhihu/3819#/?_k=p2ufo6">来知乎工作</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.zhihu.com/org/signup">注册机构号</a>
            </div>
            <div className="zhihu-rights">
                <span>© 2019 知乎</span>
                <a target="_blank" rel="noopener noreferrer" href="https://www.zhihu.com/contact">京 ICP 证 110745 号</a>
                <a target="_blank" rel="noopener noreferrer" href="https://app.mokahr.com/apply/zhihu/3819#/?_k=p2ufo6">
                    <img src={Org} alt="" />
                    京公网安备 11010802010035 号
                    </a>
                <a target="_blank" rel="noopener noreferrer" href="https://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg">出版物经营许可证</a>
            </div>
            <div className="zhihu-reports">
                <a target="_blank" rel="noopener noreferrer" href="https://zhuanlan.zhihu.com/p/51068775">侵权举报</a>
                <a target="_blank" rel="noopener noreferrer" href="http://www.12377.cn/">网上有害信息举报专区</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.zhihu.com/jubao">
                    <span>违法和不良信息举报：010-82716601</span>
                </a>
            </div>
        </footer>
    )
}

export default LoginFooter;
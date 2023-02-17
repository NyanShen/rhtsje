/**
 * APP UI Layout
 */
import * as React from "react";
import zhCN from 'antd/es/locale/zh_CN';
import AppHeader from "../appHeader";
import AppFooter from "../appFooter";
import "./index.styl"
import { ConfigProvider } from "antd";
/**
 * 函数式组件
 * @param props 
 * @returns 
 */
const AppLayout: React.FunctionComponent<{}> = (props: React.PropsWithChildren<{}>) => {
    return (
        <ConfigProvider locale={zhCN}>
            <div className="layout">
                <AppHeader />
                {props.children}
                <AppFooter />
            </div>
        </ConfigProvider>
    )
}
export default AppLayout
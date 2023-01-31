/**
 * APP UI Layout
 */
import * as React from "react";

import AppHeader from "../appHeader";
import AppFooter from "../appFooter";
import "./index.styl"
/**
 * 函数式组件
 * @param props 
 * @returns 
 */
const AppLayout: React.FunctionComponent<{}> = (props: React.PropsWithChildren<{}>) => {
    return (
        <div className="layout">
            <AppHeader />
            {props.children}
            <AppFooter />
        </div>
    )
}
export default AppLayout
/**
 * APP content UI 
 */
import * as React from "react";

import "./index.styl"

/**
 * 组件属性定义
 */
interface IProps { className?: string }
/**
 * 函数式组件
 * @param props 
 * @returns 
 */
const Content: React.FunctionComponent<IProps> = (props: React.PropsWithChildren<IProps>) => {
    return (
        <div className={props.className ? "content " + props.className : "content"}>
            {props.children}
        </div>
    )
}
export default Content
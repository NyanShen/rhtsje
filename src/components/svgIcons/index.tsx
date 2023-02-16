/**
 * svg 输入 icons
 */
import * as React from "react";
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

import SVGPath from "./config";
import CopySVG from "./copy/index";
import ConinbaseSVG from "./coinbase/index";

export const SVGIcon = ({
    name = "hiddenPass",
    style = {},
    fill = "#8590a6",
    width = "100%",
    height = "100%",
    className = "",
    viewBox = "0 0 32 32"
}) => (
    <svg
        style={style}
        width={width}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <SVGPath fill={fill} name={name} />
    </svg>
)
const svgToIcon = (SVG: React.ComponentType) => {
    return (props: Partial<CustomIconComponentProps>) => (
        <Icon component={SVG} {...props} />
    )
}
/**
 * 复制icon
 */
export const CopyIcon = svgToIcon(CopySVG);
/**
 * 币基图标
 */
export const CoinbaseIcon = svgToIcon(ConinbaseSVG);
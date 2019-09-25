import * as React from "react";

import "./index.scss";
import SVGPath from "./config";

const SVGIcon = ({
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
export default SVGIcon;
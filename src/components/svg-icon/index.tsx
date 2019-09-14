import * as React from "react";

import {getSVGPathByName} from "./config";
import "./index.scss";

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
            <g>
                <path
                    fill={fill}
                    fillRule="evenodd"
                    d={getSVGPathByName(name)}
                />
            </g>
        </svg>
    )
export default SVGIcon;
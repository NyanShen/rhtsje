import * as React from "react";
import "./index.styl";

const CopySVG = () => {
    return (
        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.25">
                <rect x="5" y="1" width="14" height="14" rx="3" stroke="var(--c-blue-d1)" strokeWidth="2"></rect>
                <path d="M4 4C1.79086 4 0 5.79086 0 8V16C0 18.2091 1.79086 20 4 20H12C14.2091 20 16 18.2091 16 16H14C14 17.1046 13.1046 18 12 18H4C2.89543 18 2 17.1046 2 16V8C2 6.89543 2.89543 6 4 6V4Z" fill="var(--c-blue-d1)">
                </path>
            </g>
        </svg>
    );
}

export default CopySVG;

import * as React from "react";

import SVGIcon from "../svg-icon";

const CountiesSelectPopover = () => {

    const counties_select = [
        {
            is_hot: true,
            code: "+86",
            name: "中国",
            abbr: "CN"
        },
        {
            is_hot: true,
            code: "+1",
            name: "美国",
            abbr: "US"
        }
    ]

    return (
        <>
            <div className="sym-popover-select">
                <button className="sym-btn sym-btn-plain sym-btn-select">
                    中国 +86
                    <span className="sym-popover-select-icon">
                    <SVGIcon viewBox="0 0 24 24" name={"selectList"} width="24px" height="24px"/>
                    </span>
                </button>
            </div>
            <div className="sym-popover-content">
                <div className="sym-popover-select-list" role="listox">
                    <button className="sym-btn sym-btn-plain sym-popover-select-option"  tabIndex={-1} role="option"></button>
                </div>
            </div>
        </>
    )
}
export default CountiesSelectPopover;
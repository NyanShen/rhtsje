import React, { useState } from "react"

import header_logo from "../../images/header_logo.png"
import "./index.styl"

const AppHeader = () => {
    /**
     * 打开关闭抽屉
     */
    const [open, setOpen] = useState<boolean>(true);
    return (
        <div className="header">
            <div className="withRow container" style={{ height: 41 }}>
                <div className="headerLogo operationItem">
                    <img src={header_logo} />
                    <div className="headerTitle">
                        <p className="p1">处方流转链</p>
                        <p className="p2">cita Microscope</p>
                    </div>
                </div>
                <div className="flex_1 leftAuto">
                    menu
                </div>
            </div>


        </div>
    )
}

export default AppHeader
import React from "react"
import hospital_logo from "../../images/hospital_logo.png"
import "./index.styl"

const ContentHeader = () => {
    return (
        <div className="index-wrapper_top">
            <div className="flex-row flex-i-c content-header_right">
                <img src={hospital_logo} />
                <div className="content-header_breadcrumbs">
                    <p>
                        <span>首页</span>
                        <span className="breadcrumbs_dot"></span>
                        <span>交易</span>
                    </p>
                    <p className="title">交易列表</p>
                </div>
            </div>
        </div>
    )
}

export default ContentHeader
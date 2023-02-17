import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Tooltip } from 'antd';
import { useParams } from 'react-router-dom';
import copy from "copy-to-clipboard";

import { CopyIcon } from '../../components/svgIcons/index';
import './detail.styl'
/**
 * 账户地址详情信息
 * @returns 
 */

const AccountDetail = () => {
    const [tooltipText, setTooltipText] = useState<string>("点击复制");
    let params: { id: string } = useParams();

    const handleCopy = () => {
        copy(params.id);
        setTooltipText("复制成功");
    }

    return (
        <div className="bg-dashboard d-grid dashboard-main-wrap">
            <Row>
                <Col span={16} offset={4}>
                    <div className="block-wrapper shadow-block mb-20">
                        <span className="c-grey">地址</span>
                        <div className="flex-row flex_i_c">
                            <h2 className="fs-20 mr-10">{params.id}</h2>
                            <div onClick={handleCopy} onMouseEnter={() => setTooltipText("点击复制")}>
                                <Tooltip title={tooltipText}>
                                    <CopyIcon className="c-p" />
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrap">
                        <div className="card-wrap-body">
                            <div className="card-item">
                                <h3 className="card-title">General info</h3>
                                <div className="d-grid d-grid-r10">
                                    <div className="d-grid d-grid-ckv">
                                        <span className="c-quiet">最新区块</span>
                                        <div>
                                            <span className="c-b">1</span>
                                        </div>
                                    </div>
                                    <div className="d-grid d-grid-ckv">
                                        <span className="c-quiet">测试web3 eth api</span>
                                        <div>
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div className="d-grid d-grid-ckv">
                                        <span className="c-quiet">账户地址？</span>
                                        <div>
                                            <span>3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AccountDetail
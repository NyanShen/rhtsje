import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { Col, Row, Tooltip } from 'antd';
import { useParams } from 'react-router-dom';
import copy from "copy-to-clipboard";

import { CopyIcon } from '../../components/svgIcons/index';
import { IRootState } from '../../redux/states';
import * as transactionAction from "../../redux/actions/transaction";
import './detail.styl'
/**
 * 根据交易hash查询详情信息
 * @returns 
 */

const TxDetail = ({ transaction, transactionAction }) => {
    const [tooltipText, setTooltipText] = useState<string>("点击复制");
    let params: { id: string } = useParams();

    const handleCopy = () => {
        copy(params.id);
        setTooltipText("复制成功");
    }
    useEffect(() => {
        transactionAction.getTransaction(params.id)
    }, [params.id])

    return (
        <div className="bg-dashboard d-grid dashboard-main-wrap">
            <Row>
                <Col span={16} offset={4}>
                    <div className="block-wrapper shadow-block mb-20">
                        <span className="c-grey">哈希值</span>
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
                                {
                                    transaction && transaction.item && (
                                        <div className="d-grid d-grid-r10">
                                            <div className="d-grid d-grid-ckv">
                                                <span className="c-quiet">区块</span>
                                                <div>
                                                    <span className="c-b">{transaction.item.blockNumber}</span>
                                                </div>
                                            </div>
                                            <div className="d-grid d-grid-ckv">
                                                <span className="c-quiet">发送方</span>
                                                <div>
                                                    <span>{transaction.item.from}</span>
                                                </div>
                                            </div>
                                            <div className="d-grid d-grid-ckv">
                                                <span className="c-quiet">区块哈希</span>
                                                <div>
                                                    <span>{transaction.item.blockHash}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default connect(
    (state: IRootState) => ({
        transaction: state.transaction
    }),
    (dispatch: Dispatch) => ({
        transactionAction: bindActionCreators(transactionAction, dispatch)
    }),
)(TxDetail)
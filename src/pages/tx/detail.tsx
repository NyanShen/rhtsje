import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Col, Row, Tooltip } from 'antd';
import Icon from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import copy from "copy-to-clipboard";

import CopySVG from '../../components/svgIcons/copySvg/index';
import './detail.styl'
import { IRootState } from '../../redux/states';
import * as transactionAction from "../../redux/actions/transaction";
/**
 * 根据交易hash查询详情信息
 * @returns 
 */
const CopyIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={CopySVG} {...props} />
);

const TxDetail = ({ transaction, transactionAction }) => {
    const [tooltipText, setTooltipText] = useState<string>("点击复制");
    let params: { id: string } = useParams();

    const handleCopy = () => {
        copy(params.id);
        setTooltipText("复制成功");
    }
    // todo: 死循环？？？
    // transactionAction.getTransaction(params.id)

    return (
        <div className="bg-dashboard d-grid dashboard-main-wrap">
            <Row>
                <Col span={16} offset={4}>
                    <div className="block-wrapper shadow-block mb-20">
                        <span className="c-grey">哈希值</span>
                        <div className="withRow flex_i_c">
                            <h2 className="fs-20 mr-10">{params.id}</h2>
                            <div onClick={handleCopy} onMouseEnter={() => setTooltipText("点击复制")}>
                                <Tooltip title={tooltipText}>
                                    <CopyIcon className="operationItem" />
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
                                        <span className="c-quiet">区块</span>
                                        <div>
                                            <span className="c-b">{transaction?.item?.blockNumber}</span>
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

export default connect(
    (state: IRootState) => ({
        transaction: state.transaction
    }),
    (dispatch: any) => ({
        transactionAction: bindActionCreators(transactionAction, dispatch)
    }),
)(TxDetail)
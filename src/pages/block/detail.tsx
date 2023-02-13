import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { Col, Row, Tooltip } from 'antd';
import Icon from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import copy from "copy-to-clipboard";

import CopySVG from '../../components/svgIcons/copySvg/index';
import { IRootState } from '../../redux/states';
import * as blockAction from "../../redux/actions/block";
import './detail.styl'
/**
 * 根据交易hash查询详情信息
 * @returns 
 */
const CopyIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={CopySVG} {...props} />
);

const BlockDetail = ({ block, blockAction }) => {
    const [tooltipText, setTooltipText] = useState<string>("点击复制");
    let params: { id: string } = useParams();

    const handleCopy = () => {
        copy(params.id);
        setTooltipText("复制成功");
    }
    useEffect(() => {
        blockAction.getBlock(params.id)
    }, [params.id])

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
                                {
                                    block && block.item && (
                                        <div className="d-grid d-grid-r10">
                                            <div className="d-grid d-grid-ckv">
                                                <span className="c-quiet">区块</span>
                                                <div>
                                                    <span className="c-b">{block.item.blockNumber}</span>
                                                </div>
                                            </div>
                                            <div className="d-grid d-grid-ckv">
                                                <span className="c-quiet">发送方</span>
                                                <div>
                                                    <span>{block.item.from}</span>
                                                </div>
                                            </div>
                                            <div className="d-grid d-grid-ckv">
                                                <span className="c-quiet">区块哈希</span>
                                                <div>
                                                    <span>{block.item.blockHash}</span>
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
        block: state.block
    }),
    (dispatch: Dispatch) => ({
        blockAction: bindActionCreators(blockAction, dispatch)
    }),
)(BlockDetail)
import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as dataAPI from '../../api/dataAPI';
import { IRootState } from "../../redux/states";
import { ADD_COUNT, SET_COUNT } from "../../redux/actionTypes";
import { testWeb3EthApi, isAddress } from "../../utils/web3";
import { topTransactions } from "../../api/rebirthAPI";
import "./index.styl"

const Login = ({ count, addCount, setCount }: any) => {
    const testAddress = `0x3fbef0cc8aac891279520d148188ebdb156bf70e`;
    const [blockNumber, setBlockNumber] = useState<number>(0);
    const [web3Str, setWeb3Str] = useState<string>("");
    const [blockHash, setBlockHash] = useState<string>("");
    const [isAddr, setIsAddr] = useState<boolean>(false);
    let history = useHistory();

    const testApi = async () => {
        let bn: number = await dataAPI.getBlockNumber();
        setBlockNumber(bn);
        let bh: any = await dataAPI.getBlock(blockNumber);
        setBlockHash(bh.hash)
        setWeb3Str(testWeb3EthApi())
        setIsAddr(isAddress(testAddress))
    }

    const add = () => {
        addCount(1)
    }

    const testRoute = () => {
        history.push("/account/123456")
    }

    const setCount15 = () => {
        setCount(15)
        topTransactions().then(response => {
            console.log("topTransactions>>>", response)
        })
    }

    testApi()

    return (
        <div className="bg-dashboard d-grid dashboard-main-wrap">
            <div className="d-grid dashboard-main">
                <div className="card-wrap">
                    <div className="card-wrap-body">
                        <div className="card-item">
                            <h3 className="card-title">所有时间</h3>
                            <div className="d-grid d-grid-r10">
                                <div className="d-grid d-grid-ckv">
                                    <span className="c-quiet">最新区块</span>
                                    <div className="t-r">
                                        <span className="c-b">{blockNumber.toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className="d-grid d-grid-ckv">
                                    <span className="c-quiet">测试web3 eth api</span>
                                    <div className="t-r">
                                        <span>{web3Str}</span>
                                    </div>
                                </div>
                                <div className="d-grid d-grid-ckv">
                                    <span className="c-quiet">cita服务账户地址</span>
                                    <div className="t-r">
                                        <span>{isAddr ? "是" : "否"}</span>
                                    </div>
                                </div>
                                <div className="d-grid d-grid-ckv">
                                    <span className="c-quiet">当前块高对应hash</span>
                                    <div className="t-r">
                                        <span>{blockHash}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-wrap">
                    <div className="card-wrap-body">
                        <div className="card-item">
                            <h3 className="card-title">内存池</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="test-wrap">
                <div className="title">测试redux数据：{count}</div>
                <button onClick={add}>+</button>
                <button onClick={testRoute}>测试路由</button>
                <button onClick={setCount15}>获取cita最新交易</button>
            </div>
        </div>
    );
}

export default connect(
    (state: IRootState) => ({
        count: state.test.count
    }),
    dispatch => ({
        addCount: (data: number) => dispatch({ type: ADD_COUNT, data }),
        setCount: (data: number) => dispatch({ type: SET_COUNT, data })
    })
)(Login);
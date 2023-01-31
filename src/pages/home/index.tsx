import * as React from "react";
import { connect } from "react-redux";
import * as dataAPI from '../../api/dataAPI';
import { IRootState } from "../../redux/states";
import { ADD_COUNT, SET_COUNT } from "../../redux/actionTypes";
import "./index.styl"
import { useState } from "react";

const Login = ({ count, addCount, setCount }: any) => {
    
    const [blockNumber, setBlockNumber] = useState<number>(0);

    const testApi = () => {
        dataAPI.getBlockNumber().then((res: number) => {
            setBlockNumber(res);
        })
    }

    const add = () => {
        addCount(1)
    }

    const setCount15 = () => {
        setCount(15)
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
                <button>-</button>
                <button onClick={setCount15}>15</button>
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
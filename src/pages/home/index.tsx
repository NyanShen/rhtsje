import * as React from "react";
import { connect } from "react-redux";
import * as dataAPI from '../../api/dataAPI';
import { IRootState } from "../../redux/states";
import * as test from "../../redux/reducers/test"
import { ADD_COUNT, SET_COUNT } from "../../redux/actionTypes";
import "./index.styl"

const Login = ({count, addCount, setCount}: any) => {
    let str = "test";
    console.log(str)

    const testApi = () => {
        dataAPI.getBlockNumber().then((res: any) => {
            console.log(res)
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
        <div className="home">
            <div className="title">测试redux数据：{count}</div>
            <button onClick={add}>+</button>
            <button>-</button>
            <button onClick={setCount15}>15</button>
        </div>
    );
}

export default connect(
    (state: IRootState) => ({
        count: state.test.count
    }),
    dispatch => ({
        addCount: (data: number) => dispatch({type: ADD_COUNT, data} ),
        setCount: (data: number) => dispatch({type: SET_COUNT, data} )
    })
)(Login);
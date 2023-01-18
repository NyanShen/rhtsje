import * as React from "react";
import { connect } from "react-redux";
import * as dataAPI from '../../api/dataAPI';
import { IRootState } from "../../redux/states";
import * as test from "../../redux/reducers/test"
import { ADD_COUNT } from "../../redux/actionTypes";

const Login = ({count, addCount}) => {

    const testApi = () => {
        dataAPI.getBlockNumber().then(res => {
            console.log(res)
        })
    }

    const add = () => {
        addCount(1)
        setTimeout(() => {
            console.log('>>>',count)
        }, 3000);
    }

    testApi()

    return (
        <div className="signFlowLoginPage">
            <div>测试redux数据：{count}</div>
            <button onClick={add}>+</button>
            <button>-</button>
            <button>15</button>
        </div>
    );
}

export default connect(
    (state: IRootState) => {
        return {
            count: state.test.count
        }
    },
    dispatch => ({
        addCount: (num) => dispatch({type: ADD_COUNT, num} )
    })
)(Login);
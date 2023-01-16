import * as React from "react";
import * as dataAPI from '../../api/dataAPI';

const Login = () => {

    const testApi = () => {
        dataAPI.getBlockNumber().then(res => {
            console.log(res)
        }) 
    }

    testApi()
    
    return (
        <div className="signFlowLoginPage">
            测试页面
        </div>
    );
}

export default Login;
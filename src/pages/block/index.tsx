import * as React from "react";
import * as dataAPI from '../../api/dataAPI';

import { Button } from "antd";

const Login = () => {

    const testApi = () => {
        dataAPI.getBlockNumber().then(res => {
            console.log(res)
        }) 
    }

    testApi()
    
    return (
        <div className="bg-dashboard d-grid dashboard-main-wrap">
            <Button type="primary">测试页面</Button>
        </div>
    );
}

export default Login;
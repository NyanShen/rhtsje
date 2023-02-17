import * as React from "react";
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home";
import Search from "./pages/search";
import AccountDetail from "./pages/account/detail";
import BlockList from "./pages/block/list";
import BlockDetail from "./pages/block/detail";
import TxList from "./pages/tx/list";
import TxDetail from "./pages/tx/detail";
import AppLayout from "./components/appLayout";
import configureStore from "./redux/configureStore";
import "antd/dist/antd.css";
import "./iconfont/iconfont.css";
import "./styles/_reset.css";
import "./styles/variables.css";
import "./styles/index.styl";

const App = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Router>
                <AppLayout>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home"></Redirect>
                        </Route>
                        <Route exact path="/home" component={Home}></Route>
                        <Route exact path="/search" component={Search}></Route>
                        <Route path="/account/:id" component={AccountDetail}></Route>
                        <Route exact path="/blockList" component={BlockList}></Route>
                        <Route path="/block/:id" component={BlockDetail}></Route>
                        <Route exact path="/txList" component={TxList}></Route>
                        <Route path="/tx/:id" component={TxDetail}></Route>
                    </Switch>
                </AppLayout>
            </Router>
        </Provider>
    )
}

export default App;
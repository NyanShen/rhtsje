import * as React from "react";
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home";
import AccountDetail from "./pages/account/detail";
import BlockDetail from "./pages/block/detail";
import TxDetail from "./pages/tx/detail";
import AppLayout from "./components/appLayout";
import configureStore from "./redux/configureStore";
import "antd/dist/antd.css";
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
                        <Route path="/account/:id" component={AccountDetail}></Route>
                        <Route path="/block/:id" component={BlockDetail}></Route>
                        <Route path="/tx/:id" component={TxDetail}></Route>
                    </Switch>
                </AppLayout>
            </Router>
        </Provider>
    )
}

export default App;
import * as React from "react";
import { Provider } from 'react-redux'
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Home from "./pages/home";
import configureStore from "./redux/configureStore";

const App = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"></Redirect>
                </Route>
                <Route exact path="/home" component={Home}></Route>
            </Switch>
        </Router>
        </Provider>
    )
}

export default App;
import * as React from "react";
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home";
import AppLayout from "./components/appLayout";
import configureStore from "./redux/configureStore";
import "./styles/_reset.css"
import "./styles/index.styl"

const App = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <AppLayout>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home"></Redirect>
                        </Route>
                        <Route exact path="/home" component={Home}></Route>
                    </Switch>
                </Router>
            </AppLayout>
        </Provider>
    )
}

export default App;
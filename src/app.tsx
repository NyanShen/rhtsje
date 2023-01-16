import * as React from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Login from "./pages/login";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login"></Redirect>
                </Route>
                <Route exact path="/login" component={Login}></Route>
            </Switch>
        </Router>
    )
}

export default App;
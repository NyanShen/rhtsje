import * as React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import Login from "./pages/login";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login}></Route>
            </Switch>
        </Router>
    )
}

export default App;
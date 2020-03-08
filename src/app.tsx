import * as React from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Login from "./pages/login";
import TodoList from "./todo_list/TodoList";
import "../node_modules/antd/dist/antd.css";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login"></Redirect>
                </Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/todolist" component={TodoList}></Route>
            </Switch>
        </Router>
    )
}

export default App;
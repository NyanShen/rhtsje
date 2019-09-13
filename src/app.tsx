import * as React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import Login from "./pages/login";
import TodoList from "./todo_list/TodoList";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/todolist" component={TodoList}></Route>
            </Switch>
        </Router>
    )
}

export default App;
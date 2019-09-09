import * as React from "react";
import Loadable from "react-loadable";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

const LoadableLogin = Loadable({
    loader: () => import('./pages/login'),
    loading: () => <div>loading...</div>
});

const LoadableTodoList = Loadable({
    loader: () => import('./todo_list/TodoList'),
    loading: () => <div>loading...</div>
});

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoadableLogin}></Route>
                <Route exact path="/todolist" component={LoadableTodoList}></Route>
            </Switch>
        </Router>
    )
}

export default App;
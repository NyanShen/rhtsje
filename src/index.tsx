import * as React from "react";
import * as ReactDom from "react-dom";

import TodoList from "./todo_list/TodoList";
import "./styles/main.scss";

const App = () => {
    return (
        <TodoList />
    )
}

ReactDom.render(
<App />, 
document.getElementById("root") as HTMLElement
)
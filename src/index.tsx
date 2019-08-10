import * as React from "react";
import * as ReactDom from "react-dom";
import Header from "./todo_list/Header";
import "./styles/main.scss";

const App = () => {
    return (
        <Header />
    )
}

ReactDom.render(
<App />, 
document.getElementById("root") as HTMLElement
)
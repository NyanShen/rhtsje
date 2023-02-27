import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./app";
import * as serviceWorker from './serviceWorker'

ReactDom.render(
    <App />,
    document.getElementById("root") as HTMLElement
)
serviceWorker.unregister();
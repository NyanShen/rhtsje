import * as React from "react";
import {Router} from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";

const renderWithRouter = (
    ui: React.ReactElement,
    { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => {
    return {
        ...render(<Router history={history}>{ui}</Router>),
        /**
         * adding `history` to the returned utilities to allow us
         * to reference it in our tests (just try to avoid using
         * this to test implementation details).
         */
        history,
    }
}
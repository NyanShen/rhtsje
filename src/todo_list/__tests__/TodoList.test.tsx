import * as React from "react";
import {mount} from "enzyme";
import {render} from "@testing-library/react";
import TodoList from "../TodoList";

it("test todo list", () => {
    const wrapper = render(<TodoList />)
})
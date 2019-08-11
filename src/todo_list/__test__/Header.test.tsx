import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "../Header";

let wrapper = null;

describe("test Header component", () => {
    beforeEach(() => {
        wrapper = render(<Header />);
    })

    it("should contain title 'TodoList'", () => { 
        const {getByText} = wrapper;
        const title = "TodoList";
        expect(getByText(title)).toBeInTheDocument();
    })

    it("should contain a input element", () => {
        const {getByTestId} = wrapper;
        expect(getByTestId("header_input")).toBeInTheDocument();
    })

    it("input initial value should be empty", () => { 
        const {getByTestId} = wrapper;
        expect(getByTestId("header_input").value).toEqual("");
    })

    it("value should be set when input some text", () => {
        const {getByTestId} = wrapper;
        const inputElem = getByTestId("header_input");
        const context = "input text test";
        fireEvent.change(inputElem, {target: {
            value: context
        }});
        expect(inputElem.value).toEqual(context);
    })
})
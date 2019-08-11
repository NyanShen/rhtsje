import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header";

describe("test Header component", () => {

    let wrapper = null;

    describe("test component contains element nodes", () => {
        beforeEach(() => {
            wrapper = render(<Header />);
        })

        it("should contain title 'TodoList'", () => {
            const { getByText } = wrapper;
            const title = "TodoList";
            expect(getByText(title)).toBeInTheDocument();
        })

        it("should contain a input element", () => {
            const { getByTestId } = wrapper;
            expect(getByTestId("header_input")).toBeInTheDocument();
        })
    })

    describe("test input element", () => {
        const fn = jest.fn();

        beforeEach(() => {
            wrapper = render(<Header addUndoItem={fn} />);
        })

        it("input initial value should be empty", () => {
            const { getByTestId } = wrapper;
            const inputElem = getByTestId("header_input");
            expect(inputElem.value).toEqual("");
        })

        it("input value should be set when input some text", () => {
            const { getByTestId } = wrapper;
            const inputElem = getByTestId("header_input");
            const context = "input text test";
            fireEvent.change(inputElem, { target: { value: context } });
            expect(inputElem.value).toEqual(context);
        })

        it("input value is empty, onKeyUp should have no action", () => {
            const { getByTestId } = wrapper;
            const inputElem = getByTestId("header_input");
            fireEvent.keyUp(inputElem, {keyCode: 13});
            expect(fn).not.toHaveBeenCalled();

        }) 

        it("input value is not empty, onKeyUp should call addUndoItem function and clear the input value", () => {
            const { getByTestId } = wrapper;
            const inputElem = getByTestId("header_input");
            const context = "input some test";
            fireEvent.change(inputElem, { target: { value: context } });
            fireEvent.keyUp(inputElem, {keyCode: 13});
            expect(fn).toHaveBeenCalled();
            expect(fn).toHaveBeenLastCalledWith(context);
            expect(inputElem.value).toEqual("");
        }) 
    })
})
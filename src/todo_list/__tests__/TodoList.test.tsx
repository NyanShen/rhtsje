import * as React from "react";
import {mount} from "enzyme";
import {render} from "@testing-library/react";
import TodoList from "../TodoList";
import UndoList from "../UndoList";

type MockImplementation = [any, React.Dispatch<any>];

describe(" TodoList", () => {
    const setState = jest.fn();
    const stateSpy = jest.spyOn(React, "useState");
    stateSpy.mockImplementationOnce(function (): MockImplementation{
        return [[{
            status: "div",
            value: "test value Nyan"
        }], setState]
    })
    it("test todo list", () => {
        const wrapper = mount(<TodoList />)
        console.log(wrapper.find(UndoList).props().list)
    })
})
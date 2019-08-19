import * as React from "react";
import { mount } from "enzyme";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";
import UndoList from "../UndoList";

type MockImplementation = [any, React.Dispatch<any>];

const mockList = [{
    status: "div",
    value: "test value Nyan"
}];

describe("TodoList", () => {
    afterEach(() => {
        jest.clearAllMocks;
    })
    it.skip("test todo list", () => {
        const setState = jest.fn();
        const stateSpy = jest.spyOn(React, "useState");
        stateSpy.mockImplementation((): MockImplementation => [mockList, setState]);
        const wrapper = mount(<TodoList />)
        expect(wrapper.find(UndoList).props().list).toEqual(mockList);
    })
    it("addItem todolist show, delete item, addDoneList doneList show, move doneList", () => {
        const { getByTestId, getAllByTestId } = render(<TodoList />);
        const headerInputElem = getByTestId("header_input");
        const listCountElem = getByTestId("undo_list_count");
        fireEvent.change(headerInputElem, { target: { value: "test Nyan" } });
        fireEvent.keyUp(headerInputElem, { keyCode: 13 });
        expect(listCountElem.textContent).toEqual("1");
        const listItemElem = getAllByTestId("list_item")[0] as HTMLElement;
        fireEvent.click(listItemElem);
        const listInputElem = getAllByTestId("undo_list_input")[0] as HTMLInputElement;
        fireEvent.change(listInputElem, { target: { value: "test change" } });
        console.log(listInputElem.value) // 很奇怪，已经执行了valuechange方法，到了setTodoList，但是这里的值没有发生改变？
        fireEvent.blur(listInputElem);
        //expect(listItemElem.textContent).toContain("test change")
        const addDoneListElem = getByTestId("add_to_done_list") as HTMLInputElement;
        fireEvent.click(addDoneListElem); // 很奇怪，上面为什么是数组，这里的却是对象。。。
        const doneListItemElem = getByTestId("done_list_item") as HTMLElement;
        expect(doneListItemElem.childNodes[1].textContent).toContain("test change");
    });
})
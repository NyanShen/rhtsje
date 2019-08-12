import * as React from "react";
import Header from "./Header";
import UndoList from "./UndoList";
import { ITodoItem } from "./model";

const initialTodoList = [];

const TodoList = () => {
    const [todoList, setTodoList] = React.useState<ITodoItem[]>(initialTodoList);

    const addUndoItem = (value: string) => {
        setTodoList([
            ...todoList,
            {
                status: "div",
                value
            }
        ])
    }

    return (
        <>
            <Header addUndoItem={addUndoItem} />
            <UndoList list={todoList} />
        </>
    )
}
export default TodoList;
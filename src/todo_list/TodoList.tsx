import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import UndoList from "./UndoList";
import { ITodoItem } from "./model";

const initialTodoList = [];

const TodoList = () => {
    const [todoList, setTodoList] = useState<ITodoItem[]>(initialTodoList);

    useEffect(() => {
        axios.get("/undolist.json")
            .then((res: any) => {
                console.log(res)
                //setTodoList(res.data);
            })
            .catch(() => {
                console.log("error test")
            });
    }, [])

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
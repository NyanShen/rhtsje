import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import UndoList from "./UndoList";
import { ITodoItem } from "./model";
import DoneList from "./DoneList";

const initialTodoList = [];
const initialDoneList = [];

const TodoList = () => {
    const [todoList, setTodoList] = useState<ITodoItem[]>(initialTodoList);
    const [doneList, setDoneList] = useState<ITodoItem[]>(initialDoneList);

    // useEffect(() => {
    //     axios.get("/undolist.json")
    //         .then((res: any) => {
    //             setTodoList(res.data);
    //         })
    //         .catch(() => {
    //             console.log("error test")
    //         });
    // }, [])

    const addUndoItem = (value: string) => {
        setTodoList([
            ...todoList,
            {
                status: "div",
                value
            }
        ])
    }

    const handleDeleteItem = (index: number) => {
        todoList.splice(index, 1);
        setTodoList([...todoList]);
    }

    const handleStatusChange = (index: number) => {
        const newTodoList = todoList.map((item: ITodoItem, itemIndex: number) => {
            if (itemIndex === index) {
                return {
                    ...item,
                    status: "input"
                }
            } else {
                return {
                    ...item,
                    status: "div"
                }
            }
        });
        setTodoList(newTodoList);
    }

    const handleValueChange = (index: number, value: string) => {
        const newTodoList = todoList.map((item: ITodoItem, itemIndex: number) => {
            if (itemIndex === index) {
                return {
                    ...item,
                    value
                }
            } else {
                return item
            }
        });
        setTodoList(newTodoList);
    }

    const handleBlur = (index: number) => {
        const newTodoList = todoList.map((item: ITodoItem, itemIndex: number) => {
            if (itemIndex === index) {
                return {
                    ...item,
                    status: "div"
                }
            } else {
                return item
            }
        });
        setTodoList(newTodoList);
    }

    const handleAddDoneItem = (index: number, item: ITodoItem) => {
        setDoneList([
            ...doneList,
            item
        ]);
        handleDeleteItem(index);
    }
    const handleRemoveDoneList = (index: number, item: ITodoItem) => {
        setTodoList([
            ...todoList,
            item
        ])
        doneList.splice(index, 1);
        setDoneList([...doneList]);
    }

    return (
        <>
            <Header addUndoItem={addUndoItem} />
            <UndoList
                list={todoList}
                deleteItem={handleDeleteItem}
                statusChange={handleStatusChange}
                valueChange={handleValueChange}
                onBlur={handleBlur}
                addDoneItem={handleAddDoneItem}
            />
            <DoneList list={doneList} removeDoneItem={handleRemoveDoneList}/>
        </>
    )
}
export default TodoList;
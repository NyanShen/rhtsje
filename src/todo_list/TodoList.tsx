import * as React from "react";
import Header from "./Header";
import UndoList from "./UndoList";

const TodoList = () => {
    const [todoList, setTodoList] = React.useState([]);
    return (
        <>
            <Header />
            <UndoList list={todoList}/>
        </>
    )
}
export default TodoList;
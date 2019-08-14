import * as React from "react";
import {ITodoItem} from "./model";

interface IUndoListProps {
    list: Array<ITodoItem>;
    onBlur?: (index: number) => void;
    deleteItem?: (index: number) => void;
    statusChange?: (index: number) => void;
    valueChange?: (index: number, value: string) => void;
}

const UndoList = (props: IUndoListProps) => {
    const { list, deleteItem, statusChange, onBlur, valueChange } = props;
    return (
        <div className="undo-list">
            <div className="undo-list-title">
                doing
                <span className="undo-list-count" data-testid="list_count">{list.length}</span>
            </div>
            <ul className="undo-list-content">
                {
                    list.map((item: ITodoItem, index: number) => {
                        return (
                            <li
                                className="undo-list-item"
                                data-testid="list_item"
                                key={`${item.value}-${index}`}
                                onClick={() => statusChange(index)}
                            >
                                {item.status === "div" ? item.value : (
                                    <input
                                        value={item.value}
                                        data-testid="undo_list_input"
                                        className="undo-list-input"
                                        onBlur={() => onBlur(index)}
                                        onChange={(e) => valueChange(index, e.target.value)}
                                    />
                                )}
                                <span
                                    className="undo-list-delete"
                                    data-testid="delete_item"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        deleteItem(index)
                                    }}>-</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default UndoList;
import * as React from "react";
import { ITodoItem } from "./model";

interface IUndoListProps {
    list: Array<ITodoItem>;
    onBlur?: (index: number) => void;
    deleteItem?: (index: number) => void;
    statusChange?: (index: number) => void;
    valueChange?: (index: number, value: string) => void;
    addDoneItem?: (index: number, item: ITodoItem) => void;
}

const UndoList = (props: IUndoListProps) => {
    const { list, deleteItem, statusChange, onBlur, valueChange, addDoneItem } = props;
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
                                className="list-item undo-list-item"
                                data-testid="list_item"
                                key={`${item.value}-${index}`}
                                onClick={() => statusChange(index)}
                            >
                                <input
                                    className="item-done"
                                    type="checkbox"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        addDoneItem(index, item)
                                    }}
                                />
                                {item.status === "div" ? item.value : (
                                    <input
                                        autoFocus
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
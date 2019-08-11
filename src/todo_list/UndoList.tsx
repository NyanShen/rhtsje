import * as React from "react";
interface todoItem {
    status: string;
    value: string;
}

interface IUndoListProps {
    list: Array<todoItem>;
    deleteItem?: (index: number) => void;
    changeStatus?: (index: number) => void;
    handleBlur?: (index: number) => void;
    handleValueChange?: (index: number, value: string) => void;
}

const UndoList = (props: IUndoListProps) => {
    const { list, deleteItem, changeStatus, handleBlur, handleValueChange } = props;
    return (
        <div className="undo-list">
            <div className="undo-list-title">
                doing
                <span className="undo-list-count" data-testid="list_count">{list.length}</span>
            </div>
            <ul className="undo-list-content">
                {
                    list.map((item: todoItem, index: number) => {
                        return (
                            <li
                                className="undo-list-item"
                                data-testid="list_item"
                                key={`${item.value}-${index}`}
                                onClick={() => changeStatus(index)}
                            >
                                {item.status === "div" ? item.value : (
                                    <input
                                        value={item.value}
                                        data-testid="undo_list_input"
                                        className="undo-list-input"
                                        onBlur={() => handleBlur(index)}
                                        onChange={(e) => handleValueChange(index, e.target.value)}
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
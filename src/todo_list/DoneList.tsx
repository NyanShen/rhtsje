import * as React from "react";
import { ITodoItem } from "./model";

interface IDoneListProps {
    list: Array<ITodoItem>;
    removeDoneItem?: (index: number, item: ITodoItem) => void;
}

const DoneList = (props: IDoneListProps) => {
    const { list, removeDoneItem } = props;

    return (
        <div className="undo-list">
            <div className="undo-list-title">
                done
                <span className="undo-list-count" data-testid="list_count">{list.length}</span>
            </div>
            <ul className="undo-list-content">
                {
                    list.map((item: ITodoItem, index: number) => {
                        return (
                            <li
                                data-testid="done_list_item"
                                className="list-item done-list-item"
                                key={`${item.value}-${index}`}
                            >
                                <input
                                    className="item-done"
                                    type="checkbox"
                                    checked={item.status === "div"}
                                    onClick={() => removeDoneItem(index, item)}
                                    onChange={() => { }}
                                />
                                {item.value}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default DoneList;
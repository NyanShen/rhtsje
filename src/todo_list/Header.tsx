import * as React from "react";
import {useState} from "react";
import "./index.scss";

interface IProps {
    addUndoItem?: (value: string) => void;
}

const Header = (props: any) => {
    const [value, setValue] = useState("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const handleKeyup = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13 && value) {
            props.addUndoItem(value)
            setValue("");
        }
    }
    return (
        <div className="header">
            <div className="header-content">
                TodoList
                <input 
                value={value}
                className="header-input"
                data-testid="header_input"
                onChange={handleInputChange}
                onKeyUp={handleKeyup}
                />
            </div>
        </div>
    )
}

export default Header;
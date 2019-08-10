import * as React from "react";
import {useState} from "react";
import "./index.scss";

const Header = () => {
    const [value, setValue] = useState("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const handleKeyup = (event: React.FormEvent<HTMLInputElement>) => {

    }
    return (
        <div className="header">
            <div className="header-content">
                TodoList
                <input 
                value={value}
                data-testid="header_input"
                onChange={handleInputChange}
                onKeyUp={handleKeyup}
                />
            </div>
        </div>
    )
}

export default Header;
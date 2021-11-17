import {useState} from "react";
import Button from "./Button";
import style from "./Component.module.css";

const TodoInput = ({onTaskCreate}) => {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleClick = (e) => {
        onTaskCreate(text);
    };
    return (
        <div>
            <input type="text"
                placeholder="Add something"
                value={text}
                onChange={handleChange}
            />
            <Button onClick={handleClick} title="+"/>
        </div>
    )
}
export default TodoInput;
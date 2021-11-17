import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import {useState} from "react";
import style from "./Component.module.css";

const Todo = () => {
    const [todos, setTodos] = useState([
        {
            id:0,
            title: "DEFAULT",
            status: false,
        }
    ]);
    const handleTaskCreate = (title) => {
        const payload = {
            title: title,
            status: false,
            id: todos.length
        };
        setTodos([...todos, payload]);
    };

    const handleToggle=(id)=>{
        const updatedTodos = todos.map((item)=>
        item.id===id ? {...item, status: (item.status===true)?(false):true}: item
        );
        setTodos(updatedTodos);
    }

    return (
        <>
        <h1>TODO</h1>
        <h4>CREATE A SIMPLE TODOLIST</h4>
        
         {/* todo input */}

        <TodoInput onTaskCreate={handleTaskCreate}/>
        {/* List of Items */}
        {
            todos.map((todo) =>{
                return (
                    <TodoItem key={todo.id} title={todo.title} status={todo.status} id={todo.id}
                    handleToggle={handleToggle}
                    />
                )
            })
        }
        </>
    )
}

export default Todo;

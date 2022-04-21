import React, { useState } from "react";

const Todolist = () => {
    const initialTodos = [{"content": "My first todo", "id": 1}, {"content": "My second todo", "id": 2}];
    const [todos, setTodos] = useState(initialTodos);
    return (
        <ul>
            {todos.map((todoItem) => (
                <li key={todoItem.id}>
                    <input type="checkbox" /> {todoItem.content}
                </li>
            ))}
        </ul>
    )
}

export default Todolist;
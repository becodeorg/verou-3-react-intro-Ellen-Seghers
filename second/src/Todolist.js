import React, { useState } from "react";

const Todolist = () => {
    const initialTodos = [{"isFinished": false, "content": "My first todo", "id": 1}, {"isFinished": false, "content": "My second todo", "id": 2}];
    const [todos, updateTodos] = useState(initialTodos);

    const toggleCheckbox = (event) => {
        todos.map((todoItem) => {
            if (todoItem.id == event.target.id) {
                todoItem.isFinished = !todoItem.isFinished;
            }
            return todoItem;
        });
        updateTodos([...todos]);
    }

    return (
        <ul>
            {todos.map((todoItem) => (
                <li key={todoItem.id}>
                    <input type="checkbox" checked={todoItem.isFinished} onChange={toggleCheckbox} id={todoItem.id}/> {todoItem.content}
                </li>
            ))}
        </ul>
    )
}

export default Todolist;
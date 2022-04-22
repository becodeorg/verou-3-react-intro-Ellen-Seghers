import React, { useState } from "react";
import './App.css';
import Form from './Form';
import Todolist from "./Todolist";

function App() {
    const initialTodos = [{"isFinished": false, "content": "My first todo", "id": 1}, {"isFinished": false, "content": "My second todo", "id": 2}];
    const [todos, updateTodos] = useState(initialTodos);

    return (
        <div>
            <Form todoProp={todos} update={updateTodos}/>
            <Todolist todoProp={todos} update={updateTodos}/>
        </div>
    )
}

export default App;

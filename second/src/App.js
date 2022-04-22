import React, { useState } from "react";
import './App.css';
import Form from './Form';
import Todolist from "./Todolist";

function App() {
    const initialTodos = [];
    const [todos, updateTodos] = useState(initialTodos);

    return (
        <div>
            <Form todoProp={todos} update={updateTodos}/>
            <Todolist todoProp={todos} update={updateTodos}/>
        </div>
    )
}

export default App;

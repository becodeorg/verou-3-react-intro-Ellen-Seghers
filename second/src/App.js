import React, { useState, useEffect } from "react";
import './App.css';
import Form from './Form';
import Todolist from "./Todolist";

const LSKEY = "MyTodoApp";

function App() {
    const initialTodos = [];
    const [todos, updateTodos] = useState(initialTodos);

    useEffect(() => {
        let storedTodos = JSON.parse(window.localStorage.getItem(LSKEY + ".todos"));
        console.log(storedTodos);
        if(storedTodos.length > 0) {
            updateTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <Form todoProp={todos} update={updateTodos}/>
            <Todolist todoProp={todos} update={updateTodos}/>
        </div>
    )
}

export default App;

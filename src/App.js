import './App.css';
import React, {useRef, useEffect, useState} from "react";
import Todos from './Todos';

const App = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef();
    const clickHandler = () => {
        // Do something with inputElement...
        const name = inputRef.current.value
        console.log(inputRef.current.value);
        if (name === '') return
            setTodos(prevTodos => {
                return [...prevTodos, { id: 1, name: name, complete: false}]
            })
        inputRef.current.value = null
    }

    useEffect(() => {
        let storedTodo = JSON.parse(localStorage.getItem('myTodo'));
        console.log(storedTodo);
        if (storedTodo){
            setTodos(storedTodo);
        }
        console.log(todos)

    },[]);

    return (
      <div>
          <div>
              <Todos todos={todos} />
              <input ref={inputRef} type="text" placeholder="Write a new todo" />
              <br />
              <button onClick={clickHandler}>Add todo</button>
              <button>Clear</button>
          </div>
      </div>
  );
}

export default App;

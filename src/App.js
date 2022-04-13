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
                return [...prevTodos, { id: prevTodos.length>0 ? prevTodos[prevTodos.length-1].id+1 : 0, name: name, complete: false}]
            })
        inputRef.current.value = null
    }

    const toggleCheckbox = (id) => {
        const todoToggle = todos;
        const todoToToggle = todoToggle.find(todo => todo.id == id);
        console.log(todoToToggle);
        if(todoToToggle.complete == true) {
            todoToToggle.complete = false;
        }
        else {
            todoToToggle.complete = true;
        }
        setTodos([...todoToggle]);
    }

    useEffect(() => {
        let storedTodo = JSON.parse(localStorage.getItem('myTodo'));
        console.log(storedTodo);
        if (storedTodo){
            setTodos(storedTodo);
        }
        console.log(todos)
    },[]);

    useEffect(() => {
        localStorage.setItem('myTodo', JSON.stringify(todos))
    }, [todos])


    return (
      <div>
          <div>
              <Todos todos={todos} togglefunction={toggleCheckbox}/>
              <input ref={inputRef} type="text" placeholder="Write a new todo" />
              <br />
              <button onClick={clickHandler}>Add todo</button>
              <button>Clear</button>
          </div>
      </div>
  );
}

export default App;

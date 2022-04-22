import React, { useRef } from "react";

const Form = ({todoProp, update}) => {
    const inputRef = useRef();

    const clickHandler = () => {
        const inputElement = inputRef.current;
        const oldTodos = todoProp;
        const newTodos = [...oldTodos, {"isFinished": false, "content": inputElement.value, "id": 1}];
        update(newTodos);

        // Do something with inputElement...
        console.log(inputElement.value);
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Write a new todo" id="todo"/>
            <button onClick={clickHandler}>Add Todo</button>
        </div>
    )
};

export default Form;
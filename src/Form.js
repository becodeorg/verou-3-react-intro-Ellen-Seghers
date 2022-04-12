import React, { useRef } from "react";

const Form = () => {
    const inputRef = useRef();

    const clickHandler = () => {
        const inputElement = inputRef.current;

        // Do something with inputElement...
        console.log(inputElement.value);
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Write a new todo" />
            <br />
            <button onClick={clickHandler}>Add todo</button>
            <button>Clear</button>
        </div>
    );
}

export default Form;
import React from "react";

const Form = ({inputReference, clickHandlerFunction, clearCompletedFunction}) => {
    return (
        <div>
            <input ref={inputReference} type="text" placeholder="Write a new todo"
                   className="rounded border-2 border-cyan-400 outline-cyan-600"/>
            <br/>
            <br/>
            <button onClick={clickHandlerFunction} className="bg-cyan-400 p-1.5 mr-4 rounded">Add todo</button>
            <button onClick={clearCompletedFunction} className="bg-cyan-600 p-1.5 rounded">Clear todo's</button>
        </div>
    );
}

export default Form;

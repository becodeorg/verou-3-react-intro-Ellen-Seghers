import React from 'react';

const Todo = ({todo, toggleFunction}) => {
    const checkboxToggler = () => {
        toggleFunction(todo.id)
    }

    return (
        <ul>
            <input type="checkbox" checked={todo.complete} onChange={checkboxToggler} className="accent-cyan-400 border-2 border-cyan-400"/>{todo.name}
        </ul>
    )
}

export default Todo;
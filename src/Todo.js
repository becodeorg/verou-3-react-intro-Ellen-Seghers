import React from 'react';

const Todo = ({todo, toggleFunction}) => {
    const checkboxToggler = () => {
        toggleFunction(todo.id)
    }

    return (
        <ul>
            <input type="checkbox" checked={todo.complete} onChange={checkboxToggler} />{todo.name}
        </ul>
    )
}

export default Todo;
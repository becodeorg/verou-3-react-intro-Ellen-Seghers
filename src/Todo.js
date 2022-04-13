import React from 'react';

const Todo = ({todo}) => {
    return (
        <ul>
            <input type="checkbox" checked={todo.complete}/>{todo.name}
        </ul>
    )
}

export default Todo;
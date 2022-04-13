import React, { useState } from  'react';
import Todo from './Todo';

const Todos = ({todos}) => {
    return (
        <ul>
            {todos.map((todo, index) => {
                return (
                    <Todo key={index} todo={todo}/>
                )
            })}
        </ul>
    )
}

export default Todos;
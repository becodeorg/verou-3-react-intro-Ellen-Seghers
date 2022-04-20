import React, { useState } from  'react';
import Todo from './Todo';

const Todos = ({todos, togglefunction}) => {
    return (
        <ul>
            {todos.map((todo, index) => {
                return (
                    <Todo key={index} todo={todo} toggleFunction={togglefunction}/>
                )
            })}
        </ul>
    )
}

export default Todos;
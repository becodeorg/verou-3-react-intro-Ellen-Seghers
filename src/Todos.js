import React, { useState } from  'react';

const Todolist = () => {
    const [Todos, setTodos] = useState(["Make dinner", "Take a shower", "Cleaning"]);

    return (
        <ul>
            {Todos.map((todo) => (
                <li>
                    <input type="checkbox" /> {todo}
                </li>
            ))}
        </ul>
    )
}

export default Todolist;
import React from "react";

const Todolist = ({todoProp, update}) => {
    const toggleCheckbox = (event) => {
        const changeCheckbox = JSON.parse(JSON.stringify(todoProp));
        changeCheckbox.map((todoItem) => {
            if (todoItem.id == event.target.id) {
                todoItem.isFinished = !todoItem.isFinished;
            }
            return todoItem;
        });
        update([...changeCheckbox]);
    }

    return (
        <ul>
            {todoProp.map((todoItem) => (
                <li key={todoItem.id}>
                    <input type="checkbox" checked={todoItem.isFinished} onChange={toggleCheckbox} id={todoItem.id}/> {todoItem.content}
                </li>
            ))}
        </ul>
    )
}

export default Todolist;
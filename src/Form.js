const clickHandler = () => {

}

const Form = () => {
    return (
        <div>
            <input type="text" placeholder="Write a new todo" />
            <br />
            <button onClick={clickHandler}>Add todo</button>
        </div>
    )
}

export default Form;
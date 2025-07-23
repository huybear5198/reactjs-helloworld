import { useState } from "react";

const TodoNew = (props) => {
    //useState Hook (getter/setter)
    const [valueInput, setValueInput] = useState("HuyBear");
    console.log(props);
    const { addNewTodo } = props;

    const handleClick = () => {
        //alert("Click me");
        console.log(`>> Check value of ${valueInput}`);
    }

    const handleOnChange = (name) => {
        //console.log("Handle on change", name);
        setValueInput(name);
    }

    //addNewTodo('Homework');
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >
                Add
            </button>
            <div>
                My text input is: {valueInput}
            </div>
        </div>
    );
}

export default TodoNew;
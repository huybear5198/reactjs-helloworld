const TodoData = (props) => {
    const { todoList, deleteTodo } = props;
    //console.log(`>> Check Props: ${todoList}`);
    const handleRemove = (id) => {
        deleteTodo(id);
    }
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                //console.log(`item: ${item}, index: ${index}`)
                return (
                    <div className="todo-item" key={index}>
                        <div>{item.name}</div>
                        <button onClick={() => handleRemove(item.id)} style={{ cursor: "pointer" }}>Remove</button>
                    </div>
                );
            })}

        </div >
    );

}

export default TodoData;
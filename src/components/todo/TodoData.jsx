const TodoData = (props) => {
    //console.log(">> check props: ", props);
    //console.log("check props data: ", props.data);
    //const { address, country } = props.data;
    //const { name, age, data } = props;
    //console.log(">> Check address: ", address);
    //{JSON.stringify(props.todoList)}
    const { todoList } = props;
    console.log(">> Check props", props);
    //console.log(">>check props on todoData: ", props);
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log(`item: ${item}, index: ${index}`)
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>Remove</button>
                    </div>
                );
            })}

        </div>
    );
}

export default TodoData;
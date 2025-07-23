const TodoData = (props) => {
    //console.log(">> check props: ", props);
    //console.log("check props data: ", props.data);
    const { address, country } = props.data;
    const { name, age, data } = props;
    //console.log(">> Check address: ", address);
    console.log(">>check props on todoData: ", props);
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>I was born in {country}</div>
            <div>I live in {address}</div>
            <div>Learning ReactJS</div>
            <div>Watch Youtube</div>
            <div>Print Props TO DO LIST:</div>
            {JSON.stringify(props.todoList)}
        </div>
    );
}

export default TodoData;
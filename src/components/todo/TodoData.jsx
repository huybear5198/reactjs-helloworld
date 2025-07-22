const TodoData = (props) => {
    //console.log(">> check props: ", props);
    console.log("check props data: ", props.data);
    const { address, country } = props.data;
    const { name, age, data } = props;
    console.log(">> Check address: ", address);
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>I was born in {country}</div>
            <div>I live in {address}</div>
            <div>Learning ReactJS</div>
            <div>Watch Youtube</div>
        </div>
    );
}

export default TodoData;
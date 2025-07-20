import './style.css';

const MyComponent = () => {
    //const name = "HuyBear";
    //const age = 27;
    const infor = {
        name: 'Huybear',
        age: 27,
    }

    const printObject = {
        id: 1,
        objectname: 'Object 1'
    }
    return (
        <>
            <div>Hello {infor.name}, I'm {infor.age}</div>
            <div>{JSON.stringify(printObject)}</div>
            <div>{console.log('Javascript on JSX')}</div>
            <div className='child' style={
                { borderRadius: "10px" }
            }
            >Child Div</div>
        </>
    );
}

export default MyComponent;
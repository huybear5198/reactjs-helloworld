import './style.css';

const MyComponent = () => {
    return (
        <>
            <div>MY FIRST COMPONENT</div>
            <div className='child' style={
                { borderRadius: "10px" }
            }
            >Child Div</div>
        </>
    );
}

export default MyComponent;
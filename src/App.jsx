import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Learning Fullstack" }
  ]);

  const firstProp = "HuyBear";
  const age = 27;
  const data = {
    address: "saigon",
    country: "vietnam"
  };

  const addNewTodo = (task) => {
    alert(`add new todo ${task}`);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={firstProp}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo react' alt="" />
      </div>
    </div >
  )
}

export default App

import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Learning Fullstack" }
  ]);

  //const firstProp = "HuyBear";
  // const age = 27;
  // const data = {
  //   address: "saigon",
  //   country: "vietnam"
  // };

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name: name
    }

    setTodoList([...todoList, newTodo]);
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo react' alt="" />
      </div>
    </div >
  )
}

export default App

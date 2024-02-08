import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo.js'
import { Todos } from './components/Todos.js'
import { useEffect } from 'react';

//change in child component will only rerender child component 
// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:5000/todos")
  //   .then(async function(res) {
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   })

  //here it will give infite rerendering due to setTodos getting called again and again.
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then(async function(res) {
        console.log(res);
        const json = await res.json();
        console.log(json.todos);
        // console.log(JSON.parse(todos));
        setTodos(json.todos);
      })
  }, [])

  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTodos}></CreateTodo>
      <Todos todos={todos} setTodos= {setTodos}></Todos>
    </div>
  )
}

export default App

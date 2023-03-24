import { useState } from 'react'
import './App.css'
import TodoInput from './todoInput'
import ToDoList from './toDoList'
import TodoSum from './todoSum'
function App() {
  const [todo, setTodo] = useState([])
  return (
    <div className="App">
      <TodoInput add={(text) => {
        setTodo([
          ...todo,
          {
            id:Math.random(),
            text: text,
            completed: false
          }
        ])
      }} />
      <ToDoList
        todos={todo}
        onChange={(newTodo)=>
          setTodo(todo.map((todos)=>{
            if (todos.id === newTodo.id) {
              return newTodo 
            }
            return todos
          })) 
        }
      />
      <TodoSum todos={todo} />
    </div>
  )
}

export default App

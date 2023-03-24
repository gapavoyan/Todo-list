import React from 'react'

function Todobutton({ todo, onChange }) {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" checked={todo.completed} onChange={(e) => {
        onChange({
          ...todo,
          completed: e.target.checked,
        })
      }} />
      <ul>
        <li style={{ listStyle: "none" }}>
          {todo.text}</li>
      </ul>
    </div>
  )
}

export default Todobutton
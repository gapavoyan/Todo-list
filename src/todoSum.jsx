import React from 'react'

function TodoSum({ todos }) {
  const completeSize = todos.filter((todo)=>
    todo.completed
  ).length
  return (
    <div>
      <span>{completeSize}/{todos.length} Complete</span>
    </div>
  )
}

export default TodoSum
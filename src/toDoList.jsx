import React from 'react'
import Todobutton from './todobutton'
function ToDoList({ todos ,onChange }) {
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <Todobutton key={todo.id}
                         todo={todo}
                         onChange={onChange} />
                    )
                })
            }
        </div>
    )
}

export default ToDoList

import React, { useState } from 'react'

function TodoInput({add}) {
    const [text, setText] = useState("")
    return (
        <div>
            <form onSubmit={(evt)=>{
                evt.preventDefault()
                add(text)
                setText("")
            }}>
                <input type="text" value={text} onChange={(e) => {
                    setText(e.target.value)
                }} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default TodoInput
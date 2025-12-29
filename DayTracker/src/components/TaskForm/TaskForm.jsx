import { useState } from 'react'
import './TaskForm.css'

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (text.trim() === '') return
    onAddTask(text)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva actividad..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  )
}

export default TaskForm

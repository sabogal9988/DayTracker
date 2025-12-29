import { useState } from 'react'
import './TaskForm.css'

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('study')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return

    onAddTask({
      id: crypto.randomUUID(),
      text,
      category,
      completed: false
    })

    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="study">📚 Estudio</option>
        <option value="work">💼 Trabajo</option>
        <option value="personal">🧘 Personal</option>
      </select>

      <button type="submit">➕</button>
    </form>
  )
}

export default TaskForm

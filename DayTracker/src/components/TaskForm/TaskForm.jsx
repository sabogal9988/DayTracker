import './TaskForm.css'
import { CATEGORIES } from '../../constants/categories'

function TaskForm({ onAddTask }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const text = e.target.task.value.trim()
    const category = e.target.category.value

    if (!text) return

    onAddTask(text, category)
    e.target.reset()
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input name="task" placeholder="Nueva tarea..." />

      <select name="category">
        {Object.keys(CATEGORIES).map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <button>Agregar</button>
    </form>
  )
}

export default TaskForm

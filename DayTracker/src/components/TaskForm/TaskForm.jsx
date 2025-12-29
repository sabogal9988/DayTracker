import './TaskForm.css'

function TaskForm({ onAddTask }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const text = e.target.task.value.trim()

    if (!text) return

    onAddTask(text)
    e.target.reset()
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="Nueva tarea..."
      />
      <button>Agregar</button>
    </form>
  )
}

export default TaskForm

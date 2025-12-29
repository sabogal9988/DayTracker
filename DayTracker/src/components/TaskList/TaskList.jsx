import TaskItem from '../TaskItem/TaskItem'
import { CATEGORIES } from '../../constants/categories'
import './TaskList.css'

function TaskList({ tasks, onToggleTask }) {
  if (!tasks || tasks.length === 0) {
    return <p style={{ opacity: .5 }}>No hay tareas aún</p>
  }

  return (
    <>
      {Object.keys(CATEGORIES).map(category => {
        const filtered = tasks.filter(t => t.category === category)
        if (filtered.length === 0) return null

        return (
          <div key={category} className="category-group">
            <h3
              className="category-title"
              style={{ color: CATEGORIES[category].color }}
            >
              {CATEGORIES[category].label}
            </h3>

            <ul className="task-list">
              {filtered.map(task => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={onToggleTask}
                />
              ))}
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default TaskList

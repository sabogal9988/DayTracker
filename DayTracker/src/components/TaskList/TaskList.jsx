import TaskItem from '../TaskItem/TaskItem'
import { CATEGORIES } from '../../constants/categories'
import './TaskList.css'

function TaskList({ tasks, onToggleTask }) {
  return (
    <>
      {Object.keys(CATEGORIES).map(category => {
        const filtered = tasks.filter(t => t.category === category)
        if (filtered.length === 0) return null

        return (
          <div key={category}>
            <h3>{category}</h3>
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

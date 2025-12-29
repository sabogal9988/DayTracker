import './TaskItem.css'
import { CATEGORIES } from '../../constants/categories'

function TaskItem({ task, onToggle }) {
  return (
    <li
      className={`task-item ${task.completed ? 'completed' : ''}`}
      style={{ borderLeft: `6px solid ${CATEGORIES[task.category].color}` }}
      onClick={() => onToggle(task.id)}
    >
      <span>{task.text}</span>
      <small>{CATEGORIES[task.category].label}</small>
    </li>
  )
}

export default TaskItem

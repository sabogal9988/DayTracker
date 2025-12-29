import './TaskItem.css'

function TaskItem({ task, onToggle }) {
  return (
    <li
      className={task.completed ? 'completed' : ''}
      onClick={() => onToggle(task.id)}
    >
      {task.text}
    </li>
  )
}

export default TaskItem

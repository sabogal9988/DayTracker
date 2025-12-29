import TaskItem from '../TaskItem/TaskItem'
import './TaskList.css'

function TaskList({ tasks, onToggleTask }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
        />
      ))}
    </ul>
  )
}

export default TaskList

import { useState } from 'react'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ])
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const completed = tasks.filter(t => t.completed).length
  const progress = tasks.length === 0
    ? 0
    : Math.round((completed / tasks.length) * 100)

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h1>DayTracker</h1>
      <p>Progreso: {progress}%</p>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </div>
  )
}

export default App

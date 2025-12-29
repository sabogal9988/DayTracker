import { useState } from 'react'
import TaskForm from './components/TaskForm/TaskForm'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = text => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    }

    setTasks([...tasks, newTask])
    console.log('Tareas:', [...tasks, newTask])
  }

  return (
    <div>
      <h1>Organizador de actividades</h1>
      <TaskForm onAddTask={addTask} />
    </div>
  )
}

export default App

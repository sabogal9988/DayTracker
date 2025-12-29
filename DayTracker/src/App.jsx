import { useState } from 'react'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    setTasks([...tasks, text])
  }

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h1>Organizador</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App

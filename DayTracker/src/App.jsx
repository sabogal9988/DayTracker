import { useState } from 'react'
import Calendar from './components/Calendar/Calendar'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import ProgressBar from './components/ProgressBar/ProgressBar'
import Dashboard from './components/Dashboard/Dashboard'
import { TEXTS } from './constants/texts'
import './App.css'

const today = new Date().toISOString().split('T')[0]

function App() {
  const [selectedDate, setSelectedDate] = useState(today)
  const [tasksByDate, setTasksByDate] = useState({})

  const tasks = tasksByDate[selectedDate] || []

  // ➕ Agregar tarea (recibe el objeto completo)
  const addTask = (task) => {
    setTasksByDate(prev => ({
      ...prev,
      [selectedDate]: [...(prev[selectedDate] || []), task]
    }))
  }

  // ✅ Toggle completado
  const toggleTask = (id) => {
    setTasksByDate(prev => ({
      ...prev,
      [selectedDate]: (prev[selectedDate] || []).map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    }))
  }

  // 📊 Progreso
  const completed = tasks.filter(t => t.completed).length
  const progress = tasks.length === 0
    ? 0
    : Math.round((completed / tasks.length) * 100)

  return (
    <div className="app">
      <h1>{TEXTS.appTitle}</h1>

      <Dashboard
        tasksByDate={tasksByDate}
        selectedDate={selectedDate}
      />

      <Calendar
        selectedDate={selectedDate}
        onChangeDate={setSelectedDate}
      />

      <ProgressBar progress={progress} />

      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </div>
  )
}

export default App

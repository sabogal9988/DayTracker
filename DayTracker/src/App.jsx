import { useState } from 'react'
import Calendar from './components/Calendar/Calendar'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import ProgressBar from './components/ProgressBar/ProgressBar'
import Dashboard from './components/Dashboard/Dashboard'


const today = new Date().toISOString().split('T')[0]

function App() {
  const [selectedDate, setSelectedDate] = useState(today)
  const [tasksByDate, setTasksByDate] = useState({})

  const tasks = tasksByDate[selectedDate] || []

  const addTask = (text, category) => {
  setTasksByDate({
    ...tasksByDate,
    [selectedDate]: [
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false,
        category
      }
    ]
  })
}


  const toggleTask = (id) => {
    setTasksByDate({
      ...tasksByDate,
      [selectedDate]: tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    })
  }

  const completed = tasks.filter(t => t.completed).length
  const progress = tasks.length === 0
    ? 0
    : Math.round((completed / tasks.length) * 100)

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h1>DayTracker</h1>

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

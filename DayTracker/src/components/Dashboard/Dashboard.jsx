import './Dashboard.css'
import { TEXTS } from '../../constants/texts'


function Dashboard({ tasksByDate, selectedDate }) {
  const getProgress = (tasks = []) => {
    if (tasks.length === 0) return 0
    const completed = tasks.filter(t => t.completed).length
    return Math.round((completed / tasks.length) * 100)
  }

  // Progreso del día
  const todayTasks = tasksByDate[selectedDate] || []
  const todayProgress = getProgress(todayTasks)

  // Fechas de la semana (últimos 7 días)
  const weekDates = [...Array(7)].map((_, i) => {
    const d = new Date(selectedDate)
    d.setDate(d.getDate() - i)
    return d.toISOString().split('T')[0]
  })

  // Progreso semanal
  let totalTasks = 0
  let completedTasks = 0

  weekDates.forEach(date => {
    const tasks = tasksByDate[date] || []
    totalTasks += tasks.length
    completedTasks += tasks.filter(t => t.completed).length
  })

  const weekProgress = totalTasks === 0
    ? 0
    : Math.round((completedTasks / totalTasks) * 100)

  return (
    <div className="dashboard">
      <div className="card">
        <h3>{TEXTS.dashboard.today}</h3>
        <p>{todayProgress}{TEXTS.dashboard.completed}</p>
      </div>

      <div className="card">
        <h3>{TEXTS.dashboard.week}</h3>
        <p>{weekProgress}{TEXTS.dashboard.completed}</p>
      </div>
    </div>
  )
}

export default Dashboard

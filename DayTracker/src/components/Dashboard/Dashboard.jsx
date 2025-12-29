import './Dashboard.css'
import { TEXTS } from '../../constants/texts'

function Dashboard({ tasksByDate, selectedDate }) {

  //  Progreso genérico
  const getProgress = (tasks = []) => {
    if (tasks.length === 0) return 0
    const completed = tasks.filter(t => t.completed).length
    return Math.round((completed / tasks.length) * 100)
  }

  //  Streak
  const getStreak = () => {
    let streak = 0
    let currentDate = new Date(selectedDate)

    while (true) {
      const dateKey = currentDate.toISOString().split('T')[0]
      const tasks = tasksByDate[dateKey]

      if (!tasks || tasks.length === 0) break
      if (!tasks.every(t => t.completed)) break

      streak++
      currentDate.setDate(currentDate.getDate() - 1)
    }

    return streak
  }

  //  Día seleccionado
  const todayTasks = tasksByDate[selectedDate] || []
  const todayProgress = getProgress(todayTasks)

  //  Últimos 7 días
  const weekDates = [...Array(7)].map((_, i) => {
    const d = new Date(selectedDate)
    d.setDate(d.getDate() - i)
    return d.toISOString().split('T')[0]
  })

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

  const streak = getStreak()

  //  UI
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

      <div className="card streak">
        <h3>{TEXTS.streak.title}</h3>
        <p>🔥 {streak} {TEXTS.streak.label}</p>
      </div>
    </div>
  )
}

export default Dashboard

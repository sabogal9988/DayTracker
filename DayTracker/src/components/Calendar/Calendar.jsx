import './Calendar.css'

function Calendar({ selectedDate, onChangeDate }) {
  // Generamos una lista de los últimos 4 días y los próximos 2 para navegar rápido
  const getDays = () => {
    const days = []
    for (let i = -4; i <= 2; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      days.push(date.toISOString().split('T')[0])
    }
    return days
  }

  const days = getDays()

  return (
    <div className="calendar-wrapper">
      <div className="quick-days">
        {days.map(date => {
          const dayName = new Intl.DateTimeFormat('es-ES', { weekday: 'narrow' }).format(new Date(date + 'T00:00:00'))
          const dayNumber = date.split('-')[2]
          const isSelected = date === selectedDate

          return (
            <button 
              key={date}
              className={`day-card ${isSelected ? 'active' : ''}`}
              onClick={() => onChangeDate(date)}
            >
              <span className="day-name">{dayName}</span>
              <span className="day-number">{dayNumber}</span>
            </button>
          )
        })}
      </div>

      <div className="input-container">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => onChangeDate(e.target.value)}
          className="modern-date-input"
        />
      </div>
    </div>
  )
}

export default Calendar
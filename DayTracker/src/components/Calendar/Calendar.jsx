import './Calendar.css'

function Calendar({ selectedDate, onChangeDate }) {
  return (
    <input
      type="date"
      value={selectedDate}
      onChange={(e) => onChangeDate(e.target.value)}
      className="calendar"
    />
  )
}

export default Calendar

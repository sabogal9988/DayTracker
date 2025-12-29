import './ProgressBar.css'

function ProgressBar({ progress }) {
  return (
    <div className="progress-wrapper">
      <div className="progress-label">
        Progreso del día <span>{progress}%</span>
      </div>

      <div className="progress-container">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar

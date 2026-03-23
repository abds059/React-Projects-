function HistoryLog({ history }) {
  if (history.length === 0) return null

  return (
    <div className="history">
      <p className="history-title">History</p>
      <ul>
        {history.map((entry, i) => (
          <li key={i}>{entry}</li>
        ))}
      </ul>
    </div>
  )
}

export default HistoryLog
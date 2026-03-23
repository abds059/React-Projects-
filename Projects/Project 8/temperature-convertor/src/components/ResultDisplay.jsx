function ResultDisplay({ result }) {
  if (!result) return null

  return (
    <div className="result">
      {result.value}°{result.unit}
    </div>
  )
}

export default ResultDisplay
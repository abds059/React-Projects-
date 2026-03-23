function QuestionCard({ question, selectedAnswer, handleSelect }) {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      <ul>
        {question.options.map(option => (
          <li
            key={option}
            className={selectedAnswer === option ? 'selected' : ''}
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionCard
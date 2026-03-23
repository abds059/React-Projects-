import { useLocation, useNavigate } from 'react-router-dom'
import questions from '../data/questions'

function Result() {
  const { state }  = useLocation()
  const navigate   = useNavigate()
  const { answers, score } = state || { answers: [], score: 0 }

  return (
    <section id="center">
      <h1>Result</h1>
      <p className="score">{score} / {questions.length} correct</p>

      <ul className="result-list">
        {questions.map((q, i) => (
          <li key={q.id} className={answers[i] === q.correct ? 'correct' : 'wrong'}>
            <p className="q-text">{q.question}</p>
            <p>Your answer: <strong>{answers[i] || 'Skipped'}</strong></p>
            <p>Correct answer: <strong>{q.correct}</strong></p>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate('/')}>Restart</button>
    </section>
  )
}

export default Result
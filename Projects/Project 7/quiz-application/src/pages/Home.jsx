import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <section id="center">
      <h1>Quiz App</h1>
      <p className="subtitle">5 questions — test your knowledge</p>
      <button onClick={() => navigate('/quiz')}>Start Quiz</button>
    </section>
  )
}

export default Home
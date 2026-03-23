import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import questions from '../data/questions'
import QuestionCard from '../components/QuestionCard'

function Quiz() {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex]     = useState(0)
  const [answers, setAnswers]               = useState(Array(questions.length).fill(null))
  const [selectedAnswer, setSelectedAnswer] = useState(answers[0])

  const isLast  = currentIndex === questions.length - 1
  const isFirst = currentIndex === 0

  function handleSelect(option) {
    setSelectedAnswer(option)
    const updated = [...answers]
    updated[currentIndex] = option
    setAnswers(updated)
  }

  function handleNext() {
    if (!selectedAnswer) return
    if (isLast) {
      const score = answers.filter((ans, i) => ans === questions[i].correct).length
      navigate('/result', { state: { answers, score } })
    } else {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(answers[currentIndex + 1])
    }
  }

  function handlePrev() {
    setCurrentIndex(prev => prev - 1)
    setSelectedAnswer(answers[currentIndex - 1])
  }

  return (
    <section id="center">
      <p className="progress">Question {currentIndex + 1} of {questions.length}</p>
      <QuestionCard
        question={questions[currentIndex]}
        selectedAnswer={selectedAnswer}
        handleSelect={handleSelect}
      />
      <div className="nav-buttons">
        <button onClick={handlePrev} disabled={isFirst}>Prev</button>
        <button onClick={handleNext} disabled={!selectedAnswer}>
          {isLast ? 'Submit' : 'Next'}
        </button>
      </div>
    </section>
  )
}

export default Quiz
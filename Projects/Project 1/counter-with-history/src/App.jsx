import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([])

  function handleReset() {
    if (count !== 0) {                          
      setHistory((prev) => [...prev, count])    
    }
    setCount(0)
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Counter With History</h1>
        </div>
        <div>
        <button
          className="increment counter"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
        <button
          className="counter"
          // onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <button
          className="decrement  counter"
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
      </div>
      <button
        className = "Reset counter"
        onClick={handleReset}>Reset</button>
      {history.length > 0 && (
        <ul>
          {history.map((entry, i) => (
            <li key={i}>Reset #{i + 1} — Count was: {entry}</li>
          ))}
        </ul>
      )}
      </section>
    </>
  )
}

export default App

import { useState } from 'react'
import ConverterForm from './components/ConvertorForm'
import ResultDisplay  from './components/ResultDisplay'
import HistoryLog     from './components/HistoryLog'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [inputUnit,  setInputUnit]  = useState('C')
  const [result,     setResult]     = useState(null)
  const [history,    setHistory]    = useState([])

  function convert() {
    if (inputValue === '' || isNaN(inputValue)) return

    const val = parseFloat(inputValue)
    let converted, entry

    if (inputUnit === 'C') {
      converted = (val * 9/5) + 32
      entry = `${val}°C → ${converted.toFixed(2)}°F`
    } else {
      converted = (val - 32) * 5/9
      entry = `${val}°F → ${converted.toFixed(2)}°C`
    }

    setResult({ value: converted.toFixed(2), unit: inputUnit === 'C' ? 'F' : 'C' })
    setHistory(prev => [entry, ...prev])
  }

  function handleInputChange(val) {
    setInputValue(val)
    setResult(null)
  }

  return (
    <section id="center">
      <h1>Temperature Converter</h1>
      <ConverterForm
        inputValue={inputValue}
        inputUnit={inputUnit}
        setInputUnit={setInputUnit}
        handleInputChange={handleInputChange}
        convert={convert}
      />
      <ResultDisplay result={result} />
      <HistoryLog history={history} />
    </section>
  )
}

export default App
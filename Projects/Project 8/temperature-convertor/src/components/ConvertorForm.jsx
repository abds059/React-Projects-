function ConverterForm({ inputValue, inputUnit, setInputUnit, handleInputChange, convert }) {
  return (
    <div className="form">
      <input
        type="number"
        placeholder="Enter temperature"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <select value={inputUnit} onChange={(e) => setInputUnit(e.target.value)}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>
      <button onClick={convert}>Convert</button>
    </div>
  )
}

export default ConverterForm
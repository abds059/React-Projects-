function FilterBar({ subjects, selectedSubject, setSelectedSubject, sortOrder, toggleSort }) {
  return (
    <div className="filter-bar">
      <select
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
      >
        {subjects.map(subject => (
          <option key={subject} value={subject}>{subject}</option>
        ))}
      </select>

      <button onClick={toggleSort}>
        Sort by Marks {sortOrder === 'asc' ? '▲' : '▼'}
      </button>
    </div>
  )
}

export default FilterBar
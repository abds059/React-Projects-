function SearchBar({ searchTerm, maxPrice, setSearchTerm, setMaxPrice }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max price..."
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
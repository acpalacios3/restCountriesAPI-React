function SearchBar({ searchCountry, onSearch }) {

    return (
        // allows enter a country name and sends the input value
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for a country..."
                value={searchCountry}
                onChange={(event) => onSearch(event.target.value)}
            />
        </div>
    );
}

export default SearchBar;
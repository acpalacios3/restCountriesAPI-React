function SearchBar({ searchCountry, onSearch }) {

    return (
        // allows enter a country name and sends the input value
        <div className="search-container">

            {/* Search icon */}
            <span className="search-icon" aria-hidden="true"></span>

            {/* country search input */}
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
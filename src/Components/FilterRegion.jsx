// receives the selected region and the onRegionChange callback from Home.

function RegionFilter({ selectedRegion, onRegionChange }) {

    return (
        <div className="region-filter">

            <select
                value={selectedRegion}
                onChange={(event) => onRegionChange(event.target.value)}
            >
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>

        </div>
    );
}

export default RegionFilter;



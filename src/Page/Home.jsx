import { useState } from "react";

import CountryList from "../Components/CountryList";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import RegionFilter from "../Components/FilterRegion";


export default function Home({ countries, usingBackup  }) {

    //  create the search state by Country
    const [searchCountry, setSearchCountry] = useState("");

    //  select region state
    const [selectedRegion, setSelectedRegion] = useState("");

    // filter  countries by name or region
    const filteredCountries = countries.filter((country) => {

        // check if country name matches the search
        const matchesName = country.names.common
            .toLowerCase()
            .includes(searchCountry.toLowerCase());

        // check if country region matches the selection         
        const matchesRegion = selectedRegion === ""
            || country.region === selectedRegion;

        return matchesName && matchesRegion;
    });


    return (
        <main>
            <Navbar />

            {usingBackup && (
                <div className="backup-message">
                    <p>
                        Notice: The Rest Countries API account has been temporarily
                        frozen after exceeding its allowed API requests.
                        We are currently using local backup data from countries.json.
                    </p>
                </div>
            )}

            <div className="filters-container">

                {/* when the user types a country name, it updates the search state and clears the selected region */}
                <SearchBar
                    searchCountry={searchCountry}
                    onSearch={(value) => {
                        setSearchCountry(value);
                        setSelectedRegion("");
                    }}
                />

                {/* when the user selects a region, it updates the region state and clears the country search input */}
                <RegionFilter
                    selectedRegion={selectedRegion}
                    onRegionChange={(value) => {
                        setSelectedRegion(value);
                        setSearchCountry("");
                    }}
                />

            </div>

            {/* displays the number of countries */}
            {/* <p>Total countries loaded: {filteredCountries.length}</p> */}

            {/* displays the filtered countries if results are available.
            otherwise, displays a message when no countries are found */}

            {filteredCountries.length > 0 ? (
                <CountryList countries={filteredCountries} />)
                : (<p>No countries found.</p>)
            }


        </main>
    );
}
import { useState } from "react";

import useFetcher from "../hooks/useFetcher";
import CountryList from "../Components/CountryList";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import RegionFilter from "../Components/FilterRegion";


const API_URL = "https://api.restcountries.com/countries/v5?limit=100";

export default function Home() {

    const {
        data: countries,
        loading,
        error
    } = useFetcher(API_URL);

    //  create the search state by Country
    const [searchCountry, setSearchCountry] = useState("");

    //  create the search state by Region
    const [selectedRegion, setSelectedRegion] = useState("");

    // loading validation
    if (loading) {
        return <p>Loading countries...</p>;
    }

    // Error validation
    if (error) {
        return <p>Error: {error}</p>;
    }

    //  inspect API data

    console.log(
        "Countries without flag URL:",
        countries.filter(country => !country.flag?.url_png)
    );

  
    const filteredCountries = countries.filter((country) => {

        const matchesName = country.names.common
            .toLowerCase()
            .includes(searchCountry.toLowerCase());

        const matchesRegion = selectedRegion === ""
            || country.region === selectedRegion;

        return matchesName && matchesRegion;
    });


    return (
        <main>
            <Navbar />
            
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
              {/* displays the number of countries that match the current filter */}
            <p>Total countries loaded: {filteredCountries.length}</p>

            {/* displays the filtered countries if results are available.
            otherwise, displays a message when no countries are found */}

            {filteredCountries.length > 0 ? (
                <CountryList countries={filteredCountries} />)
                : (<p>No countries found.</p>)
            }


        </main>
    );
}
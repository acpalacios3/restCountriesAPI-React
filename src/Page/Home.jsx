import { useState } from "react";

import useFetcher from "../hooks/useFetcher";
import CountryList from "../Components/CountryList";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";


const API_URL = "https://api.restcountries.com/countries/v5?limit=100";

export default function Home() {

    const {
        data: countries,
        loading,
        error
    } = useFetcher(API_URL);

    //  create the search state
    const [searchCountry, setSearchCountry] = useState("");
    
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


// filter() will select the countries whose names contain that match
    const searchCountries = countries.filter((country) =>
        country.names.common
            .toLowerCase()
            .includes(searchCountry.toLowerCase())
    );
    

    return (
        <main>
             <Navbar/>

              <SearchBar
                searchCountry={searchCountry}
                onSearch={setSearchCountry}
            />

            <p>Total countries loaded: {searchCountries.length}</p>

            {searchCountries.length > 0 ? (
                <CountryList countries={searchCountries} />) 
                : ( <p>No countries found.</p>)
             }


        </main>
    );
}
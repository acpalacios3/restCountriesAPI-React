import useFetcher from "../hooks/useFetcher";
import CountryList from "../Components/CountryList";
import Navbar from "../Components/Navbar";

const API_URL = "https://api.restcountries.com/countries/v5?limit=100";

export default function Home() {

    const {
        data: countries,
        loading,
        error
    } = useFetcher(API_URL);

    if (loading) {
        return <p>Loading countries...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    //  inspect API data
    console.log("First country:", countries[10]);

    console.log(
        "Countries without flag URL:",
        countries.filter(country => !country.flag?.url_png)
    );

    return (
        <main>
             <Navbar/>

            <p>Total countries loaded: {countries.length}</p>

            <CountryList countries={countries} />

        </main>
    );
}
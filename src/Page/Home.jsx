

import useFetcher from "../hooks/useFetcher";

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
    console.log("First country:", countries[0]);

    console.log(
        "Countries without flag URL:",
        countries.filter(country => !country.flag?.url_png)
    );

    return (
        <main>
            <h1>REST Countries</h1>

            <p>Total countries loaded: {countries.length}</p>

            <section>
                {countries.map((country) => (
                    <article key={country.codes.alpha_3}>
                       
                       {/* It won't show the flag image when it's null or undefined.  */}
                        {country.flag?.url_png && (
                            <img
                                src={country.flag.url_png}
                                alt={`Flag of ${country.names.common}`}
                                width="150"
                            />
                        )}

                        <h2>{country.names.common}</h2>

                        <p>
                            <strong>Population:</strong>{" "}
                            {country.population?.toLocaleString()}
                        </p>

                        <p>
                            <strong>Region:</strong> {country.region}
                        </p>

                        <p>
                            <strong>Capital:</strong>{" "}
                            {country.capitals?.join(", ") || "No capital listed"}
                        </p>

                    </article>
                ))}
            </section>
        </main>
    );
}
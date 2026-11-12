import { useParams } from "react-router-dom";

export default function CountryDetails({ countries }) {

    // get the country code from the URL
    const { code } = useParams();
    
    // test:
    // console.log("Country code from URL:", code);
    // http://localhost:5173/country/DEU

    // find the selected country using its alpha-3 code
    const selectedCountry = countries.find(
        country => country.codes.alpha_3 === code.toUpperCase()
    );

    // check if the country exists
    if (!selectedCountry) {
        return <p>Country not found.</p>;
    }

    return (
        <main>

            <h1>Country Details</h1>

            {/* Country flag */}
            <img
                src={selectedCountry.flag.url_png}
                alt={`Flag of ${selectedCountry.names.common}`}
                width="250"
            />

            {/* Country name */}
            <h2>{selectedCountry.names.common}</h2>

            {/* Country information */}
            <p>
                <strong>Population:</strong>{" "}
                {selectedCountry.population.toLocaleString()}
            </p>

            <p><strong>Region:</strong> {selectedCountry.region}</p>

            <p>
                <strong>Capital:</strong>{" "}
                {selectedCountry.capitals?.map(capital => capital.name).join(", ")
                    || "No capital listed"}
            </p>

        </main>
    );
}
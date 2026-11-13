import { useParams, Link } from "react-router-dom";

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
        return <p>Country not found.</p>;back 
    }

    // get native name from the available data
    const nativeName = selectedCountry.names.native;

    // convert native name into readable text
    const nativeNameText = typeof nativeName === "string"
        ? nativeName
        : nativeName
            ? Object.values(nativeName)
                .map(item => item.common || item.official || "")
                .filter(Boolean)
                .join(", ")
            : "Not available";

    // get currencies
    const currencies = selectedCountry.currencies
        ?.map(currency => currency.name)
        .filter(Boolean)
        .join(", ") || "Not available";

    // get languages
    const languages = selectedCountry.languages
        ?.map(language => language.name)
        .filter(Boolean)
        .join(", ") || "Not available";


    // get bordering countries
    const borderCountries = countries.filter(country =>
        selectedCountry.borders?.includes(country.codes.alpha_3)
    );

    return (
        <main className="country-details">

            {/* Back button */}
            <Link to="/" className="back-button">
                ← Back
            </Link>


            <div className="country-content-detail">


                {/* Country flag */}
                <div className="country-flag-detail">
                    <img
                        src={selectedCountry.flag.url_png}
                        alt={`Flag of ${selectedCountry.names.common}`}
                        width="250"
                    />
                </div>

                <div className="country-data-detail">

                    {/* Country name */}
                    <h2>{selectedCountry.names.common}</h2>

                    {/* First information column */}
                    <div className="country-info-detail">

                        {/* fist column design */}
                        <div>

                            <p><strong>Native Name:</strong> {nativeNameText} </p>

                            {/* Country information */}
                            <p>
                                <strong>Population:</strong>{" "}
                                {selectedCountry.population.toLocaleString()}
                            </p>

                            <p><strong>Region:</strong> {selectedCountry.region}</p>

                            <p>
                                <strong>Sub Region:</strong>{" "}
                                {selectedCountry.subregion || "Not available"}
                            </p>

                            <p>
                                <strong>Capital:</strong>{" "}
                                {selectedCountry.capitals?.map(capital => capital.name).join(", ")
                                    || "No capital listed"}
                            </p>
                        </div>


                        {/* Second information column */}

                        <div>
                            <p>
                                <strong>Top Level Domain:</strong>{" "}
                                {selectedCountry.tlds?.join(", ") || "Not available"}
                            </p>

                            <p> <strong>Currencies:</strong> {currencies}</p>

                            <p> <strong>Languages:</strong> {languages} </p>

                        </div>

                    </div>


                    {/* Border Countries */}
                    <div className="border-countries">

                        <strong>Border Countries:</strong>
                        {borderCountries.length > 0 ? (

                            borderCountries.map(country => (

                                // each border country becomes a navigable link
                                <Link
                                    key={country.codes.alpha_3}
                                    to={`/country/${country.codes.alpha_3}`}
                                >
                                    {country.names.common}
                                </Link>
                            ))

                        ) : (<span> No border countries </span>)
                        }

                    </div>
                </div>
            </div>


        </main>
    );
}
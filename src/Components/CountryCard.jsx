function CountryCard({ country }) {

    return (
        <article className="country-card">

            {/* Country flag */}
            {country.flag?.url_png && (
                <img
                    className="country-flag"
                    src={country.flag.url_png}
                    alt={`Flag of ${country.names.common}`}
                    width="150"
                />
            )}

            {/* Country information */}
            <div className="country-info">

                <h2>{country.names.common}</h2>

                <p>
                    <strong>Population:</strong>{" "}
                    {country.population?.toLocaleString()}
                </p>

                <p>
                    <strong>Region:</strong> {country.region}
                </p>

                <p>
                    {/* join() joins the elements of the array using a separator */}
                    <strong>Capital:</strong>{" "}
                    {country.capitals?.map(capital => capital.name).join(", ") || "No capital listed"}
                </p>

            </div>

        </article>
    );
}

export default CountryCard;
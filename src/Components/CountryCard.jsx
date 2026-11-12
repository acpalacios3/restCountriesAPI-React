import { Link } from "react-router-dom";

function CountryCard({ country }) {

    return (
        <article className="country-card">

            {/* Country flag */}
            <div className="country-flag-container">

                {country.flag?.url_png ? (
                    <img
                        className="country-flag"
                        src={country.flag.url_png}
                        alt={`Flag of ${country.names.common}`}
                    />
                ) : (
                    <p className="no-image">
                        Image not available
                    </p>
                )}

            </div>

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
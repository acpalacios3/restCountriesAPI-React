import CountryCard from "./CountryCard";

function CountryList({ countries }) {

    return (
        <section className="country-list">

            {countries.map((country) => (
                <CountryCard

                    // codes: {alpha_2: 'AR', alpha_3: 'ARG', ccn3: '032', cioc: 'ARG', fifa: 'ARG', …} 
                    key={country.codes.alpha_3}
                    country={country}
                />
            ))}

        </section>
    );
}

export default CountryList;
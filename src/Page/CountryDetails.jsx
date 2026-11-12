export default function CountryDetails({ countries }) {

    return (
        <main>
            <h1>Country Details</h1>

            <p>Total countries received: {countries.length}</p>
        </main>
    );
}
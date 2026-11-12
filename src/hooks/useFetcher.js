// API response: 
// {data: {…}}
// data
// : 
// {objects: Array(100), meta: {…}}
// [[Prototype]]
// : 
// Object

// First country: 
// {names: {…}, codes: {…}, capitals: Array(1), flag: {…}, region: 'Asia', …}
// area: {kilometers: 8665, miles: 3345.6}
// assets: []
// borders: (2) ['GEO', 'RUS']
// calling_codes: ['7']
// capitals: [{…}]
// cars: {driving_side: 'right', signs: Array(0)}
// classification: {dependency: false, dependency_type: '', disputed: true, iso_status: 'unassigned', sovereign: true, …}
// codes: {alpha_2: '', alpha_3: '', ccn3: '', cioc: '', fifa: '', …}
// continents: ['Asia']
// coordinates: {lat: 43, lng: 41}
// currencies: [{…}]
// date: {academic_year_start: {…}, fiscal_year_start: {…}, start_of_week: 'monday'}
// demonyms: {eng: {…}, fra: {…}}
// descriptions: {long: 'Abkhazia is a partially recognized state that brok…mi is its capital, and the Russian ruble is used.', short: 'Abkhazia is a partially recognized republic on the eastern Black Sea coast, claimed by Georgia.'}
// economy: {gini_coefficient: {…}}
// flag: {colors: {…}, description: '', emoji: '', html_entity: '', unicode: '', …}
// government_type: "Unitary presidential republic"
// landlocked: false
// languages: (2) [{…}, {…}]
// leaders: [{…}]
// links: {google_maps: '', official: 'http://presidentofabkhazia.org', open_street_maps: '', wikipedia: 'https://en.wikipedia.org/wiki/Abkhazia'}memberships: {african_union: false, arab_league: false, asean: false, brics: false, commonwealth: false, …}names: {alternates: Array(1), common: 'Abkhazia', native: {…}, official: 'Republic of Abkhazia', translations: {…}}number_format: {decimal_separator: ',', thousands_separator: '.'}parent: {alpha_2: 'GE', alpha_3: 'GEO'}population: 244236postal_code: {format: '', regex: ''}region: "Asia"subregion: "Western Asia"timezones: ['UTC+03:00']tlds: []units: {measurement_system: 'metric', temperature_scale: 'Celsius'}uuid: "0e1bae13-c4c6-40d7-955f-f2c6062381cc"_meta: {lastUpdatedTimestamp: 1788557516}[[Prototype]]: Object




import { useState, useEffect } from "react";

export default function useFetcher(url) {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchData() {

      try {
        // We are loading, Currently no errors, No data visible.
        setLoading(true)
        setError(null)
        setData(null)

        // get the API key from the Vite environment variable
        const API_KEY = import.meta.env.VITE_REST_COUNTRIES_API_KEY;

        if (!API_KEY) {
          throw new Error("API key is missing.");
        }
        // make the API request

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${API_KEY}`
          }
        });

        // Convert the response into JSON
        const json = await response.json();

        // Check for API errors
        if (!response.ok || json.errors?.length) {
          throw new Error(
            json.errors?.[0]?.message || `Error: ${response.status}`
          );
        }

        console.log("API response:", json);
        console.log("Countries:", json.data.objects);
        console.log("First country:", json.data.objects[0]);

        // Get the countries from the API response
        setData(json.data.objects);

      } catch (err) {
        // set to the error variable
        setError(err.message);

      } finally {
        // Tell the componenent we are not loading
        setLoading(false)

      }

    }

    fetchData();

  }, [url]);

  console.log('data ===>: ' + data);
  console.log('loading ===>: ' + loading);
  console.log('error ===>: ' + error);

  return {
    data,
    loading,
    error
  };
}

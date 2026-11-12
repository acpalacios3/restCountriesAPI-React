import { Routes, Route } from 'react-router-dom';

import Home from './Page/Home';
import CountryDetails from './Page/CountryDetails';
import useFetcher from './hooks/useFetcher';

// API URL: Get all countries
const API_URL = "https://api.restcountries.com/countries/v5?limit=100";

export default function App() {

  // Get all countries from the API
  const {
    data: countries,
    loading,
    error
  } = useFetcher(API_URL);

  console.log("Countries received in App:", countries);
  console.log("Is countries an array?", Array.isArray(countries));

  // Show loading message
  if (loading) {
    return <p>Loading countries...</p>;
  }

  // Show error message
  if (error) {
    return <p>Error: {error}</p>;
  }


  return (
    <Routes>

      {/* Home page */}
      <Route path="/" element={<Home countries={countries} />}
      />

      {/* Country details page */}
      <Route path="/country/:code" element={<CountryDetails countries={countries} />}
      />

    </Routes>
  );
}


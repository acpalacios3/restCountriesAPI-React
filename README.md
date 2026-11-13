## REST Countries Explorer with React

**Description**
REST Countries Explorer is a responsive web application developed with React and JavaScript. It allows users to explore countries around the world, search for specific countries, filter countries by geographical region, and view detailed information about individual countries.

The application uses React Router DOM for dynamic navigation, React Hooks for state management, and Context API to implement a global dark and light theme.

Initially, country information was retrieved directly from the REST Countries API. However, after exceeding the available API connection/request limit, the external service was no longer accessible for reliable data retrieval.
To solve this issue, a local countries.json file was implemented as an alternative data source. Additionally, error handling was incorporated to display an informative message when the application encounters problems retrieving data.

https://restcountries.com/

The external API provides country information such as:
- Country names and flags.
- Population.
- Regions and subregions.
- Capital cities.
- Languages.
- Currencies.
- Border countries.

## HOW TO RUN THE APPLICATION:

1. Install the project dependencies:
npm install
2. Start the development server:
npm run dev
3. Open the local URL provided by Vite in your browser.

## Deployment##
The application was deployed using Vercel, providing a public URL to access the project online.

https://countries-api-react-peach.vercel.app/


## TECHNOLOGIES:

1. React: Builds the user interface using reusable components and manages application state.
2. JavaScript: Handles application logic, data manipulation, search, and filtering.
3. CSS: Styles the application, including country cards, navigation, filters, detail pages, and responsive layouts.
4. React Router DOM: Manages client-side navigation and dynamic routes.
5. React Hooks: Uses useState, useEffect, and useContext to manage state and component behavior.
6. Context API: Shares global theme information across application components.
7. Custom Hooks: Implements useTheme to simplify access to the Theme Context.
8. REST Countries API: Initially used to retrieve country information from an external API.
9. Local JSON: Uses countries.json as an alternative source of country data when the external API is unavailable.
10. Vite: Provides the development environment and application build tools.
11. Git and GitHub: Used for source code management and version control.
12. Vercel: Used to deploy and host the React application.

## FEATURES:

1. Country Listing (CountryList)
    - Displays countries with their national flags.
    - Shows country names, population, region, and capital.
    - Organizes information into reusable country card components.
    - Provides navigation to individual country detail pages.

2. Search Functionality (SearchBar)

    - Allows users to search for countries by name.
   
3. Region Filtering (FilterRegion)

    - Allows users to filter countries by geographical region.

4. Country Details (CountryDetails
)
- Displays detailed information about a selected country.
- Retrieves the country code from the URL.
- Presents additional information, including:
  - Country name and national flag.
  - Native name.
  - Population.
  - Region and subregion.
  - Capital.
  - Top-level domain.
  - Currencies.
  - Languages.
  - Border countries.

5. Border Countries Navigation
    - Displays neighboring countries using their country codes.
    - Allows users to navigate directly to neighboring country details.
    - Uses dynamic routes to display the selected country's information.

6. Dark and Light Theme
    - Provides a global theme using Context API.
    - Allows users to switch between dark and light modes.
    - Shares the selected theme across application components.
    - Applies consistent styling to navigation, country cards, filters, and detail pages.

7. API Error Handling and Local JSON Fallback
- Initially retrieves country information from the REST Countries API.
- Handles problems when the external API cannot retrieve data.
- Displays an informative message when data retrieval fails.
- Uses countries.json as an alternative data source.


## REACT CONCEPTS AND IMPLEMENTATION


**1. React Router DOM**

Used to manage navigation between the home page and individual country detail pages without reloading the browser.
Routes and Route: Define application paths and connect them to React components.

````<Routes>
  <Route path="/" element={<Home />} />
  <Route
    path="/country/:code"
    element={<CountryDetails countries={countries} />}
  />
</Routes>````

Link: Navigates between country pages without refreshing the application.

````<Link to={`/country/${country.codes.alpha_3}`}>
  View Details
</Link>````

useParams: Retrieves the country code from the URL to identify the selected country.
````const { code } = useParams();````

**2.Context API**

Used to share the application's theme globally without passing props through components.

Context: Creates a shared space for theme information and functions.
Provider: Makes the context available to child components throughout the application.

````<ThemeProvider>
  <App />
</ThemeProvider>````

useContext: Allows components to access shared context values.
````const { theme, toggleTheme } = useContext(ThemeContext);````

**3. Custom Hook: useTheme**

Making it easier for components to access and change the current theme.
````const { theme, toggleTheme } = useTheme();````

**4. React Hooks**

useState: Manages local component state, such as search terms and selected regions.
const [search, setSearch] = useState("");
useEffect: Handles side effects, such as retrieving country data when the component loads.

````useEffect(() => {
  // Retrieve country data
}, []);````

useContext: Accesses shared application information, such as the selected theme.


**5. Data Retrieval and Status Handling**
Manages country data retrieval and provides feedback when the external API encounters problems. A local countries.json file serves as an alternative data source.

````if (error) {
  return <p>Unable to retrieve country data.</p>;
}````


**6. Responsive Design:**
The application adapts to different screen sizes, providing a consistent and user-friendly experience on desktop, tablet, and mobile devices.



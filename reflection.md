## Reflection discussing your development process, challenges faced, solutions implemented, and potential improvements.


Developing the REST Countries Explorer application was a valuable experience that helped me strengthen my React and JavaScript skills while applying important frontend development concepts.

During the development process, I focused on building a responsive and user-friendly application using reusable components and a modular project structure. I implemented React Router DOM to manage navigation between the country listing and individual country detail pages. I also used dynamic URL parameters with useParams to identify countries and navigate between neighboring countries.

One of the main challenges was implementing global dark and light themes. I solved this by creating a Theme Context, a Provider, and a custom useTheme hook, allowing different components to access and update the theme without unnecessary prop drilling.

Another significant challenge occurred when the REST Countries API exceeded its available connection/request limit, preventing reliable data retrieval. To address this issue, I incorporated a local countries.json file as an alternative data source and implemented an informative error message to notify users when the API encounters problems.

I also worked on search functionality, regional filters, responsive layouts, and country details to improve the overall user experience. Finally, I deployed the application using Vercel to make it publicly accessible.

This project strengthened my understanding of React Hooks, Context API, dynamic routing, API integration, error handling, and component reusability.

For future improvements, I would like to implement pagination ,improved loading states, and more advanced search capabilities.

# React Engineer Challenge

## Description

The application is a React application that loads data from a JSON file and displays it in a tabular format.
The application uses functional components, custom hooks and react hooks, such as `useState` and `useEffect`, to handle the state and fetching data from the API. It uses `fetch` to fetch data from a local json file.

#### Pure React 18 and Tailwind CSS for styling.

## Features

- The user is allowed to type movie name and it will auto complete for him.
- The user can select the desired rating and genre in bullet points format.
- The user can filter the result based on the name and the rating and genre selected.
- The Application is responsive.

## Folder Structure
```
src
|__components
  |__Search       
    |__FilterBar     # contains all the components that the user will interact with at the initial state.
    |__ResultBar     # contains all the components that will be displayed depending on the user input.
  |__utilities       # contains all the Styled and reusable components. 
|__context           # contains all the context, reducers and custom hooks related to the context.
|__index.js

public
|__moviesData.json
```
## Technical Overview

- The application uses functional components and hooks, such as `useState` and `useEffect`, to handle the state and fetching data.
- The application uses `fetch` to fetch data from a local json file.
- The application uses 3 contexts (`MoviesContext`, `SearchFilterContext`, and `toggleContext`) to manage the state of different parts of the application, and custom hooks `useMoviesContext`, `useSearchFilterContext` and `useToggleContext` for readability and easier debugging
- The application uses `Memo` for some components to reduce unnecessary re-rendering
- The application has a scalable folder structure, with reusable components in the `/utilities` folder and reusable styled components to ensure consistency in the website's style.
- The Application is responsive.
- The application has a well-structured component folder with a `search` folder that contains a `FilterBar` folder and a `ResultBar` folder. The `FilterBar` folder contains all the components responsible for the controllers that the user will interact with at the initial state, and the `ResultBar` folder contains all the components that will be displayed depending on the user input. This structure allows for more scalability without making the components depend on each other.

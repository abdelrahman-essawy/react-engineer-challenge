import React from 'react';
import Search from './components/Search';
import { MoviesProvider } from './context/MoviesContext';
import { SearchFilterProvider } from './context/SearchFilterContext';
import { ToggleProvider } from './context/ToggleContext';

function App() {
  return (
    <div className="grid items-center my-8 xl:max-w-screen-xl md:max-w-screen-lg max-w-screen-sm m-auto">
      <MoviesProvider>
        <ToggleProvider>

          <Search />

        </ToggleProvider>
      </MoviesProvider>

    </div>
  );
}

export default App;

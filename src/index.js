import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchContext } from './context/SearchContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <SearchContext.Provider>

        <App />
    </SearchContext.Provider>
);
import { createContext, useReducer } from 'react';
import { moviesReducer } from './reducers/moviesReducer';



export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {


    const [state, dispatch] = useReducer(moviesReducer, {
        movies: [],
        rating: 0,
        genre: '',
        });

    return (
        <SearchContext.Provider value={{ state, dispatch }}>
            {children}
        </SearchContext.Provider>
    );
}
import { createContext, useReducer } from 'react';
import { moviesReducer } from './reducers/moviesReducer';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(moviesReducer, {
        movies: []
    });
    return <MoviesContext.Provider value={{ state, dispatch }}>
        {children}
    </MoviesContext.Provider>

}
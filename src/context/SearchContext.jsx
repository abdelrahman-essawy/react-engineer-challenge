import { createContext, useReducer } from 'react';
import { clickReducer } from './clickReducer';


const initialState = {
    rating: false,
    genre: false,
};
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [state, dispatch] = useReducer(clickReducer, initialState);

    return (
        <SearchContext.Provider value={{ state, dispatch }}>
            {children}
        </SearchContext.Provider>
    );
}

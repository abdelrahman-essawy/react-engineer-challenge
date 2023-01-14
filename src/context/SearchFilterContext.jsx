import { createContext, useReducer } from 'react';
import { toggleReducer } from './reducers/toggleReducer';



export const SearchFilterContext = createContext();

export const SearchFilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(toggleReducer, {
        keyword: ``,
        rating: 0,
        genre: ``,
    });


    return (
        <SearchFilterProvider.Provider value={{ state, dispatch }}>
            {children}
        </SearchFilterProvider.Provider>
    );
}
import { createContext, useReducer } from 'react';
import { searchFilterReducer } from './reducers/searchFilterReducer';

export const SearchFilterContext = createContext();

export const SearchFilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(searchFilterReducer, {
        keyword: ``,
        rating: 0,
        genre: [`Any genre`],
    });
    return <SearchFilterContext.Provider value={{ state, dispatch }}>
        {children}
    </SearchFilterContext.Provider>

}
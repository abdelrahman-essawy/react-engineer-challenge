import { createContext, useReducer } from 'react';
import { toggleReducer } from './reducers/toggleReducer';

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {

    const [state, dispatch] = useReducer(toggleReducer, {
        rating: false,
        genre: false,
    });
    return <ToggleContext.Provider value={{ state, dispatch }}>
        {children}
    </ToggleContext.Provider>

}
import { useContext } from 'react';
import { ToggleContext } from '../ToggleContext';

export const useToggleContext = () => {
    const context = useContext(ToggleContext);

    if (!context) {
        throw new Error(
            'Error in useToggleContext: useToggleContext must be used within a useToggleContext'
        );
    }

    return context;
};

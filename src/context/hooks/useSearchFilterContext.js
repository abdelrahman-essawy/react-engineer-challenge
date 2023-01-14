import { useContext } from 'react';
import { SearchFilterContext } from '../SearchFilterContext';

export const useSearchFilterContext = () => {
    const context = useContext(SearchFilterContext);

    if (!context) {
        throw new Error(
            'Error in useSearchFilterContext: useSearchFilterContext must be used within a useSearchFilterContext'
        );
    }

    return context;
};

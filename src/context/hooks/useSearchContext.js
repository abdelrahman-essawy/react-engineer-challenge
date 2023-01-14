import { useContext } from 'react';
import { SearchContext } from '../SearchContext';

export const useSearchContext = () => {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error(
            'Error in useSearchContext: useSearchContext must be used within a useSearchContext'
        );
    }

    return context;
};
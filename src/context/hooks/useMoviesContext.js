import { useContext } from 'react';
import { MoviesContext } from '../MoviesContext';

export const useMoviesContext = () => {
    const context = useContext(MoviesContext);

    if (!context) {
        throw new Error(
            'Error in useMoviesContext: useMoviesContext must be used within a useMoviesContext'
        );
    }

    return context;
};

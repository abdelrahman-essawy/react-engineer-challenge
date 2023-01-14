import React, { useEffect, useState } from 'react'
import { useMoviesContext } from '../../../context/hooks/useMoviesContext'
import { ToggleProvider } from '../../../context/ToggleContext'
import Genre from './Genre'
import Rating from './Rating'
import SearchResult from './SearchResult'


export default function SearchResults() {

    const { state } = useMoviesContext();
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        setMovies(state.movies);
    }, [state]);


    return (
        <>
            <div className='grid grid-cols-4 md:grid-cols-6 gap-5 items-start w-full grid-flow-row'>

                <div className="col-span-4 md:col-span-4">
                    <SearchResult movies={movies} />
                </div>

                <div className="col-span-4 md:col-span-2 grid grid-cols-2 gap-5 items-start">
                    <Rating />
                    <Genre />
                </div>

            </div>
        </>

    )
}

import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./ResultBar";
import { useMoviesContext } from "../../context/hooks/useMoviesContext";


const Search = () => {

    const { dispatch: moviesDispatch } = useMoviesContext()

    useEffect(() => {
        fetch('./moviesData.json')
            .then(response => response.json())
            .then(data => {
                moviesDispatch({ type: 'FETCH_MOVIES', payload: data });
            })
            .catch(error => {
                console.log('error' + error);
            });
    }, [moviesDispatch]);



    return (

        <div className="px-4 md:px-2 grid gap-2">

            <div>
                <SearchBar />
            </div>

            <div>
                <SearchResults />
            </div>


        </div>


    );
};
export default Search;

import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./ResultBar";
import { MoviesProvider } from "../../context/MoviesContext";
import { ToggleProvider } from "../../context/ToggleContext";
import { useMoviesContext } from "../../context/hooks/useMoviesContext";


const Search = () => {

    const { state, dispatch } = useMoviesContext()

    useEffect(() => {
        fetch('./moviesData.json')
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'FETCH_MOVIES', payload: data });
            })
            .catch(error => {
                console.log('error' + error);
            });
    }, []);



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

import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./ResultBar";
import { SearchProvider } from "../../context/SearchContext";
import { ToggleProvider } from "../../context/ToggleContext";
import { useSearchContext } from "../../context/hooks/useSearchContext";


const Search = () => {


    return (
        <SearchProvider>
            <ToggleProvider>
                <div className="px-4 md:px-2 grid gap-2">

                    <div>
                        <SearchBar />
                    </div>

                    <div>
                        <SearchResults />
                    </div>


                </div>
            </ToggleProvider>
        </SearchProvider>


    );
};
export default Search;

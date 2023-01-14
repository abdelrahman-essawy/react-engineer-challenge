import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./ResultBar";
import { SearchProvider } from "../../context/SearchContext";


const Search = () => {

    return (
        <SearchProvider>
            <div className="px-4 md:px-2 grid gap-2">
                <div>
                    <SearchBar />
                </div>
                <div>
                    <SearchResults />
                </div>
            </div>
        </SearchProvider>

    );
};
export default Search;

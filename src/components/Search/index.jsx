import React from "react";

import SearchBar from "./SearchBar";
import SearchResults from "./ResultBar";

const Search = () => {
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

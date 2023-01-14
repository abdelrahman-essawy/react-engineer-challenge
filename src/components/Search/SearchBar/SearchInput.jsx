import React, { useEffect, useState } from "react";
import { useMoviesContext } from "../../../context/hooks/useMoviesContext";
import Border from "../../utilities/Border";

const SearchInput = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const { state } = useMoviesContext();
    console.log(state);

    return (
        <Border>
            <input
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Enter movie name"
                className="outline-none  px-4 py-3 w-full"
                value={searchKeyword}
            />
            {searchKeyword}
        </Border>
    );
};
export default SearchInput;

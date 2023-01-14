import React, { useEffect, useState } from "react";
import { useSearchContext } from "../../../context/hooks/useSearchContext";
import Border from "../../utilities/Border";

const SearchInput = () => {
    const [searchKeyword, setSearchKeyword] = useState("");

    const [movies, setMovies] = useState([]);
    const { state, dispatch } = useSearchContext()



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

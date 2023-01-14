import React, { useEffect, useState } from "react";
import { useMoviesContext } from "../../../context/hooks/useMoviesContext";
import Border from "../../utilities/Border";

const SearchInput = () => {
    const [searchKeyword, setSearchKeyword] = useState("");

    return (
        <Border>
            <input
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Enter movie name"
                className="outline-none w-full"
                value={searchKeyword}
            />
        </Border>
    );
};
export default SearchInput;

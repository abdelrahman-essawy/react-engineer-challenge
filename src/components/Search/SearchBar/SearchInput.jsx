import React, { useState } from "react";
import Border from "../../utilities/Border";

const SearchInput = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    
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

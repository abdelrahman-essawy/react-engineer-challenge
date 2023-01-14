import React from "react";
import { useSearchFilterContext } from "../../../context/hooks/useSearchFilterContext";
import Border from "../../utilities/Border";

const SearchInput = () => {
    const { dispatch } = useSearchFilterContext();

    return (
        <Border>
            <input
                onChange={(event) => {
                    dispatch({ type: 'SET_KEYWORD', payload: event.target.value });
                }}
                placeholder="Enter movie name"
                className="outline-none w-full"
            />
        </Border>
    );
};
export default SearchInput;

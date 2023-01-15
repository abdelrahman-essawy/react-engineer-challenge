import React from "react";
import { useSearchFilterContext } from "../../../context/hooks/useSearchFilterContext";
import StyledBorder from "../../utilities/StyledBorder";

const SearchInput = () => {
    const { dispatch } = useSearchFilterContext();

    return (
        <StyledBorder>
            <input
                onChange={(event) => {
                    dispatch({ type: 'SET_KEYWORD', payload: event.target.value });
                }}
                placeholder="Enter movie name"
                className="outline-none w-full"
            />
        </StyledBorder>
    );
};
export default SearchInput;

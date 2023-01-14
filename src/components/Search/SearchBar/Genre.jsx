import React from "react";
import { useSearchContext } from "../../../context/useSearchContext";
import SearchToggler from "../../utilities/SearchToggler";


const Genre = () => {
    const { state, dispatch } = useSearchContext();


    return <SearchToggler
        state={state.genre}
        dispatch={dispatch}
        action="CLICK_GENRE"
        className="col-span-1">Genre</SearchToggler>;
};
export default Genre;

import React from "react";
import { useToggleContext } from "../../../context/hooks/useToggleContext";
import SearchToggler from "../../utilities/SearchToggler";


const Genre = () => {
    const { state, dispatch } = useToggleContext();


    return <SearchToggler
        state={state.genre}
        dispatch={dispatch}
        action="CLICK_GENRE"
        className="col-span-1">Genre</SearchToggler>;
};
export default Genre;

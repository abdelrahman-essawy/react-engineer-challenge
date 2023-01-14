import React from "react";
import { useToggleContext } from "../../../context/hooks/useToggleContext";
import SearchToggler from "../../utilities/SearchToggler";


const Genre = () => {
    const { state: toggleState, dispatch: toggleDispatch } = useToggleContext();

    return <SearchToggler
        state={toggleState.genre}
        dispatch={toggleDispatch}
        action="CLICK_GENRE"
        className="col-span-1">Genre</SearchToggler>;
};
export default Genre;

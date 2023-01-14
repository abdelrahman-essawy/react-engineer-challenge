import React from "react";
import { useToggleContext } from "../../../context/hooks/useToggleContext";
import SearchToggler from "../../utilities/SearchToggler";

const Rating = () => {

    const { state: toggleState, dispatch: toggleDispatch } = useToggleContext();
    return <SearchToggler
        state={toggleState.rating}
        dispatch={toggleDispatch}
        action="CLICK_RATING"
        className="col-span-1">Rating</SearchToggler>;
};
export default Rating;
import React from "react";
import { useToggleContext } from "../../../context/hooks/useToggleContext";
import SearchToggler from "../../utilities/SearchToggler";




const Rating = () => {

    const { state, dispatch } = useToggleContext();
    return <SearchToggler
        state={state.rating}
        dispatch={dispatch}
        action="CLICK_RATING"
        className="col-span-1">Rating</SearchToggler>;
};
export default Rating;
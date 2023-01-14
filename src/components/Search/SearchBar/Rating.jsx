import React from "react";
import { useSearchContext } from "../../../context/useSearchContext";
import SearchToggler from "../../utilities/SearchToggler";




const Rating = () => {

    const { state, dispatch } = useSearchContext();
    return <SearchToggler
        state={state.rating}
        dispatch={dispatch}
        action="CLICK_RATING"
        className="col-span-1">Rating</SearchToggler>;
};
export default Rating;
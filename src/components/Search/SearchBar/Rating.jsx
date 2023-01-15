import React from "react";
import { useToggleContext } from "../../../context/hooks/useToggleContext";
import FilterToggleWrapper from "../../utilities/FilterToggleWrapper";

const Rating = () => {

    const { state: toggleState, dispatch: toggleDispatch } = useToggleContext();
    return <FilterToggleWrapper
        state={toggleState.rating}
        dispatch={toggleDispatch}
        action="CLICK_RATING"
        className="col-span-1">Rating</FilterToggleWrapper>;
};
export default Rating;
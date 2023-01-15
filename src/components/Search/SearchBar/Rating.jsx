import React from "react";
import { useToggleContext } from "../../../context/hooks/useToggleContext";
import FilterToggleWrapper from "../../utilities/FilterToggleWrapper";

const RatingFilter = () => {
    const { state: toggleState, dispatch: toggleDispatch } = useToggleContext();
    return <FilterToggleWrapper
        state={toggleState.rating}
        dispatch={toggleDispatch}
        action="CLICK_RATING"
        className="col-span-1"
        label="Rating"
    />;
};
export default RatingFilter;
import React from "react";
import { useToggleContext } from "../../../context/hooks/useToggleContext";
import FilterToggleWrapper from "../../utilities/FilterToggleWrapper";

const Genre = () => {
    const { state: toggleState, dispatch: toggleDispatch } = useToggleContext();

    return <FilterToggleWrapper
        state={toggleState.genre}
        dispatch={toggleDispatch}
        action="CLICK_GENRE"
        className="col-span-1"
        label="Genre"
    />;
};

export default Genre;

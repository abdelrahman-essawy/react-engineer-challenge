import React from "react";
import { useSearchContext } from "../../../context/useSearchContext";
import SearchToggler from "../../utilities/SearchToggler";


const Genre = () => {
    const { state, dispatch } = useSearchContext();


    return <SearchToggler
        className="col-span-1">Genre</SearchToggler>;
};
export default Genre;

import React from "react";
import SmallArrow from "../../SVG/SmallArrow";
import StyledBorder from "./StyledBorder";

const FilterToggleWrapper = ({ label, className, state, dispatch, action }) => {
    const handleClick = () => {
        dispatch({ type: action });
    };

    return (
        <div className="grid gap-2 grid-cols-1">
            <StyledBorder className={`col-span-2 md:col-span-1 ${className}`}>
                <button onClick={handleClick} className="flex items-center justify-around w-full focus:outline-none">
                    <span>{label}</span>
                    <span className={`transform ${state ? `rotate-0` : `rotate-180`} `}>
                        <SmallArrow />
                    </span>
                </button>
            </StyledBorder>
        </div>
    );
};
export default FilterToggleWrapper;

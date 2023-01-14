import React, { useState } from "react";
import Border from "./Border";

const SearchToggler = ({ children, className }) => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="grid gap-2 grid-cols-1">
            <Border className="col-span-2 md:col-span-1">
                <button
                    onClick={() => setIsClicked((prev) => !prev)}
                    className={`flex items-center justify-around w-full focus:outline-none px-4 py-3 ${className}`}
                >
                    <span>{children}</span>
                    <span
                        className={`transform ${isClicked ? `rotate-0` : `rotate-180`} `}
                    >
                        <svg
                            width="16"
                            height="10"
                            viewBox="0 0 16 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.6571 9.24266L15.0713 7.82845L8.0002 0.7574L0.929199 7.82842L2.3434 9.24263L8.0002 3.5858L13.6571 9.24266Z"
                                fill="#171717"
                            />
                        </svg>
                    </span>
                </button>
            </Border>

        </div>
    );
};
export default SearchToggler;

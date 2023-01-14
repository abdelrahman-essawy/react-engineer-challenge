import React from "react";

const Border = ({ children, className }) => {
    return (
        <div className={`border border-solid border-black text-start px-4 py-3 ${className}`}>
            {children}
        </div>
    );
};
export default Border;

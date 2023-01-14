import React from "react";

const Border = ({ children, className }) => {
    return (
        <div className={`border border-solid border-black text-start ${className}`}>
            {children}
        </div>
    );
};
export default Border;

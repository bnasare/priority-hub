import React from "react";

function ButtonComponent({ onClick }) {
    return (
        <button onClick={onClick} className="w-1/4 border border-black">Enter</button>
    );
}

export default ButtonComponent;

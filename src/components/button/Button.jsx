import React from "react";
import "./Button.scss";

function Button({ type = "primary", text = "Click Me", min_width = false }) {
    return (
        <div>
            <button className={`btn ${type ? `btn__${type}` : ""} ${min_width ? "btn__min-width" : ""}`}>
                <span>{text}</span>{" "}
            </button>
        </div>
    );
}

export default Button;

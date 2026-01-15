import React, { useState, useEffect } from "react";
import "./Loader.scss";

function Loader({ callback }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (callback) callback(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [callback]);

    return isVisible ? (
        <div className="loader-overlay">
            <div className="loader">
                <div className="loader__spinner"></div>
            </div>
        </div>
    ) : null;
}

export default Loader;

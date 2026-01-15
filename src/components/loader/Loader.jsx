import React, { useState, useEffect } from "react";
import "./Loader.scss";
import { tr } from "framer-motion/client";

function Loader({ callback }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (callback) callback(isVisible);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return isVisible ? (
        <div className="loader-overlay">
            <div className="loader">
                <div className="loader__spinner"></div>
            </div>
        </div>
    ) : null;
}

export default Loader;

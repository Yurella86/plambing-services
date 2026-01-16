import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const value = {
        loading,
    };

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}

export function useGlobalContext() {
    const ctx = useContext(GlobalContext);
    if (!ctx) throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    return ctx;
}

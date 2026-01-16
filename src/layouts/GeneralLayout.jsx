import React from "react";
import { useGlobalContext } from "../contexts/globalContext";
import Loader from "../components/loader/Loader";
import Header from "../components/header/Header";

function GeneralLayout({ children }) {
    const { loading } = useGlobalContext();

    return (
        <div className={`app ${!loading ? "app__loaded" : ""}`}>
            <Loader />
            <div className="app__container">
                <Header />
                <div className="split"></div>
                <main className="app__main">
                    {children}
                    <div className="split"></div>
                </main>
                <footer className="app__footer">&copy; {new Date().getFullYear()} Plumbing Services created by Yuriy Turko</footer>
            </div>
        </div>
    );
}

export default GeneralLayout;

import "./App.scss";
import Banner from "./components/banner/Banner.jsx";
import Header from "./components/header/Header.jsx";
import ServiceItem from "./components/serviceItem/ServiceItem.jsx";
import Loader from "./components/loader/Loader.jsx";
import { services } from "./constants/objects.js";
import "./style/global.scss";
import { useState } from "react";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`app ${isLoaded ? "app__loaded" : ""}`}>
            <Loader callback={(isLoaded) => setIsLoaded(isLoaded)} />
            <div className="app__container">
                <Header />
                <div className="split"></div>
                <main className="app__mine">
                    <Banner isLoaded={isLoaded} />
                    <div className="split"></div>
                    <section className="app__services mw1200">
                        {services.map((service, index) => (
                            <ServiceItem key={service.name} title={service.name} path={service.path} last_item={index === services.length - 1} index={index} />
                        ))}
                    </section>
                    <div className="split"></div>
                </main>
                <footer className="app__footer">&copy; 2024 Plumbing Services created by Yuriy Turko</footer>
            </div>
        </div>
    );
}

export default App;

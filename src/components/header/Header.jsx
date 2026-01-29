import Button from "../button/Button.jsx";
import logo from "../../assets/images/plumbing-logo.png";
import { nav_links } from "../../constants/objects.js";
import "./Header.scss";
import "../../style/global.scss";
import { useEffect, useState } from "react";
import "../../style/global.scss";
import { Link } from "react-router";

function Header() {
    const [navOpened, setNavOpened] = useState(false);

    useEffect(() => {
        if (navOpened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [navOpened]);

    return (
        <header className="header mw1200">
            <Link to="/" className="header__left">
                <img className="header__logo" src={logo} alt="Plumbing Logo" />
                <div className="header__title">
                    Plumbing <span>Services</span>
                </div>
            </Link>
            <div className={`header__nav-opener ${navOpened ? "header__nav-opener--active" : ""}`} onClick={() => setNavOpened(!navOpened)}>
                <span className="header__nav-opener-line"></span>
            </div>
            <div className={`header__right ${navOpened ? "header__right--mobile-open" : ""}`}>
                <nav className="header__nav">
                    {nav_links.map((link) => (
                        // <LinkPage key={link.name} name={link.name} path={link.path} />
                        <Link to={link.path} className="header__link" onClick={() => setNavOpened(!navOpened)}>
                            <span className="link__text">{link.name}</span>
                        </Link>
                    ))}
                </nav>
                <a href="tel:123-456-7890" className="header__contact">
                    <div className="header__contact-icon">
                        <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                            <path
                                d="M23 17.11a5.92 5.92 0 0 0-4.63-3.95 1.5 1.5 0 0 0-1.51.66l-1.26 1.81a.53.53 0 0 1-.61.2 13.25 13.25 0 0 1-3.6-2.14 13 13 0 0 1-2.94-3.52.5.5 0 0 1 .17-.69l1.63-1.09a1.52 1.52 0 0 0 .61-1.71 10.13 10.13 0 0 0-1.38-2.89 10.36 10.36 0 0 0-2.2-2.33A1.53 1.53 0 0 0 6 1.19a7.31 7.31 0 0 0-1.13.43A7.64 7.64 0 0 0 1.2 6.1a1.48 1.48 0 0 0 0 .93 24.63 24.63 0 0 0 6.53 10.41A24.76 24.76 0 0 0 17.12 23a1.41 1.41 0 0 0 .45.07 1.59 1.59 0 0 0 .48-.07 7.64 7.64 0 0 0 4.47-3.66A6.21 6.21 0 0 0 23 18a1.46 1.46 0 0 0 0-.89zm-1.33 1.74A6.61 6.61 0 0 1 17.73 22a.54.54 0 0 1-.31 0 23.61 23.61 0 0 1-9-5.29 23.74 23.74 0 0 1-6.27-10 .47.47 0 0 1 0-.31 6.59 6.59 0 0 1 3.14-3.88 5 5 0 0 1 1-.36h.1a.5.5 0 0 1 .32.11 9.4 9.4 0 0 1 2 2.09A9.07 9.07 0 0 1 9.9 7a.52.52 0 0 1-.21.6L8.06 8.64a1.54 1.54 0 0 0-.47 2 14.09 14.09 0 0 0 7 6.09 1.51 1.51 0 0 0 1.81-.58l1.21-1.81a.51.51 0 0 1 .51-.23A4.94 4.94 0 0 1 22 17.44a.58.58 0 0 1 0 .29 5.35 5.35 0 0 1-.38 1.12z"
                                style={{ fill: "#fff" }}
                            />
                        </svg>
                    </div>
                    <div className="header__contact-info">
                        <div className="header__contact-top">24/7 contact Call</div>
                        <div className="header__contact-number">123-456-7890</div>
                    </div>
                </a>
                <Button type="additional" text="Get a Quote" />
            </div>
            <div className={`header__nav-overlay ${navOpened ? "header__nav-overlay--active" : ""} `} onClick={() => setNavOpened(!navOpened)}></div>
        </header>
    );
}

export default Header;

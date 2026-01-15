import { Link } from "react-router-dom";

function LinkPage({ name, path }) {
    return (
        <Link to={path} className="app__header-Link">
            {name}
            <span className="app__link-direct">
                <svg fill="#fff" width="10px" height="10px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001 13.2 13.2 34.8 13.2 48 0l451.8-451.8 445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z" />
                </svg>
            </span>
        </Link>
    );
}

export default LinkPage;

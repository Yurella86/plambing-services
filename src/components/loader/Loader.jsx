import "./Loader.scss";
import { useGlobalContext } from "../../contexts/globalContext";

function Loader() {
    const { loading } = useGlobalContext();

    return loading ? (
        <div className="loader-overlay">
            <div className="loader">
                <div className="loader__spinner" />
            </div>
        </div>
    ) : null;
}

export default Loader;

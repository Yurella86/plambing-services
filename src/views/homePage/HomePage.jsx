import "./HomePage.scss";
import Services from "../../components/services/Services";
import Banner from "../../components/banner/Banner.jsx";

function HomePage() {
    return (
        <div className="home-page">
            <Banner />
            <div className="split"></div>
            <Services />
        </div>
    );
}

export default HomePage;

import "./HomePage.scss";
import Banner from "../../components/banner/Banner";
import Services from "../../components/services/Services";

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

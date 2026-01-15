import "./Banner.scss";
import bannerImage from "../../assets/images/background.png";
import master from "../../assets/images/master.png";
import "../../style/global.scss";
import Button from "../button/Button.jsx";

function Banner(props) {
    return (
        <div className="banner">
            <img className="banner__bg" src={bannerImage} alt="Plumbing services banner" />
            <div className="banner__wrapper mw1200">
                <div className="banner__content">
                    <h2 className="banner__title">Reliable Plumbing Services</h2>
                    <div className="split"></div>
                    <h3 className="banner__subtitle">Your trusted local plumber</h3>
                    <div className="banner__buttons">
                        <Button type="primary" text="Request Service" min_width={true} />
                        <Button type="secondary" text="Contact Us" min_width={true} />
                    </div>
                </div>
                <img className="banner__master" src={master} alt="master" />
            </div>
        </div>
    );
}

export default Banner;

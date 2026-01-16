import "./Banner.scss";
import { motion } from "framer-motion";
import bannerImage from "../../assets/images/background.png";
import master from "../../assets/images/master.png";
import "../../style/global.scss";
import Button from "../button/Button.jsx";
import { useParallax } from "../../animation/useParallax.js";
import { useGlobalContext } from "../../contexts/globalContext.jsx";

function Banner() {
    const { loading } = useGlobalContext();

    const bg = useParallax(!loading && window.innerWidth >= 1200 ? 15 : 0);
    const worker = useParallax(!loading && window.innerWidth >= 1200 ? 30 : 0);

    return (
        <div className="banner">
            <motion.img className="banner__bg" src={bannerImage} alt="Plumbing services banner" style={{ x: bg.x, y: bg.y }} />
            <div className="banner__wrapper mw1200">
                <div className="banner__content">
                    <h1 className="banner__title">Reliable Plumbing Services</h1>
                    <div className="split"></div>
                    <h3 className="banner__subtitle">Your trusted local plumber</h3>
                    <div className="banner__buttons ">
                        <Button type="primary" text="Request Service" min_width={true} />
                        <Button type="secondary" text="Contact Us" min_width={true} />
                    </div>
                </div>
                <motion.img className="banner__master" src={master} alt="master" style={{ x: worker.x, y: worker.y }} />
            </div>
        </div>
    );
}

export default Banner;

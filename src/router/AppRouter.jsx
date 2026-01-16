import { Routes, Route } from "react-router";
import HomePage from "../views/homePage/HomePage";
import AboutUs from "../views/aboutUs/AboutUs";
import NotFound from "../views/notFound/NotFound";
import Services from "../views/services/Services";
import Pricing from "../views/pricing/Pricing";
import Contact from "../views/contact/Contact";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRouter;

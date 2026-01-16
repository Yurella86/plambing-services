import React from "react";
import ServiceItem from "../serviceItem/ServiceItem";
import { services } from "../../constants/objects";
import "./Services.scss";

function Services(props) {
    return (
        <div className="services mw1200">
            {services.map((service, index) => (
                <ServiceItem key={service.name} title={service.name} path={service.path} last_item={index === services.length - 1} index={index} />
            ))}
        </div>
    );
}

export default Services;

import React from "react";
import "../../style/global.scss";
import "./ServiceItem.scss";

function ServiceItem({ title, path, last_item = false }) {
    return (
        <div className="service-item">
            <div className="service-item__wrapper">
                <img className="service-item__image" src={require(`../../assets/images/${path}.png`)} alt={path} />
                <h3 className="service-item__title">{title}</h3>
            </div>
            {!last_item && <div className="service-item__separator split"></div>}
        </div>
    );
}

export default ServiceItem;

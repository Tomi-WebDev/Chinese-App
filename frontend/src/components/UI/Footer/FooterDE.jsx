import React, {useState} from "react";

import settings from "../../../assets/icons/settings.svg";
import language from "../../../assets/icons/lang.svg";
import home from "../../../assets/icons/home.svg";

import "./Footer.css";

const FooterDE = (props) => {

    return (
        <div className="footer">
            <img
                src={language}
                alt="language"
                className={props.showPinyin ? "active" : ""}
                onClick={props.togglePinyin}
            />
            <img src={home} alt="home" />
            <img src={settings} alt="settings" />
        </div>
    )
}

export default FooterDE;
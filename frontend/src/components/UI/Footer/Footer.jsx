import React, {useState} from "react";
import { Link } from "react-router-dom";

import settings from "../../../assets/icons/settings.svg";
import language from "../../../assets/icons/lang.svg";
import home from "../../../assets/icons/home.svg";

/* import "./Footer.css"; */
import "./FooterAlt.css";

const Footer = (props) => {

    return (
        <div className="footer">
            <img
                src={language}
                alt="language"
                className={props.showPinyin ? "active" : ""}
                onClick={props.togglePinyin}
            />
            <Link to="/" aria-label="Home">
                <img src={home} alt="" />
            </Link>
            <img src={settings} alt="settings" />
        </div>
    )
}

export default Footer;
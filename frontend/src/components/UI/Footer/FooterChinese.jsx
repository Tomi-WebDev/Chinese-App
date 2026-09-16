import React from "react";
import { Link } from "react-router-dom";

import language from "../../../assets/icons/lang.svg";
import home from "../../../assets/icons/home.svg";

import "./FooterChinese.css";

const FooterChinese = ({ showPinyin, togglePinyin }) => {
    return (
        <footer className="footer-chinese">
            <button
                className={`footer-chinese_button ${showPinyin ? "is-active" : ""}`}
                type="button"
                onClick={togglePinyin}
                aria-label="Toggle pinyin"
            >
                <img src={language} alt="" />
            </button>
            <Link className="footer-chinese_home" to="/" aria-label="Home">
                <img src={home} alt="" />
            </Link>
        </footer>
    );
};

export default FooterChinese;
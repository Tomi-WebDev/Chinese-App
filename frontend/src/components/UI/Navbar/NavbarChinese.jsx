import React, { useState } from "react";
import "./NavbarChinese.css";

const NavbarChinese = ({ onGameSelect }) => {
    const [selectedGame, setSelectedGame] = useState(null);

    const handleGameClick = (gameName) => {
        setSelectedGame(gameName);
        onGameSelect(gameName);
    };

    return (

        <nav className="navbar-chinese" aria-label="Exercise navigation">
            <button
                className={`navbar-chinese_button ${selectedGame === "Test" ? "is-selected" : ""}`}
                type="button"
                onClick={() => handleGameClick("Test")}
            >
                Test
            </button>
            <button
                className={`navbar-chinese_button ${selectedGame === "Flashcards" ? "is-selected" : ""}`}
                type="button"
                onClick={() => handleGameClick("Flashcards")}
            >
                Flashcards
            </button>
        </nav>
    );
};

export default NavbarChinese;
import React, { useState } from "react";
import "./Navbar.css";

import filter from "../../../assets/icons/filter.svg";
import search from "../../../assets/icons/search.svg";

const NavbarRU = ({ onGameSelect, onSearch }) => {

    const [selectedGame, setSelectedGame] = useState("Adverbs");
    const [searchInput, setSearchInput] = useState("");

    const handleGameClick = (gameName) => {
      setSelectedGame(gameName);
      onGameSelect(gameName);
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
      };
    
      const handleSearch = () => {
        onSearch(searchInput);
      };

    return (
        <div className="navbar">
            <div className="search_user_container">
                <div className="search_bar">
                    <img src={filter} alt="filter" />
                    <input 
                        type="text" 
                        placeholder="Search"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                    <img src={search} alt="search" onClick={handleSearch}/>
                </div>
                <div className="user"></div>
            </div>
            <div className="mode_boxes_container">
                <div
                    className={`mode_box ${selectedGame === "Adverbs" ? "selected" : ""}`}
                    onClick={() => handleGameClick("Adverbs")}
                    >
                    Adverbs
                </div>
                <div
                    className={`mode_box ${
                        selectedGame === "Conjugations" ? "selected" : ""
                    }`}
                    onClick={() => handleGameClick("Conjugations")}
                    >
                    Conjugations
                </div>
                <div
                    className={`mode_box ${selectedGame === "Verb" ? "selected" : ""}`}
                    onClick={() => handleGameClick("Verb")}
                    >
                    Verb
                </div>
                <div
                    className={`mode_box ${selectedGame === "Nouns - Who?" ? "selected" : ""}`}
                    onClick={() => handleGameClick("Nouns - Who?")}
                    >
                    Nouns - Who?
                </div>
                <div
                    className={`mode_box ${selectedGame === "Nouns - What?" ? "selected" : ""}`}
                    onClick={() => handleGameClick("Nouns - What?")}
                    >
                    Nouns - What?
                </div>
                <div
                    className={`mode_box ${selectedGame === "Combinations" ? "selected" : ""}`}
                    onClick={() => handleGameClick("Combinations")}
                    >
                    Combinations
                </div>
                <div
                    className={`mode_box ${selectedGame === "Phrases" ? "selected" : ""}`}
                    onClick={() => handleGameClick("Phrases")}
                    >
                    Phrases
                </div>
                <div
                    className={`mode_box ${selectedGame === "8" ? "selected" : ""}`}
                    onClick={() => handleGameClick("8")}
                    >
                    8
                </div>
            </div>
        </div>
    )
}

export default NavbarRU;
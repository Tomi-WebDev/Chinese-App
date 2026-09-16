import React, { useState } from "react";
/* import "./Navbar.css"; */
import "./NavbarAlt.css";

import filter from "../../../assets/icons/filter.svg";
import search from "../../../assets/icons/search.svg";

const Navbar = ({ onGameSelect, onSearch }) => {

    const [selectedGame, setSelectedGame] = useState(null);
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
        <div className="navbar navbar-alt">
            <div
                    className={`mode_box ${selectedGame === "Test" ? "selected" : ""}`}
                    onClick={() => handleGameClick("Test")}
                    >
                    Test
                </div>
                <div
                    className={`mode_box ${
                        selectedGame === "Flashcards" ? "selected" : ""
                    }`}
                    onClick={() => handleGameClick("Flashcards")}
                    >
                    Flashcards
                </div>
            {/*<div className="search_user_container">
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
            </div>  */}
            {/*<div className="mode_boxes_container">
                {/* <div
                    className={`mode_box ${selectedGame === "Dialoog" ? "selected" : ""}`}
                    onClick={() => handleGameClick("Dialoog")}
                    >
                    Dialoog
                </div> */}
                {/*<div
                    className={`mode_box ${selectedGame === "Sentences" ? "selected" : ""}`}
                    onClick={() => handleGameClick("Sentences")}
                    >
                    Sentences
                </div>
                <div
                    className={`mode_box ${selectedGame === "Phrases" ? "selected" : ""}`}
                    onClick={() => handleGameClick("Phrases")}
                    >
                    Phrases
                </div>
                <div
                    className={`mode_box ${selectedGame === "Sudoku" ? "selected" : ""}`}
                    onClick={() => handleGameClick("Sudoku")}
                    >
                    Sudoku
                </div>
                <div
                    className={`mode_box ${selectedGame === "Basket" ? "selected" : ""}`}
                    onClick={() => handleGameClick("Basket")}
                    >
                    Basket
                </div> 
            </div>*/}
        </div>
    )
} 

export default Navbar;
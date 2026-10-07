import "./NavbarChinese.css";

const NavbarChinese = ({ onGameSelect, isHskExercisePage, selectedGame }) => {
    const handleGameClick = (gameName) => {
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
            {isHskExercisePage ? (
                <>
                    <button
                        className={`navbar-chinese_button ${selectedGame === "Sentences HSK - Listening" ? "is-selected" : ""}`}
                        type="button"
                        onClick={() => handleGameClick("Sentences HSK - Listening")}
                    >
                        Sentences HSK - Listening
                    </button>
                    <button
                        className={`navbar-chinese_button ${selectedGame === "Изречения - Четене HSK1" ? "is-selected" : ""}`}
                        type="button"
                        onClick={() => handleGameClick("Изречения - Четене HSK1")}
                    >
                        Изречения - Четене HSK1
                    </button>
                </>
            ) : null}
        </nav>
    );
};

export default NavbarChinese;
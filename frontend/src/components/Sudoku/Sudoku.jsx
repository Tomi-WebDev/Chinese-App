import React, { useState, useEffect } from "react";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import { useNavigate, useLocation } from "react-router-dom";
import "./Sudoku.css";
import completedSound from "../../assets/audio/mixkit-instant-win-2021.wav";
import Congratulations from "../UI/CongratulationsPopUp/Congratulations";
// import { sudokuPuzzles } from "../../assets/info/gameLists";

const Sudoku = (props) => {

    // const selectedPair = sudokuPairs[Math.floor(Math.random() * sudokuPairs.length)];

    // const { unfilledGrid, correctAnswers } = selectedPair;

    // const unfilledGrid = unfilledGrid.map(row => {
    //     return row.map(cell => {
    //         if (cell === "") {
    //             return cell;
    //         }
    //         const referenceEntry = props.reference.find(entry => entry.german === cell);
    //         return referenceEntry ? referenceEntry.french : cell;
    //     });
    // });

    // const corectAnswers = correctAnswers.map(row => {
    //     return row.map(cell => {
    //         const referenceEntry = props.reference.find(entry => entry.german === cell);
    //         return referenceEntry ? referenceEntry.french : cell;
    //     });
    // });

    // Randomly select a pair of Sudoku grids


    // const location = useLocation(); // Get the current location
    // const currentRouteIndex = sudokuPuzzles.indexOf(location.pathname);

    // const [game, setGame] = useState(null);
    const [correctCount, setCorrectCount] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [resetComponent, setResetComponent] = useState(false);
    // const emptyCount = 15;
    // const [error, setError] = useState(null);
    // const {user} = useAuthContext();
    // const bestScore = game ? game.bestScore : 0;
    // const navigate = useNavigate();

    // const navigateTo = (index, direction) => {
    //     let targetIndex;

    //     if (direction === "previous") {
    //         targetIndex = index === 0 ? sudokuPuzzles.length - 1 : index - 1;
    //     } else if (direction === "next") {
    //         targetIndex = index === sudokuPuzzles.length - 1 ? 0 : index + 1;
    //     }

    //     navigate(sudokuPuzzles[targetIndex]);
    //     console.log("Navigating to:", sudokuPuzzles[targetIndex]);
    // };

    // const handlePrevious = () => {
    //     navigateTo(currentRouteIndex, "previous");
    // };

    // const handleNext = () => {
    //     navigateTo(currentRouteIndex, "next");
    // };

    // useEffect(() => {

    //     // Update the game state when games data changes
    //     if (props.games.length > 0) {
    //         const foundGame = props.games.find(game => game.name === props.title);
    //         if (foundGame) {
    //             setGame(foundGame);
    //         }
    //     }
    // }, [props.games, props.title]);

    const [userAnswers, setUserAnswers] = useState(props.unfilledGrid.map(row => row.map(() => "")));
    const [colors, setColors] = useState(props.unfilledGrid.map(row => row.map(() => "")));
    const [draggingValue, setDraggingValue] = useState(null);

    const compareAnswers = async () => {
        console.log(userAnswers);
        console.log(props.correctAnswers);
        let newCorrectCount = correctCount;
        const newColors = props.unfilledGrid.map((row, rowIndex) =>
            row.map((letter, columnIndex) => {
                if (letter === '') {
                    const isCorrect = userAnswers[rowIndex][columnIndex] === props.correctAnswers[rowIndex][columnIndex];
                    if (isCorrect) {
                        newCorrectCount++;
                    }
                    return isCorrect ? "green" : "red";
                }
                return 'black'; // Replace with the appropriate default color class
            })
        );
        setColors(newColors);       
        setCorrectCount(newCorrectCount);

        // Calculate the score as a percentage
        const scorePercentage = (newCorrectCount / props.emptyCount) * 100;
        if(scorePercentage === 100) {
            setIsCompleted(true);
        }
        setResetComponent(true);
    };

    useEffect(() => {
        // Play sound when congratulation message is shown
        if (isCompleted) {
            const audio = new Audio(completedSound);
            audio.play();
        }
    }, [isCompleted]);

    
    const handleStartOver = () => {
        setCorrectCount(0);
        setIsCompleted(false);
        setResetComponent(false);
        setUserAnswers(props.unfilledGrid.map(row => row.map(() => "")));
        setColors(props.unfilledGrid.map(row => row.map(() => "")));
        // window.location.reload();
        // navigate(`/${props.link}`);
    }

    const handleDragStart = (event, month, rowIndex, columnIndex) => {
        event.dataTransfer.setData('text/plain', month);
        event.dataTransfer.setData('text/rowIndex', rowIndex.toString());
        event.dataTransfer.setData('text/columnIndex', columnIndex.toString());
    };

    const placeAnswer = (value, rowIndex, columnIndex) => {
        setUserAnswers((previousAnswers) => {
            const newAnswers = previousAnswers.map((row) => [...row]);
            newAnswers[rowIndex][columnIndex] = value;
            return newAnswers;
        });
    };

    const handlePointerDown = (event, value) => {
        event.preventDefault();
        event.currentTarget.setPointerCapture(event.pointerId);
        setDraggingValue(value);
    };

    const handlePointerUp = (event) => {
        if (draggingValue === null) {
            return;
        }

        const target = document.elementFromPoint(event.clientX, event.clientY);
        const cell = target?.closest(".sudoku_cell[data-row][data-column]");

        if (cell) {
            placeAnswer(
                draggingValue,
                Number(cell.dataset.row),
                Number(cell.dataset.column)
            );
        }

        event.currentTarget.releasePointerCapture(event.pointerId);
        setDraggingValue(null);
    };
    
    const handleDropContainer = (event, rowIndex, columnIndex) => {
        event.preventDefault();
    
        const draggedMonth = event.dataTransfer.getData('text/plain');
        const draggedRowIndex = parseInt(event.dataTransfer.getData('text/rowIndex'), 10);
        const draggedColumnIndex = parseInt(event.dataTransfer.getData('text/columnIndex'), 10);
    
        // Ensure that the drop is within the Sudoku grid
        if (!isNaN(draggedRowIndex) && !isNaN(draggedColumnIndex)) {
            placeAnswer(draggedMonth, rowIndex, columnIndex);
        }
    };
    
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className={`color_sudoku_parent ${props.specificClass}`}>
            {/* <div className="header"> */}
                {/* <a className="back" href="/sudoku-puzzles">←Back</a> */}
                {/* <h1>{props.title}</h1>
                <p>{props.info}</p> */}
                {/* <p>{props.reference}</p> */}
                <div className="reference">
                    {props.reference.map((item, index) => (
                                <div className="selection_circle" key={index}>
                                    <p
                                        className={draggingValue === item.german ? "is-dragging" : ""}
                                        draggable={true}
                                        onDragStart={(e) => handleDragStart(e, item.german, index, 0)}  // Assuming columnIndex is 0
                                        onDragOver={handleDragOver}
                                        onPointerDown={(e) => handlePointerDown(e, item.german)}
                                        onPointerMove={(e) => e.preventDefault()}
                                        onPointerUp={handlePointerUp}
                                        onPointerCancel={() => setDraggingValue(null)}
                                    >{item.german}</p>
                                </div>
                    ))}
                    {/* <table>
                        <thead>
                            <tr>
                                <th>Chinese</th>
                                <th>Pinyin</th>
                                <th>English</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.reference.map((item, index) => (
                                <tr key={index}>
                                    <td
                                        // className={`key_box`}
                                        draggable={true}
                                        onDragStart={(e) => handleDragStart(e, item.german, index, 0)}  // Assuming columnIndex is 0
                                        onDragOver={handleDragOver}
                                    >{item.german}</td>
                                    <td>{item.pinyin}</td>
                                    <td>{item.french}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> */}
                </div>
            {/* </div> */}
            <div className="color_sudoku">
                {props.unfilledGrid.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map((letter, columnIndex) => (
                            <div
                                key={columnIndex}
                                className={`sudoku_cell ${letter !== '' ? 'empty-cell' : ''} ${props.specificClass}`}
                                data-row={rowIndex}
                                data-column={columnIndex}
                            >
                                {letter}
                                {letter === '' ? (
                                    <textarea 
                                        value={userAnswers[rowIndex][columnIndex]}
                                        onChange={(e) => {
                                                const newAnswers = [...userAnswers];
                                                newAnswers[rowIndex][columnIndex] = e.target.value;
                                                setUserAnswers(newAnswers);
                                        }}
                                        onDragOver={(e) => handleDragOver(e)}
                                        onDrop={(e) => handleDropContainer(e, rowIndex, columnIndex)}  // Pass rowIndex and columnIndex
                                        style={{ 
                                            color: colors[rowIndex][columnIndex], 
                                        }}
                                    /> 
                                ) : null}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="submit">
                {resetComponent ? (
                    <button onClick={handleStartOver}>Start Over</button>
                ) : (
                    <div className="menu">
                        <button>
                        Previous
                        </button>
                        <button onClick={compareAnswers}>Check</button>
                        <button>
                        Next
                        </button>
                    </div>
                )}
                {/* <div className="navigate_games">
                    <button onClick={handlePrevious}>Previous</button>
                    <button className="games_grid_link" onClick={() => {navigate('/sudoku-puzzles')}}>
                        <div className="white_line"></div>
                        <div className="white_line"></div>
                        <div className="white_line"></div>
                    </button>
                    <button onClick={handleNext}>Next</button>
                </div> */}
            </div>
                {resetComponent && !isCompleted ? 
                    <div className="score">
                        <p>Score: {correctCount} / {props.emptyCount}</p>
                    </div> 
                : null}
            {isCompleted && (
                <Congratulations />
            )}
            {/* {error && <div className="error">{error}</div>} */}
        </div>
    )
}

export default Sudoku;

//rot - 赤, yellow - 黄色, blau - 青, grün - 緑, schwarz - 黒, weiss - 白
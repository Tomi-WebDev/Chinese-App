import React, { useState, useEffect } from "react";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./DragAndDrop.scss";
import "../App.css";
import completedSound from "../assets/audio/mixkit-instant-win-2021.wav";
import Congratulations from "./UI/CongratulationsPopUp/Congratulations";
// import { dragAndDropPuzzles } from "../../assets/info/gameLists";

const InputAnswer = (props) => {

    // const location = useLocation(); // Get the current location
    // const currentRouteIndex = dragAndDropPuzzles.indexOf(location.pathname);
    // const [game, setGame] = useState(null);
    const [answers, setAnswers] = useState(Array(props.correctAnswers.length).fill(""));
    const [score, setScore] = useState(null);
    const [check, setCheck] = useState(false);
    const [error, setError] = useState(null);
    // const [resetComponent, setResetComponent] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    // const {user} = useAuthContext();
    // const bestScore = game ? game.bestScore : 0;

    // const navigate = useNavigate()

    // const navigateTo = (index, direction) => {
    //     let targetIndex;

    //     if (direction === "previous") {
    //         console.log(index === 0)
    //         targetIndex = index === 0 ? dragAndDropPuzzles.length - 1 : index - 1;
    //         console.log(targetIndex)
    //     } else if (direction === "next") {
    //         targetIndex = index === dragAndDropPuzzles.length - 1 ? 0 : index + 1;
    //         console.log(targetIndex)
    //     }

    //     navigate(dragAndDropPuzzles[targetIndex]);
    //     console.log("Navigating to:", dragAndDropPuzzles[targetIndex]);
    // };

    // const handlePrevious = () => {
    //     navigateTo(currentRouteIndex, "previous");
    // };

    // const handleNext = () => {
    //     navigateTo(currentRouteIndex, "next");
    // };

    //Updates game to be the current game being played if the games array is available (if there is a user)
    // useEffect(() => {

    //     if (props.games.length > 0) {
    //         const foundGame = props.games.find(game => game.name === props.gameName);
    //         if (foundGame) {
    //             setGame(foundGame);
    //         }
    //     }
    // }, [props.games, props.gameName]);

    const calculateScore = (newScore) => {
        const totalAnswers = newScore.length;
        const correctCount = newScore.filter(item => item === true).length;

        const correctPercentage = (correctCount / totalAnswers) * 100;

        return correctPercentage
    };

    const handleClick = async (event) => {
        event.preventDefault();
        // setResetComponent(true);
        
        const newScore = answers.map((answer, index) => answer === props.correctAnswers[index]);
        setScore(newScore);
        setCheck(true);
        const isGameCompleted = newScore.every(item => item);
        const finalScore = calculateScore(newScore)

        // Calculate the timePlayed for this playthrough
        // const currentTime = new Date();
        // const timePlayedInSeconds = Math.floor((currentTime - props.startTime) / 1000); // Convert to seconds

        // Convert timePlayed to "MM:SS" format
        // const minutes = Math.floor(timePlayedInSeconds / 60);
        // const seconds = timePlayedInSeconds % 60;
        // const formattedTimePlayed = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        // if (!user) {
        //     setError('The game is score wouldn"t be saved unless you are a registered user');
        //     return
        // }

        // try {
            // const gameId = game._id;

            //  // Create a new entry for the timesPlayed array
            // const newPlaythrough = {
            //     playNumber: game.playthrough ? game.playthrough.length + 1 : 1,
            //     score: finalScore.toFixed(2),
            //     timePlayed: formattedTimePlayed
            // };

            // // Update the timesPlayed array and game
            // const updatedTimesPlayed = [...game.playthrough, newPlaythrough];

            // const response = await fetch(`/api/games/${gameId}`, {
            //         method: 'PATCH',
            //         body: JSON.stringify({ 
            //             playthrough: updatedTimesPlayed
            //         }),
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Authorization': `Bearer ${user.token}`
            //         }
            //     });

            // const updatedGame = await response.json();
            // console.log("Updated Game:", updatedGame);

            // if (finalScore > bestScore) {
                
            //     // Update the bestScore in the backend
            //     const response = await fetch(`/api/games/${gameId}`, {
            //         method: 'PATCH',
            //         body: JSON.stringify({ bestScore: finalScore.toFixed(2) }),
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Authorization': `Bearer ${user.token}`
            //         }
            //     });

            //     const updatedGame = await response.json();
            //     console.log("Updated Game:", updatedGame);
            // }

            // if (isGameCompleted) {
            //     setIsCompleted(true);

            //     // Update the completed status in the backend
            //     const response = await fetch(`/api/games/${gameId}`, {
            //         method: 'PATCH',
            //         body: JSON.stringify({ completed: isGameCompleted }),
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Authorization': `Bearer ${user.token}`
            //         }
            //     });

            //     const updatedGame = await response.json();
            //     console.log("Updated Game:", updatedGame);
            // }
        // } catch (error) {
        //     console.error("Error updating game:", error);
        // }
    };

    //Reload the page and start a new "playthrough" when clicking on the "Start Over" button
    const handleStartOver = () => {
        setAnswers(Array(props.correctAnswers.length).fill(""));
        setScore(null);
        setCheck(false);
        window.location.reload();
    };

    // Plays sound effect when a game is completed with a perfect score
    useEffect(() => {
        if (isCompleted) {
            const audio = new Audio(completedSound);
            audio.play();
        }
    }, [isCompleted]);

    const synth = window.speechSynthesis;
            let voices = synth.getVoices();
            // Initialize the speech utterance
            const utterance = new SpeechSynthesisUtterance();

            const speakWord = (word, lang) => {
                utterance.lang = lang;
                utterance.text = word;
                utterance.voice = voices.find((voice) => voice.lang === lang); // Replace with the desired language code
                synth.speak(utterance);
            };

    return (
        <div className="drag_drop_parent">
            {/* <div className="header">
                <div className="title">
                    <h1>{props.gameName}</h1>
                </div>
                {props.info}
            </div> */}
            {/* <div className={`word_segments`}>
                {props.words.map((month, index) => (
                    <div
                        key={index}
                        className={`key_box`}
                    >
                        {month}
                    </div>
                ))}
            </div> */}
            <div className="answer_column_input">
                {Array.from({ length: props.correctAnswers.length }, (_, index) => (
                    <div
                        key={index}
                        className={!check ? `input_group` : `input_group answers`}
                    >
                        <label htmlFor={`input_${index + 1}`}>{props.labelValues[index] + ':'}</label>
                        <input
                            key={index}
                            className={`answer_box empty ${
                                    check === true ? score !== null && answers[index] === props.correctAnswers[index]
                                                    ? "correct_answer"
                                                    : "wrong_answer"
                                                : ""
                                            }`}
                                            type="text"
                                            value={check === true ? answers[index] === props.correctAnswers[index] ? answers[index] : `${answers[index]} (${props.correctAnswers[index]})` : answers[index]}
                                            onChange={(e) => {
                                                const newAnswers = [...answers];
                                                newAnswers[index] = e.target.value;
                                                setAnswers(newAnswers);
                                            }}
                                            />
                            {/* <button onClick={() => speakWord(props.labelValues[index], 'fr')}>.</button> */}
                    </div>
                ))}
            </div>
            <div className="submit">
                {check ? (
                    <button onClick={handleStartOver}>Start Over</button>
                ) : (
                    <button onClick={handleClick}>Check</button>
                )}
                {/* <div className="navigate_games">
                    <button onClick={handlePrevious}>Previous</button>
                    <button className="games_grid_link" onClick={() => {navigate('/drag-and-drop-puzzles')}}>
                        <div className="white_line"></div>
                        <div className="white_line"></div>
                        <div className="white_line"></div>
                    </button>
                    <button onClick={handleNext}>Next</button>
                </div> */}
            </div>
            {isCompleted && (
                <Congratulations />
            )}
            {check && !isCompleted ? (<div className="score">Score: {calculateScore(answers.map((answer, index) => answer === props.correctAnswers[index])).toFixed(2)}%</div>) : null}
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default InputAnswer;  
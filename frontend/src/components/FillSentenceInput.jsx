import React, { useState, useEffect } from "react";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";
import completedSound from "../assets/audio/mixkit-instant-win-2021.wav";
import Congratulations from "./UI/CongratulationsPopUp/Congratulations";
// import { dragAndDropPuzzles } from "../../assets/info/gameLists";

const FillSentenceInput = (props) => {

    // const location = useLocation(); // Get the current location
    // const currentRouteIndex = dragAndDropPuzzles.indexOf(location.pathname);

    // const [game, setGame] = useState(null);
    const [answers, setAnswers] = useState(Array(props.correctAnswers.length).fill(""));
    const [score, setScore] = useState(null);
    const [check, setCheck] = useState(false);
    const [error, setError] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false);

    const calculateScore = (newScore) => {
        const totalAnswers = newScore.length;
        const correctCount = newScore.filter(item => item === true).length;

        const correctPercentage = (correctCount / totalAnswers) * 100;

        return correctPercentage
    };

    const handleClick = async (event) => {

        event.preventDefault();
        
        const newScore = answers.map((answer, index) => answer === props.correctAnswers[index]);
        setScore(newScore);
        setCheck(true);
    };

    const handleStartOver = () => {

        setAnswers(Array(props.correctAnswers.length).fill(""));
        setScore(null);
        setCheck(false);
        setError(null);
        setIsCompleted(false);
      };

    useEffect(() => {
        if (isCompleted) {
            const audio = new Audio(completedSound);
            audio.play();
        }
    }, [isCompleted]);

    let inputIndex = 0;

    return (
        <div className="drag_drop_parent">
            <div className="header">
                <div className="title">
                    <h1>{props.gameName}</h1>
                </div>
                {props.info}
            </div>
            <div className={`drag_elements__relative_parent`}>
                {props.words.map((word, index) => (
                    <div
                        key={index}
                        className={`drag_elements_relative`}
                    >
                        {word}
                    </div>
                ))}
            </div>
            <div className="answer_column">
                {props.sentences.map((sentence, sentenceIndex) => {
                    return (
                        <div
                            key={sentenceIndex}
                            className={!check ? `input_group` : `input_group answers`}
                            // onDragOver={handleDragOver}
                        >
                            <div key={sentenceIndex} className="answer_container">
                                {sentence.split(' ').map((word, wordIndex) => {
                                    if (props.words.includes(word)) {
                                        const currentIndex = inputIndex;
                                        inputIndex++;

                                        return (
                                            // <input
                                            //     key={wordIndex}
                                            //     className={`answer_box empty ${check === true ? score !== null && answers[currentIndex] === props.correctAnswers[currentIndex] ? "correct_answer" : "wrong_answer" : ""}`}

                                            // >
                                            // </input>
                                            <input
                                            key={wordIndex}
                                            className={`answer_box empty ${
                                                check === true
                                                ? score !== null &&
                                                    answers[currentIndex] === props.correctAnswers[currentIndex]
                                                    ? "correct_answer"
                                                    : "wrong_answer"
                                                : ""
                                            }`}
                                            type="text"
                                            value={answers[currentIndex] || ""}
                                            onChange={(e) => {
                                                const newAnswers = [...answers];
                                                newAnswers[currentIndex] = e.target.value;
                                                setAnswers(newAnswers);
                                            }}
                                            />
                                        );
                                    } else {
                                        return <span key={wordIndex}>{word} </span>;
                                    }
                                })}
                            </div>
                        </div>
                    );
                })}
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

export default FillSentenceInput;  
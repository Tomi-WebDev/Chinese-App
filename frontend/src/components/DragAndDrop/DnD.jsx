import React, { useState, useEffect } from "react";
import "../App.css";
import completedSound from "../assets/audio/mixkit-instant-win-2021.wav";
import Congratulations from "../UI/CongratulationsPopUp/Congratulations";

const DragAndDrop = (props) => {

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
        const isGameCompleted = newScore.every(item => item);
        const finalScore = calculateScore(newScore)
    };

    //Reload the page and start a new "playthrough" when clicking on the "Start Over" button
    const handleStartOver = () => {
        window.location.reload();
    };

    // Plays sound effect when a game is completed with a perfect score
    useEffect(() => {
        if (isCompleted) {
            const audio = new Audio(completedSound);
            audio.play();
        }
    }, [isCompleted]);

    const handleDragStart = (event, month) => {
        event.dataTransfer.setData('text/plain', month);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDropContainer = (event, index) => {
        event.preventDefault();

        const draggedMonth = event.dataTransfer.getData('text/plain');
        const newAnswers = [...answers];
        newAnswers[index] = `${draggedMonth}`;
        setAnswers(newAnswers);
    };

    return (
        <div className="months_parent">
            <div className={`word_segments`}>
                {props.words.map((month, index) => (
                    <div
                        key={index}
                        className={`key_box`}
                        draggable={true}
                        onDragStart={(e) => handleDragStart(e, month)}
                        onDragOver={handleDragOver}
                    >
                        {month}
                    </div>
                ))}
            </div>
            <div className="answer_column">
                {Array.from({ length: props.correctAnswers.length }, (_, index) => (
                    <div
                        key={index}
                        className={!check ? `input_group` : `input_group answers`}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDropContainer(e, index)}
                    >
                        <label htmlFor={`input_${index + 1}`}>{props.labelValues[index] + ':'}</label>
                        <div
                            className={`answer_box ${check === true ? score !== null && answers[index] === props.correctAnswers[index] ? "correct_answer" : "wrong_answer" : ""}`}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDropContainer(e, index)}
                        >
                            {check === true ? answers[index] === props.correctAnswers[index] ? answers[index] : `${answers[index]} (${props.correctAnswers[index]})` : answers[index]}
                        </div>
                    </div>
                ))}
            </div>
            <div className="submit">
                {check ? (
                    <button onClick={handleStartOver}>Start Over</button>
                ) : (
                    <button onClick={handleClick}>Check</button>
                )}
            </div>
            {isCompleted && (
                <Congratulations />
            )}
            {check && !isCompleted ? (<div className="score">Score: {calculateScore(answers.map((answer, index) => answer === props.correctAnswers[index])).toFixed(2)}%</div>) : null}
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default DragAndDrop;  
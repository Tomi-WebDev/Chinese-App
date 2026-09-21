import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
/* import "./InputList.css"; */
import "./InputListAlt.css";

import completedSound from "../assets/audio/mixkit-instant-win-2021.wav";
import Congratulations from "./UI/CongratulationsPopUp/Congratulations";

const InputList = (props) => {

    const location = useLocation();
    const navigate = useNavigate();
    const lessonRoutes = ["/lesson-1", "/lesson-2", "/lesson-3", "/lesson-4", "/lesson-5"];
    const currentLessonIndex = lessonRoutes.indexOf(location.pathname);
    const canGoPrevious = currentLessonIndex > 0;
    const canGoNext = currentLessonIndex >= 0 && currentLessonIndex < lessonRoutes.length - 1;

    const [isReversed, setIsReversed] = useState(false);
    const [shuffledIndices, setShuffledIndices] = useState(
        Array.from({ length: props.correctAnswers.length }, (_, index) => index)
    );
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

    const visibleLabels = shuffledIndices.map((index) => (isReversed ? props.correctAnswers[index] : props.labelValues[index]));
    const visibleAnswers = shuffledIndices.map((index) => (isReversed ? props.labelValues[index] : props.correctAnswers[index]));
    const visiblePinyin = shuffledIndices.map((index) => props.pinyin[index]);

    const handleCheck = async (event) => {

        event.preventDefault();     
        const newScore = answers.map((answer, index) => answer.toLowerCase() === visibleAnswers[index].toLowerCase());
        setScore(newScore);
        console.log(newScore);
        console.log(visibleAnswers);
        setCheck(true);
        const isGameCompleted = newScore.every(item => item);
        const finalScore = calculateScore(newScore)
    };

    const handleStartOver = () => {

        setAnswers(Array(visibleAnswers.length).fill(""));
        setScore(null);
        setCheck(false);
    };

    const handleShuffle = () => {
        const nextOrder = [...shuffledIndices];

        for (let i = nextOrder.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [nextOrder[i], nextOrder[j]] = [nextOrder[j], nextOrder[i]];
        }

        setShuffledIndices(nextOrder);
        setAnswers(Array(nextOrder.length).fill(""));
        setScore(null);
        setCheck(false);
    };

    const handleReverse = () => {
        setIsReversed((previous) => !previous);
        setAnswers(Array(visibleAnswers.length).fill(""));
        setScore(null);
        setCheck(false);
    };

    const handlePrevious = () => {
        if (canGoPrevious) {
            navigate(lessonRoutes[currentLessonIndex - 1]);
        }
    };

    const handleNext = () => {
        if (canGoNext) {
            navigate(lessonRoutes[currentLessonIndex + 1]);
        }
    };

    useEffect(() => {
        setShuffledIndices(Array.from({ length: props.correctAnswers.length }, (_, index) => index));
        setAnswers(Array(props.correctAnswers.length).fill(""));
        setScore(null);
        setCheck(false);
    }, [props.labelValues, props.correctAnswers, props.pinyin]);

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
        <div className="input_list">
            {Array.from({ length: visibleLabels.length }, (_, index) => (
                    <div className={"list_item"} key={`${visibleLabels[index]}-${index}`}>
                        {props.showPinyin && (
                            <span className="pinyin">{visiblePinyin[index]}</span>
                        )}
                        <span className={props.showPinyin ? "active" : ""}>{visibleLabels[index]}</span>
                        <input type="text" placeholder={props.language}
                            className={ 
                                check === true ? 
                                score !== null && answers[index].toLowerCase() === visibleAnswers[index].toLowerCase() ? 
                                "correct_answer" : 
                                "wrong_answer" : 
                                ""
                            }
                            value={check === true ? answers[index].toLowerCase() === visibleAnswers[index].toLowerCase() ? answers[index] : `${answers[index]} (${visibleAnswers[index]})` : answers[index]}
                            onChange={(e) => {
                                const newAnswers = [...answers];
                                newAnswers[index] = e.target.value;
                                setAnswers(newAnswers);
                            }}
                        />
                    </div>
                ))}
                <div className="lesson_action_stack">
                    <div className="lesson_nav_controls">
                        <button
                            type="button"
                            className="lesson_nav_button"
                            onClick={handlePrevious}
                            disabled={!canGoPrevious}
                        >
                            Previous
                        </button>
                        {check ? (
                            <button onClick={handleStartOver}>Start Over</button>
                        ) : (
                            <button onClick={handleCheck}>Check</button>
                        )}
                        <button
                            type="button"
                            className="lesson_nav_button"
                            onClick={handleNext}
                            disabled={!canGoNext}
                        >
                            Next
                        </button>
                    </div>
                    <div className="lesson_action_row">
                        <button type="button" className="shuffle_button" onClick={handleShuffle}>Shuffle</button>
                        <button type="button" className="reverse_button" onClick={handleReverse}>Reverse</button>
                    </div>
                </div>
        </div>
    )
}

export default InputList;

                {/* <button>Check</button> */}
            {/* <div className="list_item">
                <span></span>
                <input type="text" placeholder="Italiano"/>
            </div> */}
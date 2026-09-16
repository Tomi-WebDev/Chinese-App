import React, { useState, useEffect } from "react";
import "./InputList.css";

import completedSound from "../assets/audio/mixkit-instant-win-2021.wav";
import Congratulations from "./UI/CongratulationsPopUp/Congratulations";

const InputList = (props) => {

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

    const handleCheck = async (event) => {

        event.preventDefault();     
        const newScore = answers.map((answer, index) => answer.toLowerCase() === props.correctAnswers[index].toLowerCase());
        setScore(newScore);
        console.log(newScore);
        console.log(props.correctAnswers);
        setCheck(true);
        const isGameCompleted = newScore.every(item => item);
        const finalScore = calculateScore(newScore)
    };

    const handleStartOver = () => {

        setAnswers(Array(props.correctAnswers.length).fill(""));
        setScore(null);
        setCheck(false);
    };

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
            {Array.from({ length: props.correctAnswers.length }, (_, index) => (
                    <div className={"list_item"} key={index}>
                        {props.showPinyin && (
                            <span className="pinyin">{props.pinyin[index]}</span>
                        )}
                        <span className={props.showPinyin ? "active" : ""}>{props.labelValues[index]}</span>
                        <input type="text" placeholder={props.language}
                            className={ 
                                check === true ? 
                                score !== null && answers[index].toLowerCase() === props.correctAnswers[index].toLowerCase() ? 
                                "correct_answer" : 
                                "wrong_answer" : 
                                ""
                            }
                            value={check === true ? answers[index].toLowerCase() === props.correctAnswers[index].toLowerCase() ? answers[index] : `${answers[index]} (${props.correctAnswers[index]})` : answers[index]}
                            onChange={(e) => {
                                const newAnswers = [...answers];
                                newAnswers[index] = e.target.value;
                                setAnswers(newAnswers);
                            }}
                        />
                    </div>
                ))}
                {check ? (
                    <button onClick={handleStartOver}>Start Over</button>
                ) : (
                    <button onClick={handleCheck}>Check</button>
                )}
        </div>
    )
}

export default InputList;

                {/* <button>Check</button> */}
            {/* <div className="list_item">
                <span></span>
                <input type="text" placeholder="Italiano"/>
            </div> */}
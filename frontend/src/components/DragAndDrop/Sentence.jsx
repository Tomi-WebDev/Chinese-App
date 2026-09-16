import React, { useState, useEffect } from "react";
import "../../App.css"; // Import your CSS styles
import completedSound from "../../assets/audio/mixkit-instant-win-2021.wav";
import Congratulations from "../UI/CongratulationsPopUp/Congratulations";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Make sure to import FontAwesome icons

const DuolingoDragAndDrop = (props) => {

    // const synth = window.speechSynthesis;
    // let voices = synth.getVoices();

    // Initialize the speech utterance
    // const utterance = new SpeechSynthesisUtterance();
    // utterance.lang = 'fr'; // Replace with the desired language code

    // const speakWord = (word) => {
    //     utterance.text = word;
    //     utterance.voice = voices.find((voice) => voice.lang === 'fr'); // Replace with the desired language code
    //     synth.speak(utterance);
    // };

    // const speakSentence = (sentence) => {
    //     utterance.text = sentence;
    //     utterance.voice = voices.find((voice) => voice.lang === 'fr'); // Replace with the desired language code
    //     synth.speak(utterance);
    // };
      
      
    //

    const translatedSentence = "I am a man and she is a woman";
    const answer = "Je suis un homme et elle est une famme";

    const translatedSentence2 = "That is a girl and that is a boy";
    const answer2 = "C'est une fille et c'est un garçon";

    const [sentence, setSentence] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [check, setCheck] = useState(false);
    const [sentenceID, setSentenceID] = useState(0);
    const answers = [answer, answer2];
    const words = [props.words, props.words2];
    const sentences = [translatedSentence, translatedSentence2];

    const handleClick = () => {

        setCheck(true);
        console.log(sentence.join(" "));
        if(sentence.join(" ") === answer) {
            setIsCompleted(true);
        }
    }

    const handleWordClick = (word) => {

        // setCheck(true);
        const updatedSentence = [...sentence, word];
        setSentence(updatedSentence);
    
        // Check if the sentence is complete and correct
        // const sentenceString = updatedSentence.join(" ");
        // if (sentenceString === answers[sentenceID]) {
        //     setIsCompleted(true);
        // }
    }

    const handleStartOver = () => {
        window.location.reload();
    };

    const handleDragStart = (event, word) => {
        event.dataTransfer.setData("text/plain", word);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const word = event.dataTransfer.getData("text/plain");
        setSentence([...sentence, word]);
    };

    const handleRemoveWord = (index) => {
        const newSentence = [...sentence];
        newSentence.splice(index, 1);
        setSentence(newSentence);
    };

    const handleNextClick = () => {

        setIsCompleted(false);
        setCheck(false);
        setSentence([]);
        if(sentenceID < answers.length - 1) {
            setSentenceID(sentenceID + 1);
        } else {
            setSentenceID(0);
        }
    }

    const handlePreviousClick = () => {

        setIsCompleted(false);
        setCheck(false);
        setSentence([]);
        if(sentenceID > 0) {
            setSentenceID(sentenceID - 1);
        } else {
            setSentenceID(answers.length - 1);
        }
    }

    useEffect(() => {
        if (isCompleted) {
            const audio = new Audio(completedSound);
            audio.play();
        }
    }, [isCompleted]);

    return (
        <div className="drag_drop_parent">
            <div className="word_segments">
                {words[sentenceID].map((word, index) => (
                <div
                    key={index}
                    className="key_box"
                    draggable
                    onDragStart={(e) => handleDragStart(e, word)}
                    // onClick={() => handleWordClick(word)}
                    onClick={() => {
                        handleWordClick(word);
                        // speakWord(word); // Speak the word when it's clicked
                    }}
                >
                    {word}
                </div>
                ))}
            </div>
            <div className="sentence_translation">
                <p>{sentences[sentenceID]}</p>
            </div>
            <div
                style = {check ? sentence.join(" ") === answers[sentenceID] ? {color: 'green'} : {color: 'red'} : {color: '#000'}}
                className="answer_box sentence"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {check ? (isCompleted ? answers[sentenceID] : `${sentence.join(" ")} (${answers[sentenceID]})`) : (
                    sentence.map((word, index) => (
                      <div
                        key={index}
                        className="key_box"
                        onClick={() => handleRemoveWord(index)}
                      >
                        {word}
                      </div>
                    )))
                }
                {(check ? sentence.join(" ") === answers[sentenceID] ? (
                        <span style={{ color: 'green' }}>✔</span>
                    ) : (
                        <span style={{ color: 'red' }}>✘</span>
                ) : null)}
            </div>
            <div className="submit">
                {check ? (
                    <>
                        <button onClick={handlePreviousClick}>Previous</button>
                        <button onClick={handleStartOver}>Start Over</button>
                        <button onClick={handleNextClick}>Next</button>
                    </>
                    // <>
                    //     <FontAwesomeIcon icon="arrow-left" onClick={handlePreviousClick} />
                    //     <FontAwesomeIcon icon="undo" onClick={handleStartOver} />
                    //     <FontAwesomeIcon icon="arrow-right" onClick={handleNextClick} />
                    // </>
                ) : (
                    <button onClick={() =>{
                        handleClick();
                        // speakSentence(sentence);
                    }}>Check</button>
                )}
            </div>
            {isCompleted && (
                <Congratulations />
            )}
        </div>
    );
};

export default DuolingoDragAndDrop;
// Flashcard.js
import React, { useState, useEffect } from 'react';
/* import "./Flashcard.css"; */
import "./FlashcardAlt.css";

const Flashcard = ({key, french, german, pinyin, showPinyin}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  
  const synth = window.speechSynthesis;
  let voices = synth.getVoices();
  // Initialize the speech utterance
  const utterance = new SpeechSynthesisUtterance();

  const speakWord = (word, lang) => {
      utterance.lang = lang;
      utterance.text = word;
      utterance.voice = voices.find((voice) => voice.lang === lang); // Replace with the desired language code
      // synth.speak(utterance);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className={`card`}>
        <div className="front" onClick={() => speakWord(french, "en")}>
          <span>{german}</span>
          {showPinyin && <span className="pinyin">{pinyin}</span>}
        </div>
        <div className="back" onClick={() => speakWord(german, "nl-NL")}>
          <span>{french}</span>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
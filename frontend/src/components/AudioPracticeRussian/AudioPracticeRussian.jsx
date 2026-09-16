import React, { useState, useEffect } from 'react';
import '../AudioPractice/AudioPractice.css';
import audio from "../../assets/icons/audio.svg";

const AudioPractice = ({ englishSentenceList, russianSentenceList, selectedIndex, audioList }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswerEnglish, setUserAnswerEnglish] = useState('');
    const [userAnswerRussian, setUserAnswerRussian] = useState('');
    const [isEnglishCorrect, setIsEnglishCorrect] = useState(null);
    const [isRussianCorrect, setIsRussianCorrect] = useState(null);

    useEffect(() => {
      setCurrentIndex(selectedIndex)
    }, [selectedIndex])

//   const audioList = [
//     sentence1,
//     sentence2,
//     sentence3,
//     sentence4,
//     sentence5,
//     sentence6,
//     sentence7,
//     sentence8,
//     sentence9,
//     sentence10,
//     sentence11,
//     sentence12,
//     sentence13,
//     sentence14,
//     sentence15,
//     sentence16,
//     sentence17,
//     sentence18,
//     sentence19,
//     sentence20,
//     sentence21,
//     sentence22,
//     sentence23,
//     sentence24,
//     sentence25,
//     sentence26,
//     sentence27,
//     sentence28,
//     sentence29,
//     sentence30
//   ];  

  const playAudio = (audioIndex) => {
    const audio = new Audio(audioList[audioIndex]);
    audio.play();
  };

    const handleCheckAnswer = () => {
        // Implement your answer checking logic here
        const correctAnswerEnglish = englishSentenceList[currentIndex];
        const correctAnswerRussian = russianSentenceList[currentIndex];

        if (userAnswerEnglish === correctAnswerEnglish) {
            setIsEnglishCorrect(true);
            } else {
            setIsEnglishCorrect(false);
        }

        if(userAnswerRussian === correctAnswerRussian) {
          setIsRussianCorrect(true);
        } else {
          setIsRussianCorrect(false);
        }
    };

const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    setUserAnswerEnglish('');
    setUserAnswerRussian('');
    setIsEnglishCorrect(null);
    setIsRussianCorrect(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(englishSentenceList.length - 1, prevIndex + 1));
    setUserAnswerEnglish('');
    setUserAnswerRussian('');
    setIsEnglishCorrect(null);
    setIsRussianCorrect(null);
  };

//   useEffect(() => {
//     // Update speechSynthesis voices when they are available
//     voices = synth.getVoices();
//   }, [synth]);

  return (
    <div className="audio_practice_container">
        <img src={audio} alt="audio" onClick={() => playAudio(currentIndex)}/>
        <input
          type="text"
          value={userAnswerEnglish}
          onChange={(e) => setUserAnswerEnglish(e.target.value)}
          placeholder="Type the English translation"
        />
        {isEnglishCorrect === null
        ? ""
        : isEnglishCorrect
            ? <p className="answer" style={{ color: 'green' }}>{userAnswerEnglish}</p>
            : <div id='incorrect'><p className="answer" style={{ color: 'green' }}>{englishSentenceList[currentIndex]}</p><p className="answer" style={{ color: 'red' }}>{userAnswerEnglish}</p></div>
        }
        <input
          type="text"
          value={userAnswerRussian}
          onChange={(e) => setUserAnswerRussian(e.target.value)}
          placeholder="Type the sentence in Chinese"
        />
        {isRussianCorrect === null
        ? ""
        : isRussianCorrect
            ? <p className="answer" style={{ color: 'green' }}>{userAnswerRussian}</p>
            : <div id='incorrect'><p className="answer" style={{ color: 'green' }}>{russianSentenceList[currentIndex]}</p><p className="answer" style={{ color: 'red' }}>{userAnswerRussian}</p></div>
        }
      <div className="menu">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={() => handleCheckAnswer(currentIndex)}>Check</button>
        <button onClick={handleNext} disabled={currentIndex === englishSentenceList.length - 1}>
          Next
        </button>
      </div>
      {/* <div className="chinese_word">{vocabularyList[currentIndex].firstLang}</div> */}
    </div>
  );
};

export default AudioPractice;

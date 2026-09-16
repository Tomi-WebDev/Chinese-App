import React, { useState, useEffect } from 'react';
import '../AudioPractice/AudioPractice.css';
import audio from "../../assets/icons/audio.svg";
import sentence1 from "../../assets/audio/phrases/phrase1.mp3";
import sentence2 from "../../assets/audio/phrases/phrase2.mp3";
import sentence3 from "../../assets/audio/phrases/phrase3.mp3";
import sentence4 from "../../assets/audio/phrases/phrase4.mp3";
import sentence5 from "../../assets/audio/phrases/phrase5.mp3";
import sentence6 from "../../assets/audio/phrases/phrase6.mp3";
import sentence7 from "../../assets/audio/phrases/phrase7.mp3";
import sentence8 from "../../assets/audio/phrases/phrase8.mp3";
import sentence9 from "../../assets/audio/phrases/phrase9.mp3";
import sentence10 from "../../assets/audio/sentences/sentence10.mp3";
import sentence11 from "../../assets/audio/sentences/sentence11.mp3";
import sentence12 from "../../assets/audio/sentences/sentence12.mp3";
import sentence13 from "../../assets/audio/sentences/sentence13.mp3";
import sentence14 from "../../assets/audio/sentences/sentence14.mp3";
import sentence15 from "../../assets/audio/sentences/sentence15.mp3";
import sentence16 from "../../assets/audio/sentences/sentence16.mp3";
import sentence17 from "../../assets/audio/sentences/sentence17.mp3";
import sentence18 from "../../assets/audio/sentences/sentence18.mp3";
import sentence19 from "../../assets/audio/sentences/sentence19.mp3";
import sentence20 from "../../assets/audio/sentences/sentence20.mp3";
import sentence21 from "../../assets/audio/sentences/sentence21.mp3";
import sentence22 from "../../assets/audio/sentences/sentence22.mp3";
import sentence23 from "../../assets/audio/sentences/sentence23.mp3";
import sentence24 from "../../assets/audio/sentences/sentence24.mp3";
import sentence25 from "../../assets/audio/sentences/sentence25.mp3";
import sentence26 from "../../assets/audio/sentences/sentence26.mp3";
import sentence27 from "../../assets/audio/sentences/sentence27.mp3";
import sentence28 from "../../assets/audio/sentences/sentence28.mp3";
import sentence29 from "../../assets/audio/sentences/sentence29.mp3";
import sentence30 from "../../assets/audio/sentences/sentence30.mp3";

const AudioPractice2 = ({ englishSentenceList, hanziSentenceList, pinyinSentenceList, selectedIndex }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [userAnswerHanzi, setUserAnswerHanzi] = useState('');
    const [userAnswerPinyin, setUserAnswerPinyin] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [isHanziCorrect, setIsHanziCorrect] = useState(null);
    const [isPinyinCorrect, setIsPinyinCorrect] = useState(null);

    useEffect(() => {
      setCurrentIndex(selectedIndex)
    }, [selectedIndex])

  const audioList = [
    sentence1,
    sentence2,
    sentence3,
    sentence4,
    sentence5,
    sentence6,
    sentence7,
    sentence8,
    sentence9,
    sentence10,
    sentence11,
    sentence12,
    sentence13,
    sentence14,
    sentence15,
    sentence16,
    sentence17,
    sentence18,
    sentence19,
    sentence20,
    sentence21,
    sentence22,
    sentence23,
    sentence24,
    sentence25,
    sentence26,
    sentence27,
    sentence28,
    sentence29,
    sentence30
  ];  

  // const sentenceData = englishSentenceList.map((sentence, index) => ({
  //   sentence,
  //   chinese: hanziSentenceList[index],
  //   pinyin: pinyinSentenceList[index],
  //   audio: audioList[index],
  // }));

  // function shuffleArray(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //     console.log(array);
  //   }
  // }

  // shuffleArray(sentenceData);

  // const shuffledEnglishSentenceList = sentenceData.map((data) => data.sentence);
  // const shuffledChineseSentenceList = sentenceData.map((data) => data.chinese);
  // const shuffledPinyinSentenceList = sentenceData.map((data) => data.pinyin);
  // const shuffledAudioList = sentenceData.map((data) => data.audio);

  // const playAudio = (audioIndex) => {
  //   const audio = new Audio(shuffledAudioList[audioIndex]);
  //   audio.play();
  // };

  const playAudio = (audioIndex) => {
    const audio = new Audio(audioList[audioIndex]);
    audio.play();
  };

//   const synth = window.speechSynthesis;
//   let voices = synth.getVoices();
//   const utterance = new SpeechSynthesisUtterance();

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [userAnswer, setUserAnswer] = useState('');

//   const speakWord = (word, lang) => {
//     utterance.lang = lang;
//     utterance.text = word;
//     utterance.voice = voices.find((voice) => voice.lang === lang);
//     synth.speak(utterance);
//   };

    const handleCheckAnswer = () => {
        // Implement your answer checking logic here
        const correctAnswerEnglish = englishSentenceList[currentIndex];
        const correctAnswerHanzi = hanziSentenceList[currentIndex];
        const correctAnswerPinyin = pinyinSentenceList[currentIndex];

        if (userAnswer === correctAnswerEnglish) {
            setIsCorrect(true);
            } else {
            setIsCorrect(false);
        }

        if(userAnswerHanzi === correctAnswerHanzi) {
          setIsHanziCorrect(true);
        } else {
          setIsHanziCorrect(false);
        }

        if(userAnswerPinyin === correctAnswerPinyin) {
          setIsPinyinCorrect(true);
        } else {
          setIsPinyinCorrect(false);
        }
    };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => Math.min(vocabularyList.length - 1, prevIndex + 1));
//   };

// const handleSearch = () => {
//   const number = parseInt(onSearch, 10);

//   if (!isNaN(number) && number >= 1 && number <= vocabularyList.length) {
//       setCurrentIndex(number - 1);
//   }
// };

const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    setUserAnswer('');
    setUserAnswerHanzi('');
    setUserAnswerPinyin('');
    setIsCorrect(null);
    setIsHanziCorrect(null);
    setIsPinyinCorrect(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(englishSentenceList.length - 1, prevIndex + 1));
    setUserAnswer('');
    setUserAnswerHanzi('');
    setUserAnswerPinyin('');
    setIsCorrect(null);
    setIsHanziCorrect(null);
    setIsPinyinCorrect(null);
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
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type the English translation"
        />
        {isCorrect === null
        ? ""
        : isCorrect
            ? <p className="answer" style={{ color: 'green' }}>{userAnswer}</p>
            : <div id='incorrect'><p className="answer" style={{ color: 'green' }}>{englishSentenceList[currentIndex]}</p><p className="answer" style={{ color: 'red' }}>{userAnswer}</p></div>
        }
        <input
          type="text"
          value={userAnswerHanzi}
          onChange={(e) => setUserAnswerHanzi(e.target.value)}
          placeholder="Type the sentence in Chinese"
        />
        {isHanziCorrect === null
        ? ""
        : isHanziCorrect
            ? <p className="answer" style={{ color: 'green' }}>{userAnswerHanzi}</p>
            : <div id='incorrect'><p className="answer" style={{ color: 'green' }}>{hanziSentenceList[currentIndex]}</p><p className="answer" style={{ color: 'red' }}>{userAnswerHanzi}</p></div>
        }
        <input
          type="text"
          value={userAnswerPinyin}
          onChange={(e) => setUserAnswerPinyin(e.target.value)}
          placeholder="Type the pinyin transliteration"
        />
        {isPinyinCorrect === null
        ? ""
        : isPinyinCorrect
            ? <p className="answer" style={{ color: 'green' }}>{userAnswerPinyin}</p>
            : <div id='incorrect'><p className="answer" style={{ color: 'green' }}>{pinyinSentenceList[currentIndex]}</p><p className="answer" style={{ color: 'red' }}>{userAnswerPinyin}</p></div>
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

export default AudioPractice2;

import React, { useState } from "react";
import "../Italian/Italian.css";

import Navbar from "../../components/UI/Navbar/Navbar";
import Footer from "../../components/UI/Footer/Footer";
import InputAnswer from "../../components/InputAnswer";
import Flashcard from "../../components/Flashcard/Flashcard";
import InputList from "../../components/InputList";
import AudioPractice from "../../components/AudioPractice/AudioPractice";
import AudioPractice2 from "../../components/AudioPractice2/AudioPractice2";
import Sudoku1 from "../../components/Sudoku/Sudoku1";
import PickHanzi from "../../components/PickHanzi/PickHanzi";
import Dialoog from "../../components/Dialoog/Dialoog";

const IrregularVerbsfirstLang = () => {

    const [selectedExercise, setSelectedExercise] = useState("Test");
    // const [currentIndex, setCurrentIndex] = useState(0);
    const [showPinyin, setShowPinyin] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const togglePinyin = () => {
        setShowPinyin((prev) => !prev);
    };  

    const handleExerciseClick = (exerciseName) => {
      setSelectedExercise(exerciseName);
    };

    // const handleSearch = (searchInput) => {
    //     const number = parseInt(searchInput, 10);
    
    //     if (!isNaN(number) && number >= 1 && number <= sentenceList.length) {
    //       setCurrentIndex(number - 1);
    //       console.log(number);
    //       console.log(currentIndex);
    //     }
    // };

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

        const [vocabularyList, setVocabularyList] = useState([
            { firstLang: "ich (sein)", secondLang: "bin", pinyin: "Präsens" },
            { firstLang: "du (sein)", secondLang: "bist", pinyin: "Präsens" },
            { firstLang: "er/sie/es (sein)", secondLang: "ist", pinyin: "Präsens" },
            { firstLang: "wir (sein)", secondLang: "sind", pinyin: "Präsens" },
            { firstLang: "ihr (sein)", secondLang: "seid", pinyin: "Präsens" },
            { firstLang: "sie/Sie (sein)", secondLang: "sind", pinyin: "Präsens" },
            { firstLang: "ich (sein)", secondLang: "war", pinyin: "Präteritum" },
            { firstLang: "du (sein)", secondLang: "warst", pinyin: "Präteritum" },
            { firstLang: "er/sie/es (sein)", secondLang: "war", pinyin: "Präteritum" },
            { firstLang: "wir (sein)", secondLang: "waren", pinyin: "Präteritum" },
            { firstLang: "ihr (sein)", secondLang: "wart", pinyin: "Präteritum" },
            { firstLang: "sie/Sie (sein)", secondLang: "waren", pinyin: "Präteritum" },
            { firstLang: "er/sie/es (sein)", secondLang: "gewesen", pinyin: "Perfekt" },
        
            // { firstLang: "ich (sein)", secondLang: "bin" },
            // { firstLang: "du (sein)", secondLang: "bist" },
            // { firstLang: "er/sie/es (sein)", secondLang: "ist" },
            // { firstLang: "wir (sein)", secondLang: "sind" },
            // { firstLang: "ihr (sein)", secondLang: "seid" },
            // { firstLang: "sie/Sie (sein)", secondLang: "sind" },
            // { firstLang: "ich (sein)", secondLang: "bin" },
            // { firstLang: "du (sein, Präteritum)", secondLang: "bist" },
            // { firstLang: "er/sie/es (sein)", secondLang: "ist" },
            // { firstLang: "wir (sein)", secondLang: "sind" },
            // { firstLang: "ihr (sein)", secondLang: "seid" },
            // { firstLang: "sie/Sie (sein)", secondLang: "sind" },
            // { firstLang: "", secondLang: "" },
        ]);
  
        const pinyin = vocabularyList.map(word => word.pinyin)
        const answers = vocabularyList.map(word => word.secondLang);
        const words = vocabularyList.map(word => word.secondLang);
        const labelValues = vocabularyList.map(word => word.firstLang);
        console.log(labelValues)
        // shuffleArray(words);

    return (
        <div className="parent_container_app">
          <Navbar onGameSelect={handleExerciseClick}/>
          {selectedExercise === "Test" &&  <InputList correctAnswers={answers} words={words} labelValues={labelValues} pinyin={pinyin} showPinyin={showPinyin} togglePinyin={togglePinyin}/>}
          {selectedExercise === "Flashcards" && <div className="flashcard_container">
                    {vocabularyList.map((word, index) => (
                      <Flashcard key={index} german={word.firstLang} french={word.secondLang} />
                    ))}
                  </div>}
                  <Footer showPinyin={showPinyin} togglePinyin={togglePinyin}/>
        </div>
    )
}

export default IrregularVerbsfirstLang;
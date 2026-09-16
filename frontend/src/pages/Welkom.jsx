import React, { useEffect, useState } from "react";
import "./Italian/Italian.css";

import NavbarNL from "../components/UI/Navbar/NavbarNL";
import FooterNL from "../components/UI/Footer/FooterNL";
import Flashcard from "../components/Flashcard/Flashcard";
import InputList from "../components/InputList";
import AudioPractice from "../components/AudioPractice/AudioPractice";
import AudioPractice2 from "../components/AudioPractice2/AudioPractice2";
import Dialoog from "../components/Dialoog/Dialoog";

const Welkom = () => {

    const [selectedExercise, setSelectedExercise] = useState("Test");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [languageSwitch, setLanguageSwitch] = useState(false);
    const [language, setLanguage] = useState("Dutch");

    const handleExerciseClick = (exerciseName) => {
      setSelectedExercise(exerciseName);
    }; 

    const [vocabularyList, setVocabularyList] = useState([
        { firstLang: "welkom (in)", secondLang: "welcome (to)", audio: ""},
        { firstLang: "goedemorgen", secondLang: "good morning", audio: ""},
        { firstLang: "allemaal", secondLang: "everyone", audio: ""},
        { firstLang: "de cursus", secondLang: "the course", audio: ""},
        { firstLang: "de", secondLang: "the", audio: ""},
    ]);

    const [answers, setAnswers] = useState(vocabularyList.map(word => word.firstLang));
    const [labelValues, setLabelValues] = useState(vocabularyList.map(word => word.secondLang));

    // setAnswers(vocabularyList.map(word => word.secondLang));
    // setLabelValues(vocabularyList.map(word => word.firstLang));

    const switchLanguages = () => {

        setLanguageSwitch((prev) => !prev);

        if(languageSwitch) {
            setLanguage("Dutch");
            setAnswers(vocabularyList.map(word => word.firstLang));
            setLabelValues(vocabularyList.map(word => word.secondLang));
        } else {
            setLanguage("English");
            setAnswers(vocabularyList.map(word => word.secondLang));
            setLabelValues(vocabularyList.map(word => word.firstLang));
        }
    }; 

    // const answers = vocabularyList.map(word => word.firstLang);
    // const labelValues = vocabularyList.map(word => word.secondLang);

    console.log(answers);
    console.log(labelValues);

    return (
        <div className="parent_container_app">
            <NavbarNL onGameSelect={handleExerciseClick}/>
            {selectedExercise === "Dialoog" && <Dialoog />}
            {selectedExercise === "Test" &&  <InputList correctAnswers={answers} labelValues={labelValues} language={language}/>}
            {selectedExercise === "Flashcards" && <div className="flashcard_container">
                        {vocabularyList.map((word, index) => (
                        <Flashcard key={index} german={word.firstLang} french={word.secondLang} />
                        ))}
            </div>}
            <FooterNL languageSwitch={languageSwitch} switchLanguages={switchLanguages}/>
        </div>
    )
}

export default Welkom;
import React, { useState } from "react"; 
import "../Italian/Italian.css";

import NavbarRU from "../../components/UI/Navbar/NavbarRU";
import Footer from "../../components/UI/Footer/Footer";
import Flashcard from "../../components/Flashcard/Flashcard";
import InputList from "../../components/InputList";
import AudioPracticeRussian from "../../components/AudioPracticeRussian/AudioPracticeRussian";
import Sudoku1 from "../../components/Sudoku/Sudoku1";
import PickHanzi from "../../components/PickHanzi/PickHanzi";

const RussianDay4 = () => {

    const [selectedExercise, setSelectedExercise] = useState("Test");
    // const [currentIndex, setCurrentIndex] = useState(0);

    const handleExerciseClick = (exerciseName) => {
      setSelectedExercise(exerciseName);
    };

    const [vocabularyList, setVocabularyList] = useState([
        { firstLang: "right", secondLang: "правильно"},
        { firstLang: "wrong", secondLang: "неправильно"},
        { firstLang: "everywhere", secondLang: "везде"},
        { firstLang: "today", secondLang: "сегодня"},
        { firstLang: "tomorrow", secondLang: "завтра"},
        { firstLang: "yesterday", secondLang: "вчера"},
        { firstLang: "always", secondLang: "всегда"},
    ]);

    const [vocabularyList2, setVocabularyList2] = useState([
        { firstLang: "I speak", secondLang: "Я говорю"},
        { firstLang: "You speak", secondLang: "Ты говоришь"},
        { firstLang: "He speaks", secondLang: "Он говорит"},
        { firstLang: "She speaks", secondLang: "Она говорит"},
        { firstLang: "We speak", secondLang: "Мы говорим"},
        { firstLang: "You speak", secondLang: "Вы говорите"},
        { firstLang: "They speak", secondLang: "Они говорят"},
    ]);

    const [vocabularyList3, setVocabularyList3] = useState([
        { firstLang: "man", secondLang: "мужчина"},
        { firstLang: "woman", secondLang: "женщина"},
        { firstLang: "child", secondLang: "ребёнок"},
        { firstLang: "children", secondLang: "дети"},
        { firstLang: "parents", secondLang: "родители"},
        { firstLang: "person", secondLang: "человек"},
        { firstLang: "people", secondLang: "люди"},
    ]);

    const [vocabularyList4, setVocabularyList4] = useState([
        { firstLang: "money", secondLang: "деньги"},
        { firstLang: "watch", secondLang: "часы"},
        { firstLang: "eyeglasses", secondLang: "очки"},
        { firstLang: "ticket", secondLang: "билет"},
        { firstLang: "party", secondLang: "вечеринка"},
    ]);

    const [vocabularyList5, setVocabularyList5] = useState([
        { firstLang: "rich", secondLang: "богатый"},
        { firstLang: "rich (f.)", secondLang: "богатая"},
        { firstLang: "poor", secondLang: "бедный"},
        { firstLang: "poor (f.)", secondLang: "бедная"},
        { firstLang: "tall", secondLang: "высокий"},
        { firstLang: "short", secondLang: "низкий"},
        { firstLang: "modest", secondLang: "скромный"},
        { firstLang: "beautiful", secondLang: "красивый"},
        { firstLang: "smart", secondLang: "умный"},
    ]);

    const [vocabularyList6, setVocabularyList6] = useState([
        { firstLang: "this (m.)", secondLang: "етот"},
        { firstLang: "that (m.)", secondLang: "тот"},
        { firstLang: "this (f.)", secondLang: "ета"},
        { firstLang: "that (n.)", secondLang: "та"},
        { firstLang: "this (n.)", secondLang: "ето"},
        { firstLang: "that (n.)", secondLang: "то"},
        { firstLang: "these", secondLang: "ети"},
        { firstLang: "those", secondLang: "те"},
    ]);

    const [vocabularyList7, setVocabularyList7] = useState([
        { firstLang: "Bye", secondLang: "Пока"},
        { firstLang: "Goodbye", secondLang: "До свидания"},
        { firstLang: "As always", secondLang: "Как всегда"},
        { firstLang: "As usual", secondLang: "Как обычна"},
        { firstLang: "I can't", secondLang: "Я не могу"},
        { firstLang: "It's a pity", secondLang: "Очень жаль"},
        { firstLang: "Unfortunately, no", secondLang: "К сожалению, нет"},
        { firstLang: "I hope", secondLang: "Я надеюсь"},
        { firstLang: "I have to go", secondLang: "Мне пора"},
    ]);

    const [vocabularyList8, setVocabularyList8] = useState([
        { firstLang: "home", secondLang: "дом"},
        { firstLang: "homeless", secondLang: "бездомный"},
        { firstLang: "housewife", secondLang: "домохозяйка"},
        { firstLang: "maternity hospital", secondLang: "роддом"},
        { firstLang: "home-made", secondLang: "домашний"},
    ]);

    const answers = vocabularyList.map(word => word.secondLang);
    const words = vocabularyList.map(word => word.secondLang);
    const labelValues = vocabularyList.map(word => word.firstLang);

    const answers2 = vocabularyList2.map(word => word.secondLang);
    const words2 = vocabularyList2.map(word => word.secondLang);
    const labelValues2 = vocabularyList2.map(word => word.firstLang);

    const answers3 = vocabularyList3.map(word => word.secondLang);
    const words3 = vocabularyList3.map(word => word.secondLang);
    const labelValues3 = vocabularyList3.map(word => word.firstLang);

    const answers4 = vocabularyList4.map(word => word.secondLang);
    const words4 = vocabularyList4.map(word => word.secondLang);
    const labelValues4 = vocabularyList4.map(word => word.firstLang);

    const answers5 = vocabularyList5.map(word => word.secondLang);
    const words5 = vocabularyList5.map(word => word.secondLang);
    const labelValues5 = vocabularyList5.map(word => word.firstLang);

    const answers6 = vocabularyList6.map(word => word.secondLang);
    const words6 = vocabularyList6.map(word => word.secondLang);
    const labelValues6 = vocabularyList6.map(word => word.firstLang);

    const answers7 = vocabularyList7.map(word => word.secondLang);
    const words7 = vocabularyList7.map(word => word.secondLang);
    const labelValues7 = vocabularyList7.map(word => word.firstLang);

    const answers8 = vocabularyList8.map(word => word.secondLang);
    const words8 = vocabularyList8.map(word => word.secondLang);
    const labelValues8 = vocabularyList8.map(word => word.firstLang);

    return(
        <div className="parent_container_app">
          <NavbarRU onGameSelect={handleExerciseClick}/>
          {selectedExercise === "Adverbs" &&  <InputList correctAnswers={answers} words={words} labelValues={labelValues}/>}
          {selectedExercise === "Conjugations" &&  <InputList correctAnswers={answers2} words={words2} labelValues={labelValues2}/>}
          {selectedExercise === "Verb" &&  <InputList correctAnswers={answers3} words={words3} labelValues={labelValues3}/>}
          {selectedExercise === "Nouns - Who?" &&  <InputList correctAnswers={answers4} words={words4} labelValues={labelValues4}/>}
          {selectedExercise === "Nouns - What?" &&  <InputList correctAnswers={answers5} words={words5} labelValues={labelValues5}/>}
          {selectedExercise === "Combinations" &&  <InputList correctAnswers={answers6} words={words6} labelValues={labelValues6}/>}
          {selectedExercise === "Phrases" &&  <InputList correctAnswers={answers7} words={words7} labelValues={labelValues7}/>}
          {selectedExercise === "8" &&  <InputList correctAnswers={answers8} words={words8} labelValues={labelValues8}/>}
          {selectedExercise === "Flashcards" && <div className="flashcard_container">
                    {vocabularyList.map((word, index) => (
                      <Flashcard key={index} german={word.firstLang} french={word.secondLang} />
                    ))}
                  </div>}
          {/* {selectedExercise === "Sentences" && <AudioPracticeRussian shuffleArray={shuffleArray} englishSentenceList={sentenceList} russianSentenceList={chineseSentenceList} audioList={audioList} onSearch={handleSearch} selectedIndex={currentIndex}/>} */}
          <Footer/>
        </div>
    )
}

export default RussianDay4;
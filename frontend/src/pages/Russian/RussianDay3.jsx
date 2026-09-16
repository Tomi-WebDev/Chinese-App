import React, { useState } from "react"; 
import "../Italian/Italian.css";

import NavbarRU from "../../components/UI/Navbar/NavbarRU";
import Footer from "../../components/UI/Footer/Footer";
import Flashcard from "../../components/Flashcard/Flashcard";
import InputList from "../../components/InputList";
import AudioPracticeRussian from "../../components/AudioPracticeRussian/AudioPracticeRussian";
import Sudoku1 from "../../components/Sudoku/Sudoku1";
import PickHanzi from "../../components/PickHanzi/PickHanzi";

const RussianDay3 = () => {

    const [selectedExercise, setSelectedExercise] = useState("Test");
    // const [currentIndex, setCurrentIndex] = useState(0);

    const handleExerciseClick = (exerciseName) => {
      setSelectedExercise(exerciseName);
    };

    const [vocabularyList, setVocabularyList] = useState([
        { firstLang: "important", secondLang: "важно"},
        { firstLang: "terrible", secondLang: "ужасно"},
        { firstLang: "sometimes", secondLang: "иногда"},
        { firstLang: "wonderful", secondLang: "прекрасно"},
        { firstLang: "on the right", secondLang: "справа"},
        { firstLang: "on the left", secondLang: "слева"},
        { firstLang: "straight", secondLang: "прямо"},
    ]);

    const [vocabularyList2, setVocabularyList2] = useState([
        { firstLang: "because", secondLang: "потому что"},
    ]);

    const [vocabularyList3, setVocabularyList3] = useState([
        {firstLang: "I have a family", secondLang: "У меня есть семья"},
        {firstLang: "Do you have a girlfriend?", secondLang: "У тебя есть девушка?"},
        {firstLang: "He has a pen", secondLang: "У него есть ручка"},
        {firstLang: "She has a boyfriend", secondLang: "У неё есть парень"},
        {firstLang: "We have children", secondLang: "У нас есть дети"},
        {firstLang: "Do you have a car? (pl.)", secondLang: "У вас есть машина?"},
        {firstLang: "They have a job", secondLang: "У них есть работа"},
    ]);

    const [vocabularyList4, setVocabularyList4] = useState([
        { firstLang: "cat", secondLang: "кот"},
        { firstLang: "guest", secondLang: "гость"},
        { firstLang: "brother", secondLang: "брат"},
        { firstLang: "sister", secondLang: "сестра"},
        { firstLang: "husband", secondLang: "муж"},
        { firstLang: "wive", secondLang: "жена"},
        { firstLang: "neighbour", secondLang: "сосед"},
        { firstLang: "neighbour (f.)", secondLang: "соседка"},
        { firstLang: "son", secondLang: "сын"},
        { firstLang: "daughter", secondLang: "дочь"},
    ]);

    const [vocabularyList5, setVocabularyList5] = useState([
        { firstLang: "word", secondLang: "слово"},
        { firstLang: "family", secondLang: "семья"},
        { firstLang: "kitchen", secondLang: "кухня"},
        { firstLang: "street", secondLang: "улица"},
        { firstLang: "table", secondLang: "стол"},
        { firstLang: "chair", secondLang: "стул"},
        { firstLang: "question", secondLang: "вопрос"},
        { firstLang: "answer", secondLang: "ответ"},
        { firstLang: "news", secondLang: "новости"},
        { firstLang: "ring", secondLang: "кольцо"},
        { firstLang: "sofa", secondLang: "диван"},
        { firstLang: "life", secondLang: "жизнь"},
        { firstLang: "pharmacy", secondLang: "аптека"},
    ]);

    const [vocabularyList6, setVocabularyList6] = useState([
        { firstLang: "light eyes", secondLang: "светлые глаза"},
        { firstLang: "dark hair", secondLang: "тёмные волосы"},
        { firstLang: "close friend", secondLang: "близкий друг"},
        { firstLang: "loved one", secondLang: "любимый человек"},
    ]);

    const [vocabularyList7, setVocabularyList7] = useState([
        { firstLang: "May I come in?", secondLang: "Можно войти?"},
        { firstLang: "Yes, of course", secondLang: "Да, конечно"},
        { firstLang: "I am busy", secondLang: "Я занят"},
        { firstLang: "I am busy (f.)", secondLang: "Я занята"},
        { firstLang: "I agree", secondLang: "Я согласен"},
        { firstLang: "I agree (f.)", secondLang: "Я согласна"},
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

export default RussianDay3;
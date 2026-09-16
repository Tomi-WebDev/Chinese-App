import React, { useState } from "react";
import VocabQuiz from "../../components/VocabQuiz";
import Flashcard from "../../components/Flashcard/Flashcard";
import MultipleChoiceQuiz from "../../components/MultipleChoice/MultipleChoiceQuiz";

const RussianDay1 = () => {

    
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [vocabularyList, setVocabularyList] = useState([
        { german: 'I', french: 'я' },
        { german: 'you', french: 'ты' },
        { german: 'he', french: 'он' },
        { german: 'she', french: 'она' },
        { german: 'it', french: 'оно' },
        { german: 'we', french: 'мы' },
        { german: 'you (plural)', french: 'вы' },
        { german: 'they', french: 'они' },
      ]);

    const personalPronouns = ['я', 'ты' ,'он', 'она', 'оно', 'мы', 'вы', 'они'];
    const posessivePronouns = ['мой', 'моя' ,'моë', 'мои', 'твой', 'твоя', 'твоë', 'твои', "его", "еë", "наш", "наша", "наше", "наши", "ваш", "ваша", "ваше", "ваши", "их"];
    const questionWords = ['где', 'что','кто', 'как', "чей", "чья", "чьë", "чьи"];
    const importantWords = ["да", "нет", "и", "а", "конечно", "уже"];
    const textWords = ["Моя", "моя", "Мои", "Моя", "мой"];
    const nouns = ["сын", "муж", "мать", "отец (папа)", "дочь", "друг", "жена", "подруга", "тëтя", "дядя", "собака", "сестра", "брат", "учитель", "врач", "бабушка", "дедушка", "кот"];
    const nouns2 = ["город", "дом", "здание", "карандаш", "ручка", "книга", "вино", "море", "сумка", "окно"];
    const adverbs = ["плохо", "хорошо", "тоже", "очень хорошо", "очень плохо"];
    const phrases = ["привет", "здравствуйте", "Как дела", "Как тебя зовут", "Как вас зовут", "Можно?", "Вы не знаете", "Да, знаю", "Нет, не знаю", "Я понял", "Я, не понял"];
    const text = "Моя семья живет в большом доме. Во дворе у нас есть красивый сад. У меня есть два брата и одна сестра. Большой брат учится в университете, а младший и моя сестра ходят в школу. Мои братья и сестра всегда поддерживают меня, и мы проводим веселое время вместе. Отец и мать работают. Моя мама - учительница, а мой папа - инженер. Мы очень дружная семья, и каждый вечер мы собираемся вместе за ужином.";
    const questions = [
        {
            id: 1,
            text: "Это ___ кот. (его / их / ваш)",
            options: [
                { id: 'a', text: 'его', isCorrect: true },
                { id: 'b', text: 'их' },
                { id: 'c', text: 'ваш' },
            ],
        },
        {
            id: 2,
            text: "Где ___ сестра? (моя / её / наша)",
            options: [
                { id: 'a', text: 'моя' },
                { id: 'b', text: 'её' },
                { id: 'c', text: 'наша', isCorrect: true },
            ],
        },
        {
            id: 3,
            text: "Это ___ друзья, они пришли с ___ родителями. (ваш, их / наши, ваши / его, её)",
            options: [
                { id: 'a', text: 'ваш, их' },
                { id: 'b', text: 'наши, ваши', isCorrect: true },
                { id: 'c', text: 'его, её' },
            ],
        },
        {
            id: 4,
            text: "У меня есть два брата: старший - ___ и младший - ___. (её, моя / его, ваш / наша, их)",
            options: [
                { id: 'a', text: 'её, моя' },
                { id: 'b', text: 'его, ваш' },
                { id: 'c', text: 'наша, их', isCorrect: true },
            ],
        },
        {
            id: 5,
            text: "Где ___ фотографии? Я видел ___ фотографии вчера. (его, мои / ваши, её / наши, их)",
            options: [
                { id: 'a', text: 'его, мои' },
                { id: 'b', text: 'ваши, её' },
                { id: 'c', text: 'наши, их', isCorrect: true },
            ],
        },
        {
            id: 6,
            text: "Это ___ книга, а та - ___. (её, моя / его, ваш / их, наша)",
            options: [
                { id: 'a', text: 'моя, ваш', isCorrect: true },
                { id: 'b', text: 'его, их' },
                { id: 'c', text: 'ваш, наша' },
            ],
        },
        {
            id: 7,
            text: "___ мама приготовила отличный обед. ___ мама готовит очень вкусно. (my, your)",
            options: [
                { id: 'a', text: 'Eго, мои' },
                { id: 'b', text: 'Ваши, её' },
                { id: 'c', text: 'Моя, твоя', isCorrect: true },
            ],
        },
        {
            id: 8,
            text: "Это ___ кофе, а тот - ___. (my, your)",
            options: [
                { id: 'a', text: 'ваш, мой' },
                { id: 'b', text: 'его, её' },
                { id: 'c', text: 'мой, твой', isCorrect: true },
            ],
        },
        {
            id: 9,
            text: "___ сестра и ___ брат часто играют вместе. (моя, ваш / её, его / наша, их)",
            options: [
                { id: 'a', text: 'моя, ваш' },
                { id: 'b', text: 'её, его', isCorrect: true },
                { id: 'c', text: 'наша, их' },
            ],
        },
        {
            id: 10,
            text: "Это ___ собака, а та - ___. (её, моя / его, ваш / их, наша)",
            options: [
                { id: 'a', text: 'моя, ваш' },
                { id: 'b', text: 'его, её' },
                { id: 'c', text: 'их, наша', isCorrect: true },
            ],
        },
    ];

    const exercises = [
        { name: "VocabQuiz", component: <VocabQuiz vocabularyList={vocabularyList} setVocabularyList={setVocabularyList} /> },
        { name: "Flashcard", component: (
          <div className="flashcard_container">
            {vocabularyList.map((word, index) => (
              <Flashcard key={index} german={word.german} french={word.french} firstLanguageCode={"en"} secondLanguageCode={"ru"}/>
            ))}
          </div>
        ) },
        { name: "Multiple Choice Quiz", component: <MultipleChoiceQuiz vocabularyList={vocabularyList} /> },
        // { name: "DragAndDrop", component: <DragAndDrop correctAnswers={answers} words={words} labelValues={labelValues} /> },
        // { name: "DuolingoDragAndDrop", component: <DuolingoDragAndDrop correctAnswers={answers} words={wordsSentence} words2={wordsSentence2} labelValues={labelValues} /> },
        // { name: "Sudoku1", component: <Sudoku1 /> },
        // { name: "FillSentence", component: (
        //   <FillSentence
        //     sentences={sentencesFill}
        //     words={wordsFillSentence}
        //     correctAnswers={answersFillSentence}
        //   />
        // ) },
      ];

      const handleExerciseClick = (exerciseName) => {
        setSelectedExercise(exerciseName);
      };


      return (
        <div className="parent_container">
            <div className="exercise_buttons">
            {exercises.map((exercise, index) => (
              <button key={index} onClick={() => handleExerciseClick(exercise.name)}>
                {exercise.name}
              </button>
            ))}
          </div>
          {selectedExercise !== null && exercises.find(exercise => exercise.name === selectedExercise).component}
        </div>
      )
    
}

export default RussianDay1;
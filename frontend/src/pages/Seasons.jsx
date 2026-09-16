import React, { useEffect, useState } from "react";
import VocabQuiz from "../components/VocabQuiz";
import Flashcard from "../components/Flashcard/Flashcard";
import MultipleChoiceQuiz from "../components/MultipleChoice/MultipleChoiceQuiz";
import DragAndDrop from "../components/DragAndDrop/DragAndDrop";
// import AnimalSudokuPage from "../components/AnimalSudoku";

const Seasons = (props) => {

  const [selectedExercise, setSelectedExercise] = useState(null);

  // Shuffles an array using Fisher-Yates algorithm
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    const [vocabularyList, setVocabularyList] = useState([
      { german: "der Jahreszeit", french: "la saison" },
      { german: "der Frühling", french: "le printemps" },
      { german: "der Sommer", french: "l'été" },
      { german: "der Herbst", french: "l'automne" },
      { german: "der Winter", french: "l'hiver" },
    ]);

    useEffect(() => {
      const languageMappings = {
        de: {
          fr: [
            { german: "der Jahreszeit", french: "la saison" },
            { german: "der Frühling", french: "le printemps" },
            { german: "der Sommer", french: "l'été" },
            { german: "der Herbst", french: "l'automne" },
            { german: "der Winter", french: "l'hiver" },
          ],
          en: [
            { german: "der Jahreszeit", french: "season" },
            { german: "der Frühling", french: "spring" },
            { german: "der Sommer", french: "summer" },
            { german: "der Herbst", french: "autumn" },
            { german: "der Winter", french: "winter" },
          ],
        },
        fr: {
          de: [
            { german: "la saison", french: "der Jahreszeit" },
            { german: "le printemps", french: "der Frühling" },
            { german: "l'été", french: "der Sommer" },
            { german: "l'automne", french: "der Herbst" },
            { german: "l'hiver", french: "der Winter" },
          ],
          en: [
            { german: "la saison", french: "season" },
            { german: "le printemps", french: "spring" },
            { german: "l'été", french: "summer" },
            { german: "l'automne", french: "autumn" },
            { german: "l'hiver", french: "winter" },
          ],
        },
        en: {
          de: [
            { german: "season", french: "der Jahreszeit" },
            { german: "spring", french: "der Frühling" },
            { german: "summer", french: "der Sommer" },
            { german: "autumn", french: "der Herbst" },
            { german: "winter", french: "der Winter" },
          ],
          fr: [
            { german: "season", french: "la saison" },
            { german: "spring", french: "le printemps" },
            { german: "summer", french: "l'été" },
            { german: "autumn", french: "l'automne" },
            { german: "winter", french: "l'hiver" },
          ],
        },
      };
    
      const vocabulary = languageMappings[props.firstLanguage]?.[props.secondLanguage];
    
      if (vocabulary) {
        setVocabularyList(vocabulary);
      } else {
        // Handle the case when the combination of languages is not supported.
        setVocabularyList([]);
      }
    }, [props.firstLanguage, props.secondLanguage]);

      const title = "Days of the Week";

      const answers = vocabularyList.map(word => word.french);
      const words = vocabularyList.map(word => word.french);
      const labelValues = vocabularyList.map(word => word.german);

      shuffleArray(words);

      const exercises = [
        { name: "VocabQuiz", component: <VocabQuiz title={title} vocabularyList={vocabularyList} setVocabularyList={setVocabularyList} /> },
        { name: "Flashcard", component: (
          <div className="flashcard_container">
            {vocabularyList.map((word, index) => (
              <Flashcard key={index} german={word.german} french={word.french} firstLanguageCode={props.firstLanguage} secondLanguageCode={props.secondLanguage}/>
            ))}
          </div>
        ) },
        { name: "Multiple Choice Quiz", component: <MultipleChoiceQuiz vocabularyList={vocabularyList} /> },
        { name: "DragAndDrop", component: <DragAndDrop correctAnswers={answers} words={words} labelValues={labelValues} /> },
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

export default Seasons;
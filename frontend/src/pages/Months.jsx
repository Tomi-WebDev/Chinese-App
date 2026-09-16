import React, { useState } from "react";
import VocabQuiz from "../components/VocabQuiz";
import Flashcard from "../components/Flashcard/Flashcard";
import MultipleChoiceQuiz from "../components/MultipleChoice/MultipleChoiceQuiz";
import DragAndDrop from "../components/DragAndDrop/DragAndDrop";
// import AnimalSudokuPage from "../components/AnimalSudoku";

const Monate = () => {

  const [selectedExercise, setSelectedExercise] = useState(null);

  // Shuffles an array using Fisher-Yates algorithm
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    const [vocabularyList, setVocabularyList] = useState([
        { german: "der Januar", french: "janvier" },
        { german: "der Februar", french: "février" },
        { german: "der März", french: "mars" },
        { german: "der April", french: "avril" },
        { german: "der Mai", french: "mai" },
        { german: "der Juni", french: "juin" },
        { german: "der Juli", french: "juillet" },
        { german: "der August", french: "août" },
        { german: "der September", french: "septembre" },
        { german: "der Oktober", french: "octobre" },
        { german: "der November", french: "novembre" },
        { german: "der Dezember", french: "décembre" },
      ]);

      const title = "Monate";

      const answers = vocabularyList.map(word => word.french);
      const words = vocabularyList.map(word => word.french);
      const labelValues = vocabularyList.map(word => word.german);

      shuffleArray(words);

      const exercises = [
        { name: "VocabQuiz", component: <VocabQuiz title={title} vocabularyList={vocabularyList} setVocabularyList={setVocabularyList} /> },
        { name: "Flashcard", component: (
          <div className="flashcard_container">
            {vocabularyList.map((word, index) => (
              <Flashcard key={index} german={word.german} french={word.french} />
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

export default Monate;
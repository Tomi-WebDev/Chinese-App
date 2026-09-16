import React, { useState } from "react";
import VocabQuiz from "../components/VocabQuiz";
import Flashcard from "../components/Flashcard/Flashcard";
import MultipleChoiceQuiz from "../components/MultipleChoice/MultipleChoiceQuiz";
import DragAndDrop from "../components/DragAndDrop/DragAndDrop";
// import AnimalSudokuPage from "../components/AnimalSudoku";

const FoodsOne = () => {

  const [selectedExercise, setSelectedExercise] = useState(null);

  // Shuffles an array using Fisher-Yates algorithm
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    const [vocabularyList, setVocabularyList] = useState([
        { german: "die Banane", french: "la banane" },
        { german: "die Butter", french: "le beurre" },
        { german: "das Sauerkraut", french: "la choucroute" },
        { german: "die Marmelade", french: "la confiture" },
        { german: "das Croissant, das Hörnchen", french: "le croissant" },
        { german: "die Pommes", french: "les frites" },
        { german: "der Käse", french: "le fromage" },
        { german: "das Obst", french: "les fruits" },
        { german: "der Kuchen", french: "le gâteau" },
        { german: "das Eis", french: "la glace" },
        { german: "das Gemüse", french: "le légume" },
        { german: "das Ei", french: "l'œuf" },
        { german: "die Apfelsine", french: "l'orange" },
        { german: "das Brot", french: "le pain" },
      ]);

      const title = "Foods One";

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

export default FoodsOne;
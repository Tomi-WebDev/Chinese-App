import React, { useState } from 'react';
import Congratulations from "../UI/CongratulationsPopUp/Congratulations.jsx";

const MultipleChoiceQuiz = ({ vocabularyList }) => {

  const initialQuestions = vocabularyList.slice(0, vocabularyList.length).map((word) => {
    const randomNumber = Math.floor(Math.random() * 4);
    const options = new Array(4);
    const incorrectOptions = new Set();

    for (let i = 0; i < 4; i++) {
      if (i === randomNumber) {
        options[i] = word.french;
      } else {
        let randomIncorrectOption;
        do {
          randomIncorrectOption = getRandomIncorrectOption(vocabularyList, word.french);
        } while (incorrectOptions.has(randomIncorrectOption));
  
        incorrectOptions.add(randomIncorrectOption);
        options[i] = randomIncorrectOption;
      }
    }
  
    return {
      question: word.german,
      options,
      correctAnswer: word.french,
      userAnswer: null,
    };
  });  

  const [questions, setQuestions] = useState(initialQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [check, setCheck] = useState(false);
  const [score, setScore] = useState(0);

  const handleCheck = () => {
    const question = questions[currentQuestion];
    if (question.userAnswer === question.correctAnswer) {
      // If the user's answer is correct, increase the score
      setScore(score + 1);
    }
    // Move to the next question
    if (currentQuestion < vocabularyList.length - 1) {
      console.log(currentQuestion)
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion === vocabularyList.length - 1) {
        setCheck(true);
    }

    const scorePercentage = (score / vocabularyList.length) * 100;
        if(scorePercentage === 100) {
            setIsCompleted(true);
        }
        // setResetComponent(true);
  };

  const handleReset = () => {

    setCheck(false);
    setCurrentQuestion(0);
    setScore(0);
    const resetQuestions = questions.map((question) => ({
      ...question,
      userAnswer: null,
    }));
    setQuestions(resetQuestions);
  };

  const handleOptionSelect = (option) => {

    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].userAnswer = option;
    setQuestions(updatedQuestions);
  };

  return (
        <div className="multiple_choice_container">
          <div className="multiple_choice_header">
            <p className='number'>{currentQuestion + 1}</p>
            <p><strong>{questions[currentQuestion].question}</strong></p>
          </div>
          <ul>
            {questions[currentQuestion].options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={option}
                    checked={questions[currentQuestion].userAnswer === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                </label>
                <span>{option}</span>
                {questions[currentQuestion].userAnswer === option ? (
                    questions[currentQuestion].userAnswer ===
                    questions[currentQuestion].correctAnswer ? (
                      <span className='tick' style={{ color: 'green' }}>✔</span>
                    ) : (
                      <span className='tick' style={{ color: 'red' }}>✘</span>
                    )
                  ) : null}
              </li>
            ))}
          </ul>
          {check ? (
            <>
              <button onClick={handleReset}>Start Over</button>
              <p>Score: {score}/{vocabularyList.length}</p>
              {/* <Congratulations /> */}
            </>
          ) : (
            <>
              <button onClick={handleCheck}>Next</button>
            </>
          )}
          {isCompleted ? <Congratulations /> : null}
        </div>
  );
};

export default MultipleChoiceQuiz;

// Helper function to get a random incorrect option

function getRandomIncorrectOption(vocabularyList, correctAnswer) {
  let randomOption;
  do {
    const randomIndex = Math.floor(Math.random() * vocabularyList.length);
    randomOption = vocabularyList[randomIndex].french;
  } while (randomOption === correctAnswer);
  return randomOption;
}
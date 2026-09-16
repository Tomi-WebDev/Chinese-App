import React, { useState } from 'react';

const VocabQuiz = ({ title, vocabularyList, setVocabularyList }) => {

  const [frenchAnswers, setFrenchAnswers] = useState(Array(vocabularyList.length).fill(''));
  const [check, setCheck] = useState(false);    
  const [score, setScore] = useState(0);
  const [buttonLabel, setButtonLabel] = useState('Submit');

  const handleFrenchChange = (index, value) => {
    const newfrenchAnswers = [...frenchAnswers];
    newfrenchAnswers[index] = value;
    setFrenchAnswers(newfrenchAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (check) {
      // Reset the input values and clear the "isCorrect" flags
      const updatedVocabularyList = vocabularyList.map((word) => ({
        ...word,
        isCorrect: undefined,
      }));
  
      setFrenchAnswers(Array(vocabularyList.length).fill(''));
      setVocabularyList(updatedVocabularyList);
      setCheck(false);
      setButtonLabel('Submit');
      setScore(0);
    } else {
      // Handle the submission logic as you already have
      let newScore = 0;
  
      const updatedVocabularyList = vocabularyList.map((word, index) => {
        if (frenchAnswers[index] === word.french) {
          newScore++;
          return { ...word, isCorrect: true };
        } else {
          return { ...word, isCorrect: false };
        }
      });
  
      setScore(newScore);
      setVocabularyList(updatedVocabularyList);
      setCheck(true);
      setButtonLabel('Reset');
    }
  };
  

  return (
    // <div className='test_parent'>
      <div className='test_container'>
            {vocabularyList.map((word, index) => (
            <div className='box' key={index}>
                <span>{word.german}</span>
                <div className='input_container'>
                  <input
                    style={check === true ? word.isCorrect ? {color: 'green'} : {color: 'red'} : {color: '#333'}}
                    type="text"
                    placeholder="Français"
                    value={check === true ? frenchAnswers[index] === vocabularyList[index].french ? frenchAnswers[index] : `${frenchAnswers[index]} (${vocabularyList[index].french})` : frenchAnswers[index]}
                    onChange={(e) => handleFrenchChange(index, e.target.value)}
                  />
                  {word.isCorrect !== undefined &&
                  (word.isCorrect ? (
                      <span style={{ color: 'green' }}>✔</span>
                  ) : (
                      <span style={{ color: 'red' }}>✘</span>
                  ))}
                </div>
            </div>
            ))}
            <button onClick={handleSubmit}>{buttonLabel}</button>
            { check ? <div className='score'>Score: {score}/{vocabularyList.length}</div> : null}
      </div>
    // </div>
  );
};

export default VocabQuiz;